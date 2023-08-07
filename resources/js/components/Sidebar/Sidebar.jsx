import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import cn from "classnames";
import Icon from "../Icon";
import Theme from "../Theme";
import Dropdown from "./Dropdown";
import Help from "./Help";
import Image from "../Image";
import { Link, router } from "@inertiajs/react";
import { EthereumClient } from "@web3modal/ethereum";
import { disconnect } from "@wagmi/core";
const navigation = [
    {
        title: "Dashboard",
        icon: "home",
        url: route("dashboard.index"),
    },
    {
        title: "Organizations",
        icon: "diamond",
        dropdown: [
            {
                title: "Explore",
                url: route("dao.index"),
            },
            {
                title: "Create",
                url: route("dao.create"),
            },
        ],
    },

    {
        title: "Groups",
        icon: "profile-circle",
        dropdown: [
            {
                title: "Overview",
                url: "/customers/overview",
            },
            {
                title: "Customer list",
                url: "/customers/customer-list",
            },
        ],
    },
    {
        title: "Shop",
        icon: "store",
        url: "/shop",
    },
    {
        title: "Income",
        slug: "income",
        icon: "pie-chart",
        dropdown: [
            {
                title: "Earning",
                url: "/income/earning",
            },
            {
                title: "Refunds",
                url: "/income/refunds",
            },
            {
                title: "Payouts",
                url: "/income/payouts",
            },
            {
                title: "Statements",
                url: "/income/statements",
            },
        ],
    },
    {
        title: "Promote",
        icon: "promotion",
        url: "/promote",
    },
];

const Sidebar = ({ className, onClose }) => {
    const [visibleHelp, setVisibleHelp] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleLogout = async () => {
        await disconnect();
        router.post(route("gateway.logout"));
    };
    return (
        <>
            <div
                className={cn(styles.sidebar, className, {
                    [styles.active]: visible,
                })}
            >
                <button className={styles.close} onClick={onClose}>
                    <Icon name="close" size="24" />
                </button>
                <a className={styles.logo} to="/" onClick={onClose}>
                    <Image
                        className={styles.pic}
                        src="/images/logo-dark.png"
                        srcDark="/images/logo-light.png"
                        alt="Core"
                    />
                </a>
                <div className={styles.menu}>
                    {navigation.map((x, index) =>
                        x.url ? (
                            <Link
                                className={cn(styles.item, {
                                    // [styles.active]: pathname === x.url,
                                })}
                                href={x.url}
                                key={index}
                                onClick={onClose}
                            >
                                <Icon name={x.icon} size="24" />
                                {x.title}
                            </Link>
                        ) : (
                            <Dropdown
                                className={cn(styles.dropdown)}
                                visibleSidebar={visible}
                                setValue={setVisible}
                                key={index}
                                item={x}
                                onClose={onClose}
                            />
                        )
                    )}
                </div>
                <button
                    className={styles.toggle}
                    onClick={() => setVisible(!visible)}
                >
                    <Icon name="arrow-right" size="24" />
                    <Icon name="close" size="24" />
                </button>
                <div className={styles.foot}>
                    <div
                        onClick={handleLogout}
                        className="flex items-center gap-3 font-semibold text-white opacity-70 hover:opacity-100 cursor-pointer"
                    >
                        <Icon name={"activity"} size="24" fill="#ffffff" />
                        Logout
                    </div>
                </div>
            </div>

            <div
                className={cn(styles.overlay, { [styles.active]: visible })}
                onClick={() => setVisible(false)}
            ></div>
        </>
    );
};

export default Sidebar;
