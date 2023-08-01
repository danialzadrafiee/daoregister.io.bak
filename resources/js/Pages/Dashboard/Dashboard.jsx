import React, { useState } from "react";
import cn from "classnames";
import styles from "./Shop.module.sass";
import Profile from "./Profile";
import Settings from "./Settings";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Filters from "@/components/Filters";
import Product from "@/components/Product";
import Follower from "./Follower";
// data
import { products } from "@/mocks/products";
import { followers } from "@/mocks/followers";
import Page from "@/components/Page";

const navigation = ["Products", "Followers", "Following"];
const intervals = ["Most recent", "Most new", "Most popular"];

const Dashboard = ({ user }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sorting, setSorting] = useState(intervals[0]);
    return (
        <Page>
            <div className={styles.shop}>
                <div className={styles.background}>
                    <img src="/images/content/bg-shop.jpg" alt="Background" />
                </div>
                <Card className={styles.card}>
                    <Profile user={user} />

                    <div className={styles.wrap}></div>
                </Card>
                <a href="#">ee</a>
            </div>
        </Page>
    );
};

export default Dashboard;
