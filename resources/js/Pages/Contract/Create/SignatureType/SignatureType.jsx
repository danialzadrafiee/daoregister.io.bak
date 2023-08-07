// resources/js/Pages/Contract/Create/SignatureType/SignatureType.jsx
import React, { useState } from "react";
import svgs from "@/components/svgs";

const SignatureType = ({ signatureType, handleClick }) => {
    const activeClass = "bg-dn6";
    const signatureTypes = [
        {
            type: "owner",
            value: (
                <div className="flex flex-col gap-1 items-center justify-center">
                    <div className=" flex items-center justify-center flex-col">
                        <svgs.votetype fill="white" className="w-6" />
                        <span className="font-semibold">Owner</span>
                    </div>
                    <span className="text-sm opacity-75 leading-3">
                        Require Owner vote only
                    </span>
                </div>
            ),
        },
        {
            type: "majority",
            value: (
                <div className="flex flex-col gap-1 items-center justify-center">
                    <div className=" flex items-center justify-center flex-col">
                        <svgs.votetype fill="white" className="w-6" />
                        <span className="font-semibold">Majority</span>
                    </div>
                    <span className="text-sm opacity-75 leading-3">
                        Require Majority votes only
                    </span>
                </div>
            ),
        },
        {
            type: "both",
            value: (
                <div className="flex flex-col gap-1 items-center justify-center">
                    <div className=" flex items-center justify-center flex-col">
                        <svgs.votetype fill="white" className="w-6" />
                        <span className="font-semibold">Both</span>
                    </div>
                    <span className="text-sm opacity-75 leading-3">
                        Require Majority votes only
                    </span>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="mb-10">
                <div className="rounded-lg  grid grid-cols-3  p-4 gap-3 bg-dn8">
                    {signatureTypes.map((signatureTypet, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(signatureTypet.type)}
                            className={`cursor-pointer capitalize py-10 rounded-lg flex items-center justify-center ${
                                signatureType === signatureTypet.type
                                    ? activeClass
                                    : ""
                            }`}
                        >
                            {signatureTypet.value}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SignatureType;
