import Link from "next/link";
import Header from "../component/header/header";
import { display_list, display_num } from "@/component/home";

export default function DisplayList() {
    const list = [];

    for(let i = 0; i < display_num; i++) {
        list.push(<li><Link href={`/display?index=${i}`}>{display_list[i].title}</Link></li>);
    }
    
    return (
        <section>
            <Header title="展示一覧" />
            <p><ruby>模造紙<rp>(</rp><rt>もぞうし</rt><rp>)</rp></ruby>に従って、読み進めてください。</p>
            <nav>
                <ol>
                    { list }
                </ol>
            </nav>
        </section>
    );
}