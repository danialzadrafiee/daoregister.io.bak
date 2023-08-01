import React from "react";
import cn from "classnames";
import styles from "./Panel.module.sass";
import Icon from "@/components/Icon";
import Actions from "@/components/Actions";
import Card from "@/components/Card";
const Panel = ({ setVisiblePreview, setVisibleSchedule, className }) => {
    const actions = [
        {
            title: "Preview",
            icon: "expand",
            action: () => setVisiblePreview(true),
        },
        {
            title: "Schedule product",
            icon: "calendar",
            action: () => setVisibleSchedule(true),
        },
        {
            title: "Get shareable link",
            icon: "link",
            action: () => console.log("Get shareable link"),
        },
        {
            title: "Clear data",
            icon: "close",
            action: () => console.log("Clear data"),
        },
    ];

    return (
        <Card className={cn(styles.card, className , "flex")}>
            <div className={styles.info}>
                <Icon name="check-all" size="24" />
                Last saved <span>Oct 4, 2021 - 23:32</span>
            </div>
            <div className={styles.btns}>

            </div>
        </Card>
    );
};

export default Panel;
