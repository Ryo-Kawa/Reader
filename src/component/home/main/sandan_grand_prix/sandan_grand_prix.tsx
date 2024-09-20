import main_styles from "../main.module.css";

export default function SandanGrandPrix() {
    return (
        <section>
            <h1 className={main_styles.header}>参団グランプリ</h1>
            <div className={main_styles.content}>
                <p>投票してくれると幸いです。<br />投票場所は２つ下のB<ruby>棟<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>１階にあります。</p>
            </div>
        </section>
    );
}