import React from "react";
import Card from "@/components/Card";
import QRCode from "qrcode.react";
import cn from "classnames";
import HumanReadableDate from "@/components/HumanReadableDate";
import env from "@/env";
const Header = ({ dao }) => {
    const asideCards = [
        {
            title: "Organization",
            bg: "#272B30",
            titleclass: "title-red",
            content: <h2>{dao.name}</h2>,
            colsize: 1,
        },
        {
            title: "Date of stablishmend",
            bg: "#272B30",
            titleclass: "title-blue",
            content: (
                <h2>
                    <HumanReadableDate timestamp={dao.created_at} />
                </h2>
            ),
            colsize: 1,
        },
        {
            title: "Headcount",
            bg: "#272B30",
            titleclass: "title-blue",
            content: <h2>{dao.members.length} Members</h2>,
            colsize: 1,
        },
        {
            title: "Token id",
            bg: "#272B30",
            titleclass: "title-yellow",
            content: <h2>{dao.token}</h2>,
            colsize: 1,
        },
        {
            title: "Contract",
            bg: "#272B30",
            titleclass: "title-green",
            content: <h2>{env.contract}</h2>,
            colsize: 2,
        },
    ];
    return (
        <div className="grid gap-4 grid-cols-2">
            <Card className={"flex flex-col"}>
                <header className="flex flex-col">
                    <figure className="p-4 w-full">
                        <div className="flex z-10 ">
                            <div className="rounded p-2 bg-white flex shadow    w-max items-center justify-center">
                                <QRCode value="test" size={80}></QRCode>
                            </div>
                            <div className=" w-max self-end -mb-2 ml-4">
                                <div className="flex my-2 items-center justify-center gap-2">
                                    <div className="flex justify-center flex-col ">
                                        <div className="font-semibold text-lg">
                                            {dao.name}
                                        </div>
                                        <div className="bg-dp1 w-max rounded px-2">
                                            {dao.symbol}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-dp2 font-medium text-dp2-base ml-auto h-max rounded-lg py-1 px-2">
                                Published
                            </div>
                        </div>
                    </figure>
                </header>
                <article className="px-4 mt-2">{dao.describe}</article>
                <footer className="p-4 block mt-auto w-full   ">
                    <label className="border-t pt-4 border-white/10  block text-sm">
                        Shareholders
                    </label>
                    <div className="mt-4 grid w-max gap-2 grid-cols-6">
                        {dao.members.map((member, index) => (
                            <div
                                className=" flex flex-col bg-white rounded-sm p-1 w-max"
                                key={index}
                            >
                                <QRCode value={member.email} size={60} />
                                <div className="text-dn8 text-center leading-none pt-1">
                                    #{member.token}
                                </div>
                            </div>
                        ))}
                    </div>
                </footer>
            </Card>
            <aside className="grid grid-cols-2 gap-4">
                {asideCards.map((card, index) => (
                    <Card
                        className={cn(
                            "col-span-2",
                            "lg:col-span-" + card.colsize
                        )}
                        key={index}
                        style={{ background: card.bg }}
                        title={card.title}
                        classTitle={cn(card.titleclass, "text-sm uppercase")}
                    >
                        {card.content}
                    </Card>
                ))}
            </aside>
            <div className="TAILWINDCSS_FIX hidden lg:col-span-1"></div>
        </div>
    );
};

export default Header;
