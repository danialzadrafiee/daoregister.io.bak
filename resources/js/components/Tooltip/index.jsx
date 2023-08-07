import React from "react";
import cn from "classnames";
import styles from "./Tooltip.module.sass";
import Icon from "../Icon";

const Tooltip = ({ className, title, icon, place }) => {
    return (
        <div data-place={place} data-tip={title} className={cn(styles.tooltip, className)}>
            <span >
                <Icon name={icon} />
            </span>
        </div>
    );
};

export default Tooltip;
