import Hero from "../_components/Hero/Hero";
import Sheet from "../_components/Sheet/Sheet";
// import styles from "./page.module.css";

type Props = {
    children: React.ReactNode;
};
// ↑ children: React.ReactNode;はお決まりの文言

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>;
        </>
    );
}
