import main_styles from "../main.module.css";

export default function Comment() {
    return (
        <section>
            <h1 className={main_styles.header}>コメント</h1>
            <div className={main_styles.content}>
                <p>コメントは<a href="https://docs.google.com/forms/d/e/1FAIpQLSc_PUmAJzD7k6CzKiXGOr6RrGRJsSO_x2Z7rZxUHo7sbmfPbQ/viewform?usp=sf_link">こちら</a>から送信できます。<br />(<ruby>匿名<rp>(</rp><rt>とくめい</rt><rp>)</rp></ruby>なので、気軽にコメントして下さい。「楽しかった」などの簡単なものでもいいです。)</p>
            </div>
        </section>
    );
}