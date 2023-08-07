import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import styles from "./SignUp.module.sass";
import { use100vh } from "react-div-100vh";
import cn from "classnames";
import Image from "@/components/Image";
import { Web3Button } from "@web3modal/react";
import { router } from "@inertiajs/react";
import Icon from "@/components/Icon";
const items = [
    "Unlimited product uploads",
    "Pro tips",
    "Free forever",
    "Full author options",
];

const Login = ({ props, error }) => {
    console.log(error);
    useEffect(() => {
        ethereumClient.watchAccount(function (account) {
            if (account.address != undefined) {
                let wallet = account.address;
                router.get(route("gateway.login", wallet));
            }
        });
    }, []);
    const heightWindow = use100vh();
    return (
        <Layout>
            <div className={cn(styles.row)}>
                <div className={styles.col}>
                    <div className={styles.wrap}>
                        <div className={styles.preview}>
                            <img
                                src="/images/content/login-pic.png"
                                alt="Login"
                            />
                        </div>
                        <div className={cn("h4", styles.subtitle)}>
                            Plan includes
                        </div>
                        <ul className={styles.list}>
                            {items.map((x, index) => (
                                <li key={index}>{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div
                    className={cn(styles.col, "relative")}
                    style={{ minHeight: heightWindow }}
                >
                    <div className={styles.head}>
                        <a className={styles.logo} to="/">
                            <Image
                                className={styles.pic}
                                src="/images/logo-dark.png"
                                srcDark="/images/logo-light.png"
                                alt="Core"
                            />
                        </a>
                    </div>
                    <div className={styles.wrapper}>
                        <div className="flex items-center flex-col justify-center">
                            <div className={cn("h2", styles.title)}>
                                Authentication
                            </div>
                            <Web3Button />
                        </div>
                    </div>
                    {error && (
                        <div className="w-[600px] absolute bottom-10 right-0 left-0 mx-auto bg-dp3/40 text-lg py-4 flex items-center gap-1 justify-center rounded text-dp3 ">
                            <Icon name="info" fill="#FF6A4F" /> {error}
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default Login;
