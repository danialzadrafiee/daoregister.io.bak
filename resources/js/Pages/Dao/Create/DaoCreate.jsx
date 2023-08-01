//Initial
import React, { useState } from "react";
import Joi from "joi";
import Page from "@/components/Page";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";
import cn from "classnames";
import Icon from "@/components/Icon";
import Dropdown from "@/components/Dropdown";
import { router } from "@inertiajs/react";
//FilePond
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

//Style
import "./DaoCreate.scss";
import Checkbox from "@/components/Checkbox";

const schema = Joi.object({
    name: Joi.string().alphanum().min(1).max(3).required(),
    symbol: Joi.string().alphanum().min(1).max(3).required(),
    describe: Joi.string().alphanum().min(1).max(3).required(),
    feautures: Joi.array().min(1),
});
const transformData = (fields) => {
    let result = {};

    fields.forEach((field) => {
        for (const [key, value] of Object.entries(field)) {
            if (!result[key]) result[key] = [];
            result[key].push(value);
        }
    });

    return result;
};
const roles = [
    "Creator",
    "Founder",
    "ShareHolder",
    "Teammate",
    "Member",
    "Employee",
    "Observer",
];

const feautures = ["Contracts", "Automasion", "Shop", "Letters"];

//Main function
const CreateDao = ({ className }) => {
    const [role, setRole] = useState("Test");
    const [formData, setFormData] = useState({
        name: "",
        symbol: "",
        describe: "",
        feautures: [],
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
        const transformedMembers = transformData(inputFields);
        const dataToSend = { ...formData, ...transformedMembers };

        router.post(route("dao.store"), dataToSend, {
            onSuccess: (page) => {
                console.log("Data saved successfully!");
                // You can handle other logic here, like redirecting or showing a success message
            },
            onError: (errors) => {
                console.error("Error sending data:", errors);
                // Handle the errors, perhaps by setting them in the component's state and displaying them
            },
        });
    };

    const handleDropdownChange = (index, value) => {
        const values = [...inputFields];
        values[index].role = value;
        setInputFields(values);
    };

    const handleFormChange = (index, event) => {
        const values = [...inputFields];
        const { name, value } = event.target;
        values[index][name] = value;
        setInputFields(values);
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        setFormData((prevState) => {
            if (checked) {
                // If checkbox is checked, add to array
                return {
                    ...prevState,
                    feautures: [...prevState.feautures, value],
                };
            } else {
                // If checkbox is unchecked, remove from array
                return {
                    ...prevState,
                    feautures: prevState.feautures.filter(
                        (item) => item !== value
                    ),
                };
            }
        });
    };

    const [inputFields, setInputFields] = useState([
        { email: "", role: "Creator", share: "" },
    ]);

    const addFields = () => {
        let newfield = { email: "", role: "ShareHolder", share: "" };
        setInputFields([...inputFields, newfield]);
    };
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data);
    };
    const [files, setFiles] = useState([]);
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
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={true}
                            maxFiles={3}
                            server="/api"
                            name="files" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                    </Card>
                    <Card
                        title="Members & Share holders"
                        classTitle="title-purple"
                    >
                        <div className="flex flex-col gap-3">
                            {inputFields.map((input, index) => {
                                return (
                                    <div className="flex gap-2" key={index}>
                                        <TextInput
                                            className={"w-full"}
                                            name="email"
                                            placeholder="Email"
                                            value={input.email}
                                            onChange={(event) =>
                                                handleFormChange(index, event)
                                            }
                                        />
                                        <Dropdown
                                            className={"w-36"}
                                            name="role"
                                            options={roles}
                                            tooltip="Maximum 100 characters. No HTML or emoji allowed"
                                            value={input.role}
                                            setValue={(event) =>
                                                handleDropdownChange(
                                                    index,
                                                    event
                                                )
                                            }
                                        />
                                        <TextInput
                                            name="share"
                                            placeholder="Share"
                                            value={input.share}
                                            onChange={(event) =>
                                                handleFormChange(index, event)
                                            }
                                        />

                                        <button
                                            className="button-square-stroke"
                                            onClick={() => removeFields(index)}
                                        >
                                            <Icon
                                                name="trash"
                                                size="20"
                                                fill="white"
                                            ></Icon>
                                        </button>
                                    </div>
                                );
                            })}
                            <button
                                className="button w-max"
                                onClick={addFields}
                            >
                                Add More +{" "}
                            </button>
                        </div>
                    </Card>
                    <Card title="Dao Feauters" classTitle="title-blue">
                        <div className="grid-cols-2  gap-4 md:grid-cols-4 grid grid-flow-row">
                            {feautures.map((e) => (
                                <Checkbox
                                    key={e}
                                    name={"feautures"}
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
        </Page>
    );
    2;
};

export default CreateDao;
