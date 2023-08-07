
import React, { useState, Fragment } from "react";
import TextInput from "@/components/TextInput";
import RoleDropdown from "@/components/RoleDropdown/RoleDropdown";
import Icon from "@/components/Icon";

const roles = [
    "Creator",
    "Founder",
    "ShareHolder",
    "Teammate",
    "Member",
    "Employee",
    "Observer",
];

const Members = ({ inputFields, setInputFields, onEmailClick }) => {
    const handleAddFields = () => {
        setInputFields([
            ...inputFields,
            { email: "", role: "Member", share: "" },
        ]);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };
    const handleRoleChange = (index, role) => {
        const values = [...inputFields];
        values[index].role = role;
        setInputFields(values);
    };
    return (
        <div>
            {inputFields.map((inputField, index) => (
                <div
                    key={index}
                    className="flex w-full gap-3 mb-3 items-center "
                >
                    <TextInput
                        className={"w-full"}
                        name="email"
                        readOnly="readonly"
                        placeholder="Select user"
                        onClick={() => onEmailClick(index)}
                        value={inputField.email}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <RoleDropdown
                        roles={roles}
                        selectedRole={inputField.role}
                        setSelectedRole={(role) =>
                            handleRoleChange(index, role)
                        }
                    />{" "}
                    <TextInput
                        placeholder="Share"
                        name="share"
                        value={inputField.share}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <button
                        type="button"
                        className="button-square-stroke"
                        onClick={() => handleRemoveFields(index)}
                    >
                        <Icon name="trash" size="20" />
                    </button>
                </div>
            ))}
            <button type="button" className="button" onClick={handleAddFields}>
                Add more +
            </button>
        </div>
    );
};

export default Members;
