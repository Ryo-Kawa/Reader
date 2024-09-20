import Link from "next/link";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { display_num } from "@/component/all_exports";

export default function Footer({ index }: { index: number }) {
    return (
        <section className={styles.footer}>
            <nav className={styles.nav}>
                <Link href={`/display?index=${index - 1}`}>{0 < index ? "前" : ""}</Link>
                <Link href="/"><FontAwesomeIcon icon={faHouse} /></Link>
                <Link href={`/display?index=${index + 1}`}>{index + 1 < display_num ? "後" : ""}</Link>
            </nav>
        </section>
    );
}