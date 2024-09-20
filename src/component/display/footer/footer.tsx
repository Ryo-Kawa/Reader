import Link from "next/link";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { display_num } from "@/component/all_exports";

export default function Footer({ index }: { index: number }) {
    return (
        <section className={styles.footer}>
            <nav className={styles.nav}>
                {0 < index ? <Link href={`/display?index=${index - 1}`} className={styles.previous}><FontAwesomeIcon icon={faCircleChevronLeft} /></Link> : ""}
                <Link href="/" className={styles.home}><FontAwesomeIcon icon={faHouse} /></Link>
                {index + 1 < display_num ? <Link href={`/display?index=${index + 1}`} className={styles.next}><FontAwesomeIcon icon={faCircleChevronRight} /></Link> : ""}
            </nav>
        </section>
    );
}