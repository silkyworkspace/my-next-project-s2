import styles from "./Sheet.module.css";

type Props = {
    children: React.ReactNode;
};
// ↑ children: React.ReactNode;はお決まりの文言

export default function Sheet({ children }: Props) {
    return (
        <>
            <div className={styles.container}>{children}</div>
        </>
    );
}
