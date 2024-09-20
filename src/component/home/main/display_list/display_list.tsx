import Link from "next/link";
import styles from "./display_list.module.css";
import main_styles from "../main.module.css";
import { display_list, display_num } from "@/component/all_exports";

export default function DisplayList() {
    const list = [];

    for(let i = 0; i < display_num; i++) {
        list.push(<li className={styles.item}><Link href={`/display?index=${i}`}>{display_list[i].title}</Link></li>);
    }
    
    return (
        <section>
            <h1 className={main_styles.header}>展示一覧</h1>
            <div className={main_styles.content}>
                <p><ruby>模造紙<rp>(</rp><rt>もぞうし</rt><rp>)</rp></ruby>に従って、読み進めてください。</p>
                <nav>
                    <ol>
                        { list }
                    </ol>
                </nav>
            </div>
        </section>
    );
}
