import styles from "./main.module.css";
import Welcome from "./page/welcome/welcome";
import DisplayList from "./page/display_list/display_list";
import SandanGrandPrix from "./page/sandan_grand_prix/sandan_grand_prix";
import Comment from "./page/comment/comment";

export default function Main() {
    return (
        <div className={styles.main}>
            <Welcome />
            <div className={styles.page}>
                <DisplayList />
                <SandanGrandPrix />
                <Comment />
            </div>
        </div>
    );
}

