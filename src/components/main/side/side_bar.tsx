import styles from "./side_bar.module.css";
import { useContext } from "react";
import { StateContext } from "@/components/home";

export default function SideBar() {
    const open = useContext(StateContext).state.open;

    return (
        <div className={styles.side} data-open={open}>
            <ul>
                <li>テーマ: 気象(時間あったら)</li>
                <li>言語: 日本語(時間あったら)</li>
                <li>
                    コンテンツ(開閉式)
                    <ul>
                        <li>実験一覧</li>
                        <li>関連リンク</li>
                        <li>コメント</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}