import Link from "next/link";

export default function ExperimentList() {
    return (
        <section>
            <h1>実験一覧</h1>
            <p>模造紙に従って、なんとかかんとかしてください。</p>
            <ol>
                <li><Link href="/">...</Link></li>
                <li><Link href="/">...</Link></li>
                <li><Link href="/">...</Link></li>
                <li><Link href="/">...</Link></li>
            </ol>
        </section>
    );
}