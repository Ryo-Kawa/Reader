import { ReactElement } from "react";
import styles from "./video.module.css";

export default function Video({ path, title }: { path: string, title: string | ReactElement }) {
    return (
        <div className={styles.videoWrapper}>
            <video src={path} controls className={styles.video} />
            <p>{title}</p>
        </div>
    );
}
