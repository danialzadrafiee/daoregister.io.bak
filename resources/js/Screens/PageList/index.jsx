import React from "react";
import { Link } from "@inertiajs/react";
import styles from "./PageList.module.sass";

const PageList = () => {
    return (
        <div className={styles.page} style={{ fontSize: 16, fontWeight: 500 }}>
            <p style={{ marginBottom: 5 }}>
                <a to="/">Home</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/products/dashboard">Products dashboard</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/products/add">New product</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/products/drafts">Drafts</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/products/released">Released</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/products/comments">Comments</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/products/scheduled">Scheduled</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/customers/overview">Customers</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/customers/customer-list">Customer list</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/promote">Promote</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/notification">Notification</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/settings">Settings</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/upgrade-to-pro">Upgrade to pro</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/message-center">Message center</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/explore-creators">Explore creators</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/affiliate-center">Affiliate center</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/sign-up">Sign up</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/sign-in">Sign in</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/income/earning">Earning</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/income/refunds">Refunds</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/income/payouts">Payouts</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/income/statements">Statements</a>
            </p>
            <p style={{ marginBottom: 5 }}>
                <a to="/shop">Shop</a>
            </p>
        </div>
    );
};

export default PageList;
