"use client";

import styles from "./description.module.css";

export default function Description({header, file}: {header: string, file: string}) {
    const content = (
        <audio src={`./description_audios/${file}`} controls className={styles.audio}></audio>
    )

    return (
        <></>
    );
}