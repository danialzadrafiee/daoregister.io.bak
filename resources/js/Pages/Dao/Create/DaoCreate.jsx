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
import MemberField from "./MemberField/MemberField";
import MemberModal from "./MemberModal";
import FileUpload from "./FileUpload";

// Utils & Styles
import cn from "classnames";
import "./DaoCreate.scss";

const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(100).required(),
    symbol: Joi.string().alphanum().min(2).max(100).required(),
    describe: Joi.string().min(5).max(320).required(),
    features: Joi.array().min(1),
    members: Joi.array()
        .items(
            Joi.object({
                email: Joi.string()
                    .email({ tlds: { allow: false } })
                    .required(),
                role: Joi.string().required(),
                share: Joi.number().allow(""), // Assuming share can be an empty string
            })
        )
        .required()
        .min(2),
    fileUrl: Joi.string().uri(), // Assuming fileUrl contains URIs
});

const transformData = (fields) => {
    let members = [];

    fields.forEach((field) => {
        members.push(field.member[0]);
    });

    return { members };
};

const features = ["Contracts", "Automation", "Shop", "Letters"];
const user_creator = await axios.get(route("user.get_user_by_auth"));

//Main function
const CreateDao = ({ className, user }) => {
    const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);

    const renderButtons = (index) => {
        const button_trash = (
            <button
                className="button-square-stroke"
                onClick={() => removeFields(index)}
            >
                <Icon name="trash" size="20" fill="white" />
            </button>
        );

        const button_lock = (
            <button
                disabled
                className="button-square-stroke disabled"
                onClick={() => removeFields(index)}
            >
                <Icon name="lock" size="20" fill="white" />
            </button>
        );

        return { button_trash, button_lock };
    };

    const [formData, setFormData] = useState({
        name: "",
        symbol: "",
        describe: "",
        features: [],
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { members } = transformData(inputFields);
        const dataToSend = { ...formData, members, fileUrl };
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

    const handleDropdownChange = (index, value) => {
        const values = [...inputFields];
        values[index].role = value;
        setInputFields(values);
    };

    const handleFormChange = (index, event) => {
        const values = [...inputFields];
        const { name, value } = event.target;

        if (name === "share") {
            values[index].member[0][name] = value; // Update the share property inside the member object
        } else {
            values[index][name] = value;
        }

        setInputFields(values);
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

    const [inputFields, setInputFields] = useState([
        {
            member: [
                { email: user_creator.data.email, role: "Creator", share: "" },
            ],
        },
    ]);

    const addFields = () => {
        let newfield = { email: "", role: "ShareHolder", share: "" };
        setInputFields((prevState) => [...prevState, { member: [newfield] }]);
    };

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };
    const [visibleModal, setVisibleModal] = useState(false);
    const [files, setFiles] = useState([]);
    const [fileUrl, setfileUrl] = useState([]);
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
                        <div className="flex flex-col gap-3">
                            {inputFields.map((input, index) => {
                                const { button_trash, button_lock } =
                                    renderButtons(index);
                                return (
                                    <MemberField
                                        key={index}
                                        index={index}
                                        handleFormChange={handleFormChange}
                                        handleDropdownChange={
                                            handleDropdownChange
                                        }
                                        input={input.member[0]}
                                        setVisibleModal={setVisibleModal}
                                        setSelectedEmailIndex={
                                            setSelectedEmailIndex
                                        }
                                        removeFields={removeFields} // pass the function down as a prop
                                    />
                                );
                            })}

                            <button
                                type="button"
                                className="button w-max"
                                onClick={addFields}
                            >
                                Add More +
                            </button>
                        </div>
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
                visible={visibleModal}
                onClose={() => setVisibleModal(false)}
                setVisibleModal={setVisibleModal}
                setSelectedEmailIndex={setSelectedEmailIndex}
                onUserSelect={(user) => {
                    if (
                        selectedEmailIndex !== null &&
                        inputFields[selectedEmailIndex] &&
                        inputFields[selectedEmailIndex].member
                    ) {
                        const values = [...inputFields];
                        values[selectedEmailIndex].member[0].email = user.email;
                        setInputFields(values);
                        setVisibleModal(false);
                        setSelectedEmailIndex(null);
                    }
                }}
            />
        </Page>
    );
};

export default CreateDao;
