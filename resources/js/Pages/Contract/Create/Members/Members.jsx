import React, { useState, Fragment } from "react";
import TextInput from "@/components/TextInput";
import RoleDropdown from "@/components/RoleDropdown/RoleDropdown";
import Icon from "@/components/Icon";
import cn from "classnames";
const Members = ({
    inputFields,
    setInputFields,
    onEmailClick,
    className,
    roles,
}) => {
    const handleAddFields = () => {
        setInputFields([
            ...inputFields,
            { email: "", role: "Signatory"},
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
        <div className={className}>
            {inputFields.map((inputField, index) => (
                <div key={index} className="flex w-full gap-3 mb-3 items-end ">
                    <TextInput
                        className={cn(
                            "w-full",
                            index == 0 && "pointer-events-none"
                        )}
                        name="email"
                        label={index == 0 && "Email"}
                        readOnly="readonly"
                        placeholder="Select user"
                        onClick={() => onEmailClick(index)}
                        value={inputField.email}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <RoleDropdown
                        className={index == 0 && "pointer-events-none"}
                        label={index == 0 && "Role"}
                        roles={roles}
                        selectedRole={inputField.role}
                        setSelectedRole={(role) =>
                            handleRoleChange(index, role)
                        }
                    />

                    {index == 0 ? (
                        <button
                            type="button"
                            className="button-square-stroke disabled"
                        >
                            <Icon name="lock" size="20" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="button-square-stroke"
                            onClick={() => handleRemoveFields(index)}
                        >
                            <Icon name="trash" size="20" />
                        </button>
                    )}
                </div>
            ))}
            <button type="button" className="button" onClick={handleAddFields}>
                Add more +
            </button>
        </div>
    );
};

export default Members;
