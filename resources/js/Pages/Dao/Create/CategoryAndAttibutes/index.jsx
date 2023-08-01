import React, { useState } from "react";
import cn from "classnames";
import styles from "./CategoryAndAttibutes.module.sass";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Tooltip from "@/components/Tooltip";
import Checkbox from "@/components/Checkbox";
import { WithContext as ReactTags } from "react-tag-input";


const CategoryAndAttibutes = ({ className }) => {


    return (
        <Card
            className={cn(styles.card, className)}
            title="Feautres & accessibility"
            classTitle="title-purple"
        >
            <div className={styles.images}>
                <div className={styles.label}>
                    Attibutes{" "}
                    <Tooltip
                        className={styles.tooltip}
                        title="Maximum 100 characters. No HTML or emoji allowed"
                        icon="info"
                        place="right"
                    />
                </div>
                <div className={styles.list}>
                    {compatibility.map((x, index) => (
                        <Checkbox
                            className={styles.checkbox}
                            content={x.title}
                            value={selectedFilters.includes(x.id)}
                            onChange={() => handleChange(x.id)}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default CategoryAndAttibutes;
