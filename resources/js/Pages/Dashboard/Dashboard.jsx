import React, { useState } from "react";
import cn from "classnames";
import styles from "./Shop.module.sass";
import Profile from "./Profile";
import Card from "@/components/Card";

// data
import Page from "@/components/Page";
import Stat from "./Stat/Stat";


const Dashboard = ({ user }) => {
    return (
        <Page>
            <div className={styles.shop}>
                <div className={styles.background}>
                    <img src="/images/content/bg-shop.jpg" alt="Background" />
                </div>
                <Card className={styles.card}>
                    <Profile user={user} />

                    <div>
                        <Stat user={user} />
                    </div>
                </Card>
            </div>
        </Page>
    );
};

export default Dashboard;
