import React, { useState } from "react";
import cn from "classnames";
import styles from "./DaoCard.module.sass";
import Control from "./Control";
import Icon from "../Icon";
import Checkbox from "../Checkbox";
import { Link } from "@inertiajs/react";
const DaoCard = ({
    className,
    item,
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
        <Link href={link}
            className={cn(styles.product, className, {
                [styles.active]: visible,
            })}
        >
            <div className={styles.preview}>
                {!withoutСheckbox && (
                    <Checkbox
                        className={styles.checkbox}
                        classCheckboxTick={styles.checkboxTick}
                        value={value}
                        onChange={() => handleClick()}
                    />
                )}
                <img
                    srcSet={`${item.image2x} 2x`}
                    src={item.image}
                    alt="Product"
                />
            </div>
            <div className={styles.line}>
                <div className={styles.title}>{item.product}</div>
                {item.price > 0 ? (
                    <div className={styles.price}>${item.price}</div>
                ) : (
                    <div className={styles.empty}>${item.price}</div>
                )}
            </div>
            {released ? (
                <div className={styles.date}>
                    <Icon name="clock" size="24" /> {item.date}
                </div>
            ) : item.ratingValue ? (
                <div className={styles.rating}>
                    <Icon name="star-fill" size="24" />
                    {item.ratingValue}{" "}
                    <span className={styles.counter}>
                        ({item.ratingCounter})
                    </span>
                </div>
            ) : (
                <div className={cn(styles.rating, styles.ratingEmpty)}>
                    <Icon name="star-stroke" size="24" />
                    No ratings
                </div>
            )}
        </Link>
    );
};

export default DaoCard;
