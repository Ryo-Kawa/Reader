"use client";

import styles from "./collapsible.module.css";

import { useState } from "react";

export default function Collapsible({header, file}: {header: string, file: string}) {
    const [open, setOpen] = useState(false);
    const content = (
        <audio src={`./description_audios/${file}`} controls className={styles.audio}></audio>
    )

    return (
        <div className={styles.collapsible}>
            <button className={styles.button} onClick={() => {
                setOpen(!open);
            }}>
                <span className={`${styles.arrow} ${open? styles.down : styles.right}`}></span><h2 className={styles.header}>{header}</h2>
            </button>
            <div>
                {open? content : ""}
            </div>
        </div>
    );
}