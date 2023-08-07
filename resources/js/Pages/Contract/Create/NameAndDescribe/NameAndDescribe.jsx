// resources/js/Pages/Contract/Create/NameAndDescribe/NameAndDescribe.jsx
import React, { useState } from "react";
import TextInput from "@/components/TextInput";
const NameAndDescribe = ({ props, handleInputChange }) => {
    return (
        <>
            <div className="grid grid-cols-2 my-4 gap-4">
                <TextInput
                    name="name"
                    onChange={handleInputChange}
                    label="Name"
                    placeholder="Contract Name"
                    tooltip={"Min/Maximum 3 to 100 characters"}
                />
                <TextInput
                    name="describe"
                    onChange={handleInputChange}
                    label="Describe"
                    tooltip={"Min/Maximum 3 to 100 characters"}
                    placeholder="Contract Description"
                />
            </div>
        </>
    );
};

export default NameAndDescribe;
