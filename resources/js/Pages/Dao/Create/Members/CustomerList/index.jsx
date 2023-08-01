import React, { useState } from "react";
import styles from "./CustomerList.module.sass";
import cn from "classnames";
import Card from "@/components/Card";
import Form from "@/components/Form";
import Table from "./Table";


const CustomerList = () => {
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        alert();
    };

    return (
        <>
            <Card
                className={cn(styles.card, "w-[900px]")}
                title="Customer"
                classTitle={cn("title-purple", styles.title)}
                classCardHead={cn(styles.head, { [styles.hidden]: visible })}
                head={
                    <>
                        <Form
                            className={styles.form}
                            value={search}
                            setValue={setSearch}
                            onSubmit={() => handleSubmit()}
                            placeholder="Search by name or email"
                            type="text"
                            name="search"
                            icon="search"
                        />
                    </>
                }
            >
                <div className={cn(styles.row, { [styles.flex]: visible })}>
                    <Table
                        className={styles.table}
                        activeTable={visible}
                        setActiveTable={setVisible}
                    />
                </div>
            </Card>
        </>
    );
};

export default CustomerList;
