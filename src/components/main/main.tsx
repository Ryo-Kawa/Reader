import styles from "./main.module.css";
import Welcome from "./page/welcome/welcome";
import ExperimentList from "./page/experiment_list/experiment_list";
import SandanGrandPrix from "./page/sandan_grand_prix/sandan_grand_prix";
import Comment from "./page/comment/comment";

export default function Main() {
    return (
        <div className={styles.main}>
            <Welcome />
            <div className={styles.page}>
                <ExperimentList />
                <SandanGrandPrix />
                <Comment />
            </div>
        </div>
    );
}

