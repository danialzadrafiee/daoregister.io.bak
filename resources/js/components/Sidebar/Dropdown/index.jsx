import React, { useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.sass";
import Icon from "../../Icon";
import { Link } from "@inertiajs/react";
const Dropdown = ({ className, item, visibleSidebar, setValue, onClose }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
        setValue(true);
    };

    const Head = () => {
        return (
            <button
                className={cn(
                    styles.head,
                    {
                        // [styles.active]: pathname.includes(item.slug),
                    },
                    { [styles.wide]: visibleSidebar },
                    "!font-semibold"
                )}
                onClick={() => handleClick()}
            >
                <Icon name={item.icon} size="24" />
                {item.title}
                <Icon name="arrow-down" size="24" />
            </button>
        );
    };

    return (
        <div
            className={cn(
                styles.dropdown,
                className,
                { [styles.active]: visible },
                {
                    // [styles.active]: pathname.includes(item.slug),
                },
                { [styles.wide]: visibleSidebar }
            )}
        >
            {item.add ? (
                <div
                    className={cn(styles.top, {
                        // [styles.active]: pathname.startsWith("/products/add"),
                    })}
                >
                    <Head />
                    <Link
                        className={cn(styles.add, {
                            // [styles.active]:
                            //     pathname.startsWith("/products/add"),
                        })}
                        href="/products/add"
                        onClick={onClose}
                    >
                        <Icon name="plus" size="10" />
                    </Link>
                </div>
            ) : (
                <Head />
            )}
            <div className={styles.body}>
                {item.dropdown.map((x, index) => (
                    <Link
                        className={cn(
                            styles.link,
                            {
                                // [styles.active]: pathname === x.url,
                            },
                            "font-semibold"
                        )}
                        href={x.url}
                        key={index}
                        onClick={onClose}
                    >
                        {x.title}
                        {x.counter ? (
                            <div
                                className={styles.counter}
                                style={{ backgroundColor: x.colorCounter }}
                            >
                                {x.counter}
                            </div>
                        ) : (
                            <Icon name="arrow-next" size="24" />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
