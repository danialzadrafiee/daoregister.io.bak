// React & Libraries
import React, { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { router } from "@inertiajs/react";

// Components
import Page from "@/components/Page";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import Icon from "@/components/Icon";
import Checkbox from "@/components/Checkbox";
import MemberModal from "@/components/MemberModal";
import FileUpload from "@/components/FileUpload";
import Members from "./Members/Members";

// Utils & Styles
import cn from "classnames";
import "./DaoCreate.scss";

const features = ["Contracts", "Automation", "Shop", "Letters"];
const user_creator = await axios.get(route("user.get_user_by_auth"));

const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    symbol: Joi.string().min(2).max(100).required(),
    describe: Joi.string().min(5).max(320).required(),
    features: Joi.array().min(1),
    members: Joi.array()
        .items(
            Joi.object({
                email: Joi.string()
                    .email({ tlds: { allow: false } })
                    .required(),
                role: Joi.string().required(),
                share: Joi.number().allow(""),
            })
        )
        .required()
        .min(2),
    fileUrl: Joi.string().uri(),
});

// Main function
const DaoCreate = ({ className, user }) => {
    // State declarations
    const [inputFields, setInputFields] = useState([
        { email: user_creator.data.email, role: "Creator", share: "" },
    ]);
    const [formData, setFormData] = useState({
        name: "",
        symbol: "",
        describe: "",
        features: [],
    });
    const roles = [
        "Creator",
        "Founder",
        "ShareHolder",
        "Teammate",
        "Member",
        "Employee",
        "Observer",
    ];
    const [visibleModal, setVisibleModal] = useState(false);
    const [files, setFiles] = useState([]);
    const [fileUrl, setfileUrl] = useState([]);
    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);

    // Event handlers
    const handleUserSelect = (user, index) => {
        const values = [...inputFields];
        values[index].email = user.email;
        setInputFields(values);
        setVisibleModal(false);
        setSelectedEmailIndex(null);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = { ...formData, members: inputFields, fileUrl };
        console.log(dataToSend);
        console.log(schema.validate(dataToSend));
        router.post(
            route("dao.store", dataToSend, {
                onSuccess: (page) => {
                    console.log("Data saved successfully!");
                },
                onError: (errors) => {
                    console.error("Error sending data:", errors);
                },
            })
        );
    };
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevState) => {
            if (checked) {
                return {
                    ...prevState,
                    features: [...prevState.features, value],
                };
            } else {
                return {
                    ...prevState,
                    features: prevState.features.filter(
                        (item) => item !== value
                    ),
                };
            }
        });
    };

    const handleEmailClick = (index) => {
        setSelectedEmailIndex(index);
        setVisibleModal(true);
    };
    //Render
    return (
        <Page>
            <main className="max-w-4xl">
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                    <Card
                        title="Name & description"
                        classTitle="title-green"
                        className={"max-w-4xl flex flex-col gap-8"}
                        head={
                            <button
                                className={cn("button-stroke button-small")}
                                onClick={() => window.history.back()}
                            >
                                <Icon name="arrow-left" size="24" />
                                <span>Back</span>
                            </button>
                        }
                    >
                        <div className="grid gap-2 -mt-8 grid-flow-row grid-cols-1 md:grid-cols-2">
                            <TextInput
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                label="Organization Name"
                                tooltip="Maximum 100 characters."
                            />
                            <TextInput
                                name="symbol"
                                value={formData.symbol}
                                onChange={handleChange}
                                label="Symbol"
                                tooltip="Maximum 100 characters."
                            />
                        </div>
                        <TextArea
                            name="describe"
                            defaultValue={formData.describe}
                            onChange={handleChange}
                            label="Description about organization"
                            tooltip="Maximum 300 characters."
                        />
                    </Card>
                    <Card title="Document" classTitle="title-yellow">
                        <FileUpload
                            folder="dao"
                            files={files}
                            setFiles={setFiles}
                            fileUrl={fileUrl}
                            setfileUrl={setfileUrl}
                        />
                    </Card>
                    <Card
                        title="Members & Share holders"
                        classTitle="title-purple"
                    >
                        <Members
                            roles={roles}
                            onEmailClick={handleEmailClick}
                            inputFields={inputFields}
                            setInputFields={setInputFields}
                        />
                    </Card>
                    <Card title="Dao Feauters" classTitle="title-blue">
                        <div className="grid-cols-2  gap-4 md:grid-cols-4 grid grid-flow-row">
                            {features.map((e) => (
                                <Checkbox
                                    key={e}
                                    name={"features"}
                                    onChange={handleCheckboxChange} // Use the new handler here
                                    value={e}
                                    content={e}
                                />
                            ))}
                        </div>
                    </Card>
                    <Card className={"flex justify-end items-center"}>
                        <button className="button">submit</button>
                    </Card>
                </form>
            </main>
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

export default DaoCreate;
