"use client";

import Image from "next/image";
import styles from "./cloud.module.css";

export function Cloud({ experience, top, left }: {experience: string, top: string, left: string}) {
    return (
        <div className={styles.cloud} style={{top: top, left: left}}>
            <button onClick={() => alert(experience)}>
                <Image src="" alt="" className={styles.image}></Image>
                <span className={styles.experience}>{experience}</span>
            </button>
        </div>
    );
}