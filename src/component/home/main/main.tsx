import styles from "./main.module.css";
import Welcome from "./welcome/welcome";
import DisplayList from "./display_list/display_list";
import SandanGrandPrix from "./sandan_grand_prix/sandan_grand_prix";
import Comment from "./comment/comment";
import ClubJornal from "./club_jornal/club_jornal";

export default function Main() {
    return (
        <div className={styles.main}>
            <Welcome />
            <div className={styles.page}>
                <DisplayList />
                <SandanGrandPrix />
                <ClubJornal />
                <Comment />
            </div>
        </div>
    );
}

