import Header from "../page_components/header/header";

export default function Comment() {
    return (
        <section>
            <Header title="コメント" />
            <p>感想は<a href="#">こちら</a>から送信できます。<br />(感想は匿名です。集まった感想は来年度、天文気象部をよりよくするために使われます。)</p>
        </section>
    );
}