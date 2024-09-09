import styles from "./main.module.css";
import SideBar from "./side/side_bar";
import Welcome from "./page/welcome/welcome";
import ExperimentList from "./page/experiment_list/experiment_list";
import RelatedLinks from "./page/related_links/RelatedLinks";
import Comment from "./page/comment/comment";
import { useContext } from "react";
import { StateContext } from "../home";

export default function Main() {
    const state = useContext(StateContext).state;
    const setState = useContext(StateContext).setState;

    return (
        <div className={styles.main}>
            <SideBar />
            <div className={styles.page} onClick={() => setState({ ...state, open: false })}>
                <p>※ラフです。デザインはあとで整えます。要件あればLINEに。</p>
                <Welcome />
                <ExperimentList />
                <RelatedLinks />
                <Comment />
            </div>
        </div>
    );
}

