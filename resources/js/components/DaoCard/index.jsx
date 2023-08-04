import React, { useState } from "react";
import cn from "classnames";
import styles from "./DaoCard.module.sass";
import Icon from "../Icon";
import { Link } from "@inertiajs/react";
import HumanReadableDate from "@/components/HumanReadableDate";
import truncate from "lodash/truncate";
const DaoCard = ({
    className,
    dao,
    link,
    value,
    onChange,
    released,
    withoutСheckbox,
}) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        onChange();
        setVisible(!visible);
    };

    return (
        <Link
            href={link}
            className={cn(styles.product, className, {
                [styles.active]: visible,
            })}
        >
            <div className={styles.preview}>
                <img
                    srcSet={`${dao.fileUrl}`}
                    src={dao.fileUrl}
                    alt="Product"
                />
            </div>

            <div className={cn("flex gap-2 justify-start mb-2 ")}>
                <div className={styles.price}>{dao.symbol}</div>
                <div className={cn(styles.title)}>{dao.name}</div>
                <div
                    className={
                        "flex gap-1 text-xs font-normal ml-auto items-center"
                    }
                >
                    <Icon name="person" size="16" fill="white" />
                    {dao.members.length} Members
                </div>
            </div>
            <div className={styles.line}>
                <div className="font-normal text-sm opacity-75">
                    {truncate(dao.describe, { length: 60, omission: "..." })}
                </div>
            </div>
            <div className={styles.date}>
                <Icon name="clock" size="24" />
                <HumanReadableDate timestamp={dao.created_at} />
            </div>
        </Link>
    );
};

export default DaoCard;
