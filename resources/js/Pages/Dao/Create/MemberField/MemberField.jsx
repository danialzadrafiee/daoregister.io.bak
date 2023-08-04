import Icon from "@/components/Icon";
import TextInput from "@/components/TextInput";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";

const roles = [
    "Creator",
    "Founder",
    "ShareHolder",
    "Teammate",
    "Member",
    "Employee",
    "Observer",
];

const MemberField = ({
    index,
    input,
    handleFormChange,
    handleDropdownChange,
    setVisibleModal,
    setSelectedEmailIndex,
    removeFields,
}) => {
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

    return (
        <div className="flex gap-2">
            <TextInput
                key={index}
                disabled={index === 0}
                className="w-full"
                name="email"
                readOnly="readonly"
                autoComplete="off"
                onClick={() => {
                    setVisibleModal(true);
                    setSelectedEmailIndex(index);
                }}
                placeholder="Email"
                value={input.email}
                onChange={(event) => handleFormChange(index, event)}
            />
            <Dropdown
                key={index + 1}
                className={`w-36 ${index === 0 && "pointer-events-none"}`}
                name="role"
                options={roles}
                tooltip="Maximum 100 characters. No HTML or emoji allowed"
                value={input.role}
                setValue={(event) => handleDropdownChange(index, event)}
            />
            <TextInput
                key={index + 2}
                name="share"
                placeholder="Share"
                value={input.share}
                onChange={(event) => handleFormChange(index, event)}
            />
            {index === 0 ? button_lock : button_trash}
        </div>
    );
};
export default MemberField;
