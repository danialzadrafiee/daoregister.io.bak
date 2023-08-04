import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import styles from "./SignUp.module.sass";
import { use100vh } from "react-div-100vh";
import cn from "classnames";
import Image from "@/components/Image";
import { Web3Button } from "@web3modal/react";
import { router } from "@inertiajs/react";
const items = [
    "Unlimited product uploads",
    "Pro tips",
    "Free forever",
    "Full author options",
];


const Login = (props) => {
    useEffect(() => {
        ethereumClient.watchAccount(function (account) {
            if (account.address != undefined) {
                let wallet = account.address;
                // router.get(route("gateway.login", wallet));
                router.get(route("gateway.fake", wallet));
            }
        });
    }, []);
    const [visible, setVisible] = useState(true);
    const heightWindow = use100vh();
    return (
        <Layout>
            <div className={styles.row}>
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
                <div className={styles.col} style={{ minHeight: heightWindow }}>
                    <div className={styles.head}>
                        <a className={styles.logo} to="/">
                            <Image
                                className={styles.pic}
                                src="/images/logo-dark.png"
                                srcDark="/images/logo-light.png"
                                alt="Core"
                            />
                        </a>
                        <div className={styles.info}>
                            Already a member?{" "}
                            <a className={styles.link} to="/sign-in">
                                Sign in
                            </a>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={cn("h2", styles.title)}>Sign up</div>
                        <Web3Button />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
