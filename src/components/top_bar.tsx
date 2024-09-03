"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./top_bar.module.css";

export default function TopBar({kind, setKind}: {kind: string, setKind: Dispatch<SetStateAction<string>>}) {
    return (
        <div className={styles.top}>
            <button className={styles.bars}><FontAwesomeIcon icon={faBars} /></button>
            <div className={styles.logoWrapper}><Image src="" alt="" className={styles.logo} /></div>
            <h1 className={styles.header}>天文気象部</h1>
            <div className={styles.selectWrapper}>
                <span>種類:</span>
                <select name="kind" value={kind} className={styles.select} onChange={event => setKind(event.target.value)}>
                    <option value="0">気象</option>
                    <option value="1">天文</option>
                </select>
            </div>
        </div>
    );
}