import React from "react";
import Card from "@/components/Card";
import cn from "classnames";
import { getFullName } from "@/utils";

const Shareholders = ({ dao }) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <Card title={"Shareholders"} classTitle={cn("title-green")}>
                <table className="table-fixed">
                    <thead>
                        <tr className=" border-b border-white/10">
                            <th className="py-4 text-start text-sm opacity-75 font-normal">
                                Name
                            </th>
                            <th className="py-4 text-start text-sm opacity-75 font-normal">
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dao.members.map((member, index) => (
                            <tr
                            key={index}
                                className={`${
                                    index != dao.members.length - 1 &&
                                    "border-b"
                                } border-white/10`}
                            >
                                <td className="py-3">
                                    <div className="flex gap-2">
                                        <img
                                            src={member.profile_picture}
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="flex flex-col justify-center">
                                            <div className="font-semibold capitalize">
                                                {getFullName(member)}
                                            </div>
                                            <div className="text-sm opacity-75">
                                                @{member.token}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="align-middle">{member.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default Shareholders;
