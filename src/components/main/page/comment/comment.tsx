import Header from "../page_components/header/header";

export default function Comment() {
    return (
        <section>
            <Header title="コメント" />
            <p>コメントは<a href="https://docs.google.com/forms/d/e/1FAIpQLSc_PUmAJzD7k6CzKiXGOr6RrGRJsSO_x2Z7rZxUHo7sbmfPbQ/viewform?usp=sf_link">こちら</a>から送信できます。<br />(匿名なので、気軽にコメントして下さい。「楽しかった」などの簡単なものでもいいです。)</p>
        </section>
    );
}