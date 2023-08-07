import React from "react";
import cn from "classnames";
import Page from "@/components/Page";
import Card from "@/components/Card";
import Header from "./Header";
import Label from "@/components/Label";
import Shareholders from "./Shareholders";
import { Link } from "@inertiajs/react";
import "./DaoShow.module.scss";
const DaoShow = ({ dao }) => {
    console.log(dao);
    return (
        <Page className="grid grid-cols-1 gap-4">
            <div>
                <Header dao={dao} />
            </div>
            <main className="grid grid-cols-2 gap-4 mt-4">
                <Shareholders dao={dao} />
                <Card
                    title={"Contracts"}
                    className={"flex h-max flex-col gap-4"}
                    classTitle={cn("title-blue")}
                    head={
                        dao.contracts.length != 0 && (
                            <Link
                                href={route("contract.create", [dao.id])}
                                className="button"
                                type="button button-small"
                            >
                                New Contract +
                            </Link>
                        )
                    }
                >
                    {dao.contracts.map((contract) => (
                        <Link
                            key={contract.id}
                            href={route("contract.show", [contract.id])}
                        >
                            <Card
                                className={
                                    "!bg-dn6 hover:!bg-dn5 cursor-pointer flex items-center gap-8"
                                }
                            >
                                <img
                                    src={`https://api.dicebear.com/6.x/initials/svg?backgroundColor=0084FF&seed=${contract.name}`}
                                    className="rounded w-16"
                                />
                                <div className="flex flex-col">
                                    <Label
                                        title="Title"
                                        className={"opacity-75"}
                                    />
                                    <div className="font-semibold">
                                        {contract.name}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <Label
                                        title="Description"
                                        className={"opacity-75"}
                                    />
                                    <div className="font-semibold">
                                        {contract.describe}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                    <div className="flex gap-2 items-center">
                        {dao.contracts.length == 0 && (
                            <Card
                                className={
                                    "w-full flex items-center justify-between !bg-dp1/30 border border-dp1 text-white"
                                }
                            >
                                <p>There is no contract yet.</p>
                                <Link
                                    href={route("contract.create", [dao.id])}
                                    className="button"
                                    type="button button-small"
                                >
                                    Generate Contract
                                </Link>
                            </Card>
                        )}
                    </div>
                </Card>
            </main>
        </Page>
    );
};

export default DaoShow;
