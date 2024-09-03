import styles from "./main.module.css";
import SideBar from "./side/side_bar";
import MeteorologyPage from "./page/meteorology/meteorology_page";
import AstronomyPage from "./page/astronomy/astronomy_page";
import { useContext } from "react";
import { StateContext } from "../page";

export default function Main() {
    const state = useContext(StateContext).state;
    const setState = useContext(StateContext).setState;

    return (
        <div className={styles.main} style={{background: state.kind === "0" ? "#00bffe" : "#140718"}}>
            <SideBar />
            <div className={styles.page} onClick={() => setState({ ...state, open: false })}>
                {state.kind === "0" ? <MeteorologyPage /> : <AstronomyPage />}
            </div>
        </div>
    );
}

