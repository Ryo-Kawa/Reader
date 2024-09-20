import styles from "./video.module.css";

export default function Video({ path, title }: { path: string, title: string }) {
    return (
        <div className={styles.videoWrapper}>
            <p>{title}</p>
            <video src={path} controls className={styles.video} />
        </div>
    );
}