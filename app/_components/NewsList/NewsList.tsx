import Image from "next/image";

import styles from "./NewsList.module.css";
import Category from "../Category/Category";
import Date from "../Date/Date";
import { News } from "@/app/_libs/microcms";

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    {/* TODO:別の章で、リンクと正式な画像に差し替えます */}
                    <div className={styles.link}>
                        <Image className={styles.image} src="/no-image.png" alt="No Image" width={1200} height={630} />
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category category={article.category} />
                                {/* ↓ Null合体演算子: nullまたはundefinedの時だけフォールバック値を使用 */}
                                <Date date={article.publishedAt ?? article.createdAt} />
                            </dd>
                        </dl>
                    </div>
                </li>
            ))}
        </ul>
    );
}
