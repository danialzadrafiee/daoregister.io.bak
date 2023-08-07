// resources/js/Pages/Contract/Create/ContractEditor/ContractEditor.jsx
import React, { useState, useCallback, useRef, useEffect } from "react";
import { createReactEditorJS } from "react-editor-js";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import List from "@editorjs/list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";
import "./ContractEditor.scss";
import QRCode from "qrcode.react";
import axios from "axios";
import HumanReadableDate from "@/components/HumanReadableDate";
import Label from "@/components/Label";
const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
};
const ContractEditor = ({
    onContractChange,
    defaultValue,
    contract_contract,
    props,
}) => {
    const editorCore = useRef(null);
    const ReactEditorJS = createReactEditorJS();
    const [contractDaoName, setContractDaoName] = useState("");
    const handleInitialize = useCallback((instance) => {
        editorCore.current = instance;
    }, []);

    const getContractName = async () => {
        const contract = await axios.get(
            route("dao.get_dao_by_id", contract_contract.id)
        );
        console.log(contract.data.name);
        setContractDaoName(contract.data.name);
    };

    useEffect(() => {
        getContractName();
    }, []);

    return (
        <>
            <div className="prose  bg-white rounded-lg h-max ">
                <header className="flex px-10 pt-6 items-center pb-5 justify-between border-b">
                    <div className="flex gap-3 h-14  items-center">
                        <img
                            className="w-14 rounded"
                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${contractDaoName}`}
                        />
                        <div className="flex flex-col">
                            <div className="font-semibold">
                                {contractDaoName}
                            </div>
                            <div className="text-sm">
                                <HumanReadableDate
                                    timestamp={contract_contract.created_at}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">Token</div>
                        <div className="text-sm">{contract_contract.token}</div>
                    </div>
                </header>
                <div className="flex gap-3 w-max z-10 items-end px-10 relative">
                    <div className="bg-dn7 h-32 flex justify-end items-center flex-col px-2 pb-4">
                        <QRCode
                            bgColor="transparent"
                            fgColor="white"
                            renderAs="svg"
                            value="test"
                            size={80}
                        />
                    </div>
                    <div className="flex flex-col pb-8 text-white ">
                        <div className="font-semibold leading-3 text-lg">
                            {contract_contract.name}
                        </div>
                        <div>{contract_contract.describe}</div>
                    </div>
                </div>
                <div className="relative -mt-24 z-0  full h-20  bg-dp1"></div>
                <div className="px-10">
                    <ReactEditorJS
                        readOnly={true}
                        onInitialize={handleInitialize}
                        tools={EDITOR_JS_TOOLS}
                        className="bg-red-400"
                        defaultValue={JSON.parse(defaultValue)}
                    />
                </div>
                <footer className="border-t px-10 py-4">
                    <Label title="Signatures" />
                    <div className="grid  grid-cols-5">
                        {contract_contract.members.map((member) => (
                            <div className="flex w-max gap-1 flex-col">
                                <QRCode value="test" size={64} />
                                <div className="text-sm text-center">
                                    #{member.id}
                                </div>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </>
    );
};

export default ContractEditor;
