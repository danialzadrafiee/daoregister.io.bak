import React from "react";
import styles from "./Dashboard.module.sass";
import TooltipGlodal from "@/components/TooltipGlodal";
import Overview from "./Overview";
import PopularProducts from "@/components/PopularProducts";
import Comments from "./Comments";
import RefundRequests from "@/components/RefundRequests";
import ProTips from "./ProTips";
import MoreCustomers from "./MoreCustomers";
import ProductViews from "./ProductViews";
import Page from "@/components/Page";

const Home = () => {
    return (
        <Page>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Overview className={styles.card} />
                    <ProductViews className={styles.card} />
                    <ProTips className={styles.card} />
                    <MoreCustomers />
                </div>
                <div className={styles.col}>
                    <PopularProducts className={styles.card} views="4" />
                    <Comments className={styles.card} />
                    <RefundRequests
                        title="Refund requests"
                        classTitle="title-red"
                    />
                </div>
            </div>
            <TooltipGlodal />
        </Page>
    );
};

export default Home;
