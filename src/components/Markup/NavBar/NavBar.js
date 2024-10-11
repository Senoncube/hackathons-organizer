"use client";

import styles from "./NavBar.module.css";
import Link from "next/link";
import ToggleTheme from "@/components/Markup/NavBar/ToggleTheme/ToggleTheme";

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href="/" className={styles.home}>SenonHack</Link>
            </div>
            <div className={styles.menu}>
                <ToggleTheme/>
                <Link href="/winners">Переможці</Link>
                <Link href="/about">Про нас</Link>
            </div>
        </nav>
    )
}