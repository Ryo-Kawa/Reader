import Image from "next/image";
import styles from "./welcome.module.css";
import { BASE_PATH } from "@/components/home";

export default function Welcome() {
    return (
        <section className={styles.section}>
            <div className={styles.imageWrapper}>
                <Image src={`${BASE_PATH}/image/welcome.svg`} alt="天文気象部へようこそ！" fill></Image>
            </div>
        </section>
    );
}