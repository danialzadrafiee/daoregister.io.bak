import React, { useState } from "react";
import cn from "classnames";
import styles from "./NameAndDescription.module.sass";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import Editor from "@/components/Editor";
import DaoContext from "../DaoContext";

const NameAndDescription = ({ className }) => {
    const { title, setTitle } = React.useContext(DaoContext);
    const { description, setDescription } = React.useContext(DaoContext);
    return (

    );
};

export default NameAndDescription;
