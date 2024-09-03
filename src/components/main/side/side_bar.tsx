import styles from "./side_bar.module.css";
import { useContext } from "react";
import { StateContext } from "@/components/page";

export default function SideBar() {
    const open = useContext(StateContext).state.open;

    return (
        <div className={styles.side} style={{width: open? 300 : 0}}>
            <ul>
                <li>言語</li>
                <li>開成学園公式の部紹介</li>
                <li>参団グランプリについて</li>
            </ul>
        </div>
    );
}