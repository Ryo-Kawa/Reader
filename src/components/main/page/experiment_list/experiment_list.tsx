import Link from "next/link";
import Header from "../page_components/header/header";
import { experiment_list } from "@/components/home";

export default function ExperimentList() {
    const list = [];

    for(const experiment of experiment_list) {
        list.push(<li><Link href={experiment.url}>{experiment.title}</Link></li>);
    }
    
    return (
        <section>
            <Header title="実験一覧" />
            <p>模造紙に従って、読み進めてください。</p>
            <nav>
                <ol>
                    { list }
                </ol>
            </nav>
        </section>
    );
}