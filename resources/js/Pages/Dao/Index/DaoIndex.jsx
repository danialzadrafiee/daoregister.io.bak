import Card from "@/components/Card";
import Page from "@/components/Page";
import DaoCard from "@/components/DaoCard";
import { products } from "@/mocks/products";
import styles from "@/Pages/Dao/Index/DaoIndex.module.sass";
const Dao = () => {
    return (
        <Page>
            <Card>
                <div className={styles.products}>
                    {products.map((x, index) => (
                        <DaoCard
                            className={`${styles.product} cursor-pointer`}
                            item={x}
                            key={index}
                            withoutСheckbox
                            link={route("dashboard.index")}
                        />
                    ))}
                </div>
            </Card>
        </Page>
    );
};

export default Dao;
