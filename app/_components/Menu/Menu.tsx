"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import { useState } from "react";
import Image from "next/image";
import cx from "classnames";

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>

            <button
                type="button"
                aria-controls="navigation"
                aria-expanded={isOpen}
                className={styles.button}
                onClick={toggle}
            >
                {isOpen ? (
                    <Image src="/close.svg" alt="閉じる" width={24} height={24} />
                ) : (
                    <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
                )}
            </button>
        </>
    );
}
