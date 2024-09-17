import Link from "next/link";
import Header from "../header/header";

export default function ExperimentList() {
    return (
        <section>
            <Header title="実験一覧" />
            <p>模造紙に従って、なんとかかんとかしてください。</p>
            <nav>
                <ol>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">...</Link></li>
                    <li><Link href="/">終わりに</Link></li>
                </ol>
            </nav>
        </section>
    );
}