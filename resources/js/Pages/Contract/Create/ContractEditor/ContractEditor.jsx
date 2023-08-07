// resources/js/Pages/Contract/Create/ContractEditor/ContractEditor.jsx
import React, { useState, useCallback, useRef } from "react";
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

const ContractEditor = ({ onContractChange , props }) => {
    const editorCore = useRef(null);
    const ReactEditorJS = createReactEditorJS();
    const [contract, setContract] = useState("");

    const handleInitialize = useCallback((instance) => {
        editorCore.current = instance;
    }, []);

    const handleTyping = useCallback(async () => {
        const savedData = await editorCore.current.save();
        onContractChange(savedData);
    }, [onContractChange]);

    return (
        <>
            <div className="prose px-20 w-full mx-auto bg-white rounded-lg py-12 h-max ">
                <ReactEditorJS
                    onInitialize={handleInitialize}
                    onChange={handleTyping}
                    tools={EDITOR_JS_TOOLS}
                    className="bg-red-400"
                    defaultValue={{
                        blocks: [
                            {
                                id: "sheNwCUP5A",
                                type: "header",
                                data: {
                                    text: "Contract Title",
                                    level: 1,
                                },
                            },
                            {
                                id: "sheNXCUP5A",
                                type: "header",
                                data: {
                                    text: "Example contract description",
                                    level: 4,
                                },
                            },
                            {
                                id: "12iM3lqzcm",
                                type: "paragraph",
                                data: {
                                    text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.",
                                },
                            },
                        ],
                    }}
                />
            </div>
        </>
    );
};

export default ContractEditor;
