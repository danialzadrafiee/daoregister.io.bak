import React from "react";
import cn from "classnames";
import Page from "@/components/Page";
import Card from "@/components/Card";
import Header from "./Header";
import Shareholders from "./Shareholders";
const DaoShow = ({ dao }) => {
    return (
        <Page className="grid grid-cols-1 gap-4">
            <div>
                <Header dao={dao} />
            </div>
            <main className="grid grid-cols-2 gap-4 mt-4">
                <Shareholders dao={dao} />
                <Card title={"Contracts"} classTitle={cn("title-blue")}>
                    <div className="flex gap-2 items-center">
                        <Card
                            className={
                                "w-full flex items-center justify-between !bg-dp1/30 border border-dp1 text-white"
                            }
                        >
                            <p>There is no contract yet.</p>
                            <button
                                className="button"
                                type="button button-small"
                            >
                                Generate Contract
                            </button>
                        </Card>
                    </div>
                </Card>
            </main>
        </Page>
    );
};

export default DaoShow;
