import React, { useState } from "react";
import { router } from "@inertiajs/react";
import axios from "axios";
import Page from "@/components/Page";
import Card from "@/components/Card";
import FileUpload from "@/components/FileUpload";
import Icon from "@/components/Icon";
import MemberModal from "@/components/MemberModal";
import SignatureType from "./SignatureType/SignatureType";
import ContractEditor from "./ContractEditor/ContractEditor";
import Members from "./Members/Members";
import NameAndDescribe from "./NameAndDescribe/NameAndDescribe";
import Label from "@/components/Label";
import Joi from "joi";
import "./index.scss";

const user_creator = await axios.get(route("user.get_user_by_auth"));

const ContractCreate = ({ dao_id }) => {
    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
    const [inputFields, setInputFields] = useState([
        { email: user_creator.data.email, role: "Creator" },
    ]);
    const [files, setFiles] = useState([]);
    const [fileUrl, setfileUrl] = useState([]);

    const [visibleModal, setVisibleModal] = useState(false);
    const [signatureType, setSignatureType] = useState("owner");
    const [formData, setFormData] = useState({
        dao_id: dao_id,
        name: "",
        describe: "",
        signatureType: "owner",
        members: [{ name: user_creator.data.email, role: "Creator" }],
        contract: "",
        fileUrl: "",
    });
    const schema = Joi.object({
        dao_id: Joi.number().required(),
        name: Joi.string().required(),
        describe: Joi.string().required(),
        signatureType: Joi.string()
            .valid("owner", "majority", "both")
            .required(),
        members: Joi.array()
            .items(
                Joi.object({
                    email: Joi.string()
                        .email({ tlds: { allow: false } })
                        .required(),
                    role: Joi.string()
                        .valid("Creator", "Signatory", "Observer")
                        .required(),
                })
            )
            .required(),
        contract: Joi.object().required(),
        fileUrl: Joi.string().uri(),
    });
    const handleUserSelect = (user, index) => {
        const values = [...inputFields];
        values[index].email = user.email;
        setInputFields(values);
        setVisibleModal(false);
        setSelectedEmailIndex(null);
    };

    const handleEmailClick = (index) => {
        setSelectedEmailIndex(index);
        setVisibleModal(true);
    };
    const handleFileUpload = (fileUrl) => {
        setfileUrl(fileUrl);
        setFormData({
            ...formData,
            fileUrl: fileUrl,
        });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSignatureTypeChange = (e) => {
        setSignatureType(e);
        setFormData({
            ...formData,
            signatureType: e,
        });
    };

    const handleMemebrsChange = (e) => {
        setInputFields(e);
        setFormData({
            ...formData,
            members: e, // Assuming 'e' is the new members array
        });
    };

    const handleContractChange = (contract) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            contract: contract,
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
        const { error, value } = schema.validate(formData);
        if (error) {
            console.log(error.details[0].message);
        } else {
            router.post(route("contract.store"), formData);
        }
    };

    return (
        <Page>
            <div className="flex gap-4 relative">
                <div className="flex flex-col gap-4">
                    <Card
                        className="w-[940px] shrink-0"
                        title="Generate contract"
                        classTitle="title-green"
                    >
                        <NameAndDescribe
                            handleInputChange={handleInputChange}
                        />
                        <SignatureType
                            signatureType={signatureType}
                            handleClick={(e) => handleSignatureTypeChange(e)}
                        />
                        <Label title="Members" />
                        <Members
                            roles={["Owner", "Signatory", "Observer"]}
                            onEmailClick={handleEmailClick}
                            inputFields={inputFields}
                            setInputFields={(e) => handleMemebrsChange(e)}
                            className="mt-4"
                        />
                    </Card>
                    <Card title="Generate Content" classTitle="title-green">
                        <ContractEditor
                            onContractChange={handleContractChange}
                        />
                    </Card>
                    <Card className={"flex justify-end"}>
                        <button onClick={handleSubmit} className="button">
                            Generate
                        </button>
                    </Card>
                </div>
                <div className="w-[340px] shrink-0">
                    <Card
                        title="Contract Attachment"
                        classTitle="title-purple"
                        className="h-max !sticky top-[120px]"
                    >
                        <FileUpload
                            folder="contract"
                            files={files}
                            setFiles={setFiles}
                            fileUrl={fileUrl}
                            setfileUrl={(fileUrl) => handleFileUpload(fileUrl)}
                        />
                    </Card>
                </div>
            </div>

            <MemberModal
                inputFields={inputFields}
                selectedEmailIndex={selectedEmailIndex}
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                setVisibleModal={setVisibleModal}
                setSelectedEmailIndex={setSelectedEmailIndex}
                onUserSelect={handleUserSelect}
            />
        </Page>
    );
};

export default ContractCreate;
