import Link from "next/link";
import Header from "../page_components/header/header";
import { display_list } from "@/components/home";

export default function DisplayList() {
    const list = [];

    for(const display of display_list) {
        list.push(<li><Link href={display.url}>{display.title}</Link></li>);
    }
    
    return (
        <section>
            <Header title="展示一覧" />
            <p>模造紙に従って、読み進めてください。</p>
            <nav>
                <ol>
                    { list }
                </ol>
            </nav>
        </section>
    );
}