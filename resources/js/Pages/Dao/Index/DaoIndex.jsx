import Card from "@/components/Card";
import Page from "@/components/Page";
import DaoCard from "@/components/DaoCard";
import styles from "@/Pages/Dao/Index/DaoIndex.module.sass";

const Dao = ({ daos }) => {
    return (
        <Page>
            <Card
                head={<div>{daos.length} Oragnizations</div>}
                title={"Oragnization Explorer"}
                classTitle={"title-blue"}
            >
                <div className={styles.products}>
                    {daos.map((dao, index) => (
                        <DaoCard
                            className={`${styles.product} cursor-pointer`}
                            dao={dao}
                            key={index}
                            withoutСheckbox
                            link={route("dao.show", [dao.id])}
                        />
                    ))}
                </div>
            </Card>
        </Page>
    );
};

export default Dao;
