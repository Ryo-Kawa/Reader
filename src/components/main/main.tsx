import styles from "./main.module.css";
import SideBar from "./side/side_bar";
import MeteorologyPage from "./page/meteorology_page";
import AstronomyPage from "./page/astronomy_page";
import { useContext } from "react";
import { StateContext } from "../page";

export default function Main() {
    const kind = useContext(StateContext).state.kind;

    return (
        <div className={styles.main} style={{background: kind === "0" ? "#00bffe" : "#140718"}}>
            <SideBar />
            {kind === "0" ? <MeteorologyPage /> : <AstronomyPage />}
        </div>
    );
}

