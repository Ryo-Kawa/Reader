"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import styles from "./side_bar.module.css"

export default function SideBar() {
    const [open, setOpen] = useState(false);

    return (
        <div style={{display: "inline"}}>
            <button className={styles.button} onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open? faXmark : faBars}/></button>
            <nav className={styles.content} style={{display: open? "block" : "none"}}>
                <Link href="/description-list" className={styles.link}>実験一覧</Link>
                <Link href="/description-list" className={styles.link}>実験一覧</Link>
                <Link href="/description-list" className={styles.link}>実験一覧</Link>
            </nav>
        </div>
    );
}