"use client";

import styles from "./display.module.css";
import Footer from "./footer/footer";
import { display_list } from "@/component/all_exports";

export default function Display({ index }: { index: number }) {
    return (
        <div className={styles.display}>
            <main className={styles.main}>
                <h1 className={styles.header}>{display_list[index].title}</h1>
                {display_list[index].content}
            </main>
            <footer>
                <Footer index={index} />
            </footer>
        </div>
    );
}
