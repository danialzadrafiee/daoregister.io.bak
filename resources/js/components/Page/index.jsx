import React, { useState } from "react";
import cn from "classnames";
import styles from "./Page.module.sass";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header";
import Layout from "../Layout";

const Page = ({ wide, children, title }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Layout>
            <div className={styles.page}>
                <Sidebar
                    className={cn(styles.sidebar, {
                        [styles.visible]: visible,
                    })}
                    onClose={() => setVisible(false)}
                />
                <Header onOpen={() => setVisible(true)} />
                <div className={styles.inner}>
                    <div
                        className={cn(styles.container, {
                            [styles.wide]: wide,
                        })}
                    >
                        {title && (
                            <div className={cn("h3", styles.title)}>
                                {title}
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Page;
