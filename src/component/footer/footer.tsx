import Link from "next/link";
import styles from "./footer.module.css";
import { display_num } from "../home";

export default function Footer({ index }: { index: number }) {
    return (
        <section className={styles.footer}>
            <nav>
                <Link href={`/display?index=${index - 1}`}>{0 < index ? "前" : ""}</Link>
                <Link href="/">ホーム</Link>
                <Link href={`/display?index=${index + 1}`}>{index + 1 < display_num ? "後" : ""}</Link>
            </nav>
        </section>
    );
}