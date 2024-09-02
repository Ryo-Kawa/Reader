"use client";

import { Dispatch, SetStateAction } from "react";
import styles from "./top_bar.module.css";
import Image from "next/image";

export default function TopBar({kind, setKind}: {kind: string, setKind: Dispatch<SetStateAction<string>>}) {
    return (
        <div className={styles.bar}>
            <Image src="" alt="天君" className={styles.logo} width="30" height="30" />
            <h1 className={styles.header}>天文気象部</h1>
            <form>
                <label>実験の種類:</label>
                <input type="radio" name="kind" value="meteorology" checked={kind === "meteorology"} onChange={event => setKind(event.target.value)} />
                <label htmlFor="meteorology">気象</label>
                <input type="radio" name="kind" value="astronomy" checked={kind === "astronomy"} onChange={event => setKind(event.target.value)} />
                <label htmlFor="astronomy">天文</label>
            </form>
            <span>/開成学園公式サイトの部紹介は</span><a href="https://kaiseigakuen.jp/sclife/club/meteorology/" target="_blank">こちら</a>
        </div>
    );
}