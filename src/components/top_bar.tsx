import SideBar from "@/components/side_bar";
import styles from "./top_bar.module.css";

export default function TopBar() {
    return (
        <div className={styles.bar}>
            <div className={styles.barStart}>
                <SideBar /><h1 className={styles.header}>天文気象部</h1>
            </div>
        </div>
    );
}