"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import styles from "./SearchField.module.css"
import { Suspense } from "react"

function SearchFieldComponent() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q"); // name属性が q の要素を取得
        if (q instanceof HTMLInputElement) { // input要素であればtrue
            const params = new URLSearchParams(); //URLクエリパメーターの操作：インスタンスを代入する
            params.set("q", q.value.trim()); // クエリパラメーターの値の空白を取り除く
            router.push(`/news/search?${params.toString()}`)// 指定した URL に移動する（ブラウザの履歴に残る）
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.search}>
                <Image src="/search.svg" alt="検索" width={16} height={16} loading="eager" />
                <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("q") ?? undefined} // null もしくは undefined の時、undefinedを返す
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </label>
        </form>
    )
}

export default function SearchField() {
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    )
}
