import React, { useState } from "react";
import cn from "classnames";
import styles from "./Members.module.sass";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import CustomerList from "./CustomerList";
import Dropdown from "@/components/Dropdown";

const options = [
    "Creator",
    "Founder",
    "ShareHolder",
    "Observer",
    "Employee",
    "Member",
];

const Members = ({ className }) => {
    const [content, setContent] = useState();
    const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    };

    const addFields = () => {
        let newfield = { name: "", age: "" };
        setInputFields([...inputFields, newfield]);
    };

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };

    const [visibleModal, setVisibleModal] = useState(false);
    const [sorting, setSorting] = useState(options[0]);

    return (
        <>

        </>
    );
};

export default Members;
