import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";
import { writeContract } from "@wagmi/core";
import axios from "axios";
import Web3 from "web3";
import { abi } from "./abi.js";

const GLOBAL_AUTH_USER = await axios.get(route("user.get_user_by_auth"));
const GLOBAL_CONTRACT = "0x66aaf05ccf61a760ce547fe44bdc93492ca9c580";
const GLOBAL_PUB = "0x9e5d516b80f94C55fc8061d9cacCfA98b585c8ee";
const GLOBAL_PVK =
    "12092187c9d7507cd4b85772a1cb3d452b00d77e1c9fe4476c352858c4d0348f";


const dataUrl_dom_to_img = async (domClassName, method = "html2canvas") => {
    let node = document.querySelector(`.${domClassName}`);
    if (method === "domtoimage") {
        return domtoimage.toPng(node);
    } else {
        let canvas = await html2canvas(node);
        return canvas.toDataURL();
    }
};

const url_upload_img = (dataUrl, token, folder) =>
    axios
        .post(route("nft.upload_nft_image"), { image: dataUrl, token, folder })
        .then((r) => r.data.url);

const url_upload_json = (
    name,
    description,
    image,
    token,
    attributes = null,
    folder
) =>
    axios
        .post(route("nft.create_json_nft"), {
            json: { name, description, image, attributes },
            token,
            folder,
        })
        .then((r) => r.data);

let accountAddress = GLOBAL_AUTH_USER.wallet;
const contractAddress = GLOBAL_CONTRACT;

const mint_nft = async (jsonUrl, token) => {
    const functionName = "mintToken";
    const args = [token, accountAddress, jsonUrl];
    const config = {
        abi,
        address: contractAddress,
        functionName,
        args,
        account: accountAddress,
    };
    const { hash } = await writeContract(config);
    return hash;
};

const mint_nft_paid = async (jsonUrl, token) => {
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            "https://celo-alfajores.infura.io/v3/43fc8fa086844be0831a586fe4b764b5"
        )
    );
    const contract = new web3.eth.Contract(abi, contractAddress);
    const signerAccount = GLOBAL_PUB;
    const reciverAccount = GLOBAL_AUTH_USER.wallet;
    const privateKey = GLOBAL_PVK;
    const txData = contract.methods
        .mintToken(token, reciverAccount, jsonUrl)
        .encodeABI();
    const gasEstimate = await contract.methods
        .mintToken(token, accountAddress, jsonUrl)
        .estimateGas({ from: signerAccount });
    const gasPrice = await web3.eth.getGasPrice();
    const nonce = await web3.eth.getTransactionCount(signerAccount, "pending");
    const tx = {
        from: signerAccount,
        to: contractAddress,
        gas: gasEstimate,
        gasPrice,
        nonce,
        data: txData,
    };
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    return new Promise((resolve, reject) => {
        web3.eth
            .sendSignedTransaction(signedTx.rawTransaction)
            .on("receipt", (receipt) => resolve(receipt))
            .on("error", (error) => reject(error));
    });
};

const store_nft = (user_id, hash, type = "profile", token, json) =>
    axios
        .post(route("nft.store"), { id: user_id, type, token, url: json, hash })
        .then((stored_nft) => stored_nft.data.id);

const update_user_profile = (user_id, nft_id) =>
    axios
        .post(route("api.update"), { id: user_id, profile_nft_id: nft_id })
        .then((user) => user);

const dynamic_mint = async (jsonUrl, token) => {
    if ($(".js_check_paid").val() == 1) {
        const hashObject = await mint_nft_paid(jsonUrl, token);
        return hashObject.transactionHash;
    } else {
        return await mint_nft(jsonUrl, token);
    }
};

export const generate_nft = async (
    user_id,
    domClassName,
    token,
    folder,
    name,
    description,
    attributes = null,
    update = false,
    data = null
) => {
    $(".js_loading").removeClass("hidden");
    const dataUrl = await dataUrl_dom_to_img(domClassName);
    const imageUrl = await url_upload_img(dataUrl, token, folder);
    const jsonUrl = await url_upload_json(
        name,
        description,
        imageUrl,
        token,
        null,
        folder
    );
    const hash = await dynamic_mint(jsonUrl, token);
    const nft_id = await store_nft(user_id, hash, folder, token, jsonUrl);

    if (update) {
        const user = await update_user_profile(user_id, nft_id);
        window.location.reload();
    }

    if (data != null) {
        if (data.type == "cert") {
            axios
                .post(route("api.update_certificate"), {
                    cert_id: data.id,
                    token,
                })
                .then((r) => console.log(r));
        }
        if (data.type == "ballot") {
            axios
                .post(route("api.update_ballot"), {
                    ballot_id: data.ballot_id,
                    token,
                })
                .then(() => window.location.reload());
        }
        if (data.type == "petition") {
            axios
                .post(route("api.update_petition"), {
                    petition_id: data.petition_id,
                    token,
                })
                .then(() => window.location.reload());
        }
        if (data.type == "event") {
            axios
                .post(route("api.update_event"), {
                    event_id: data.event_id,
                    token,
                })
                .then(() => window.location.reload());
        }
    }
};
