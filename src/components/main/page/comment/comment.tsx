export default function Comment() {
    return (
        <section>
            <h1>コメント</h1>
            <p>感想、良かった点、悪かった点とかできれば。<br />来年よりよくするために使います。</p>
            <textarea name="comment" rows={4} cols={50} style={{resize: "none"}}></textarea>
            <button>送信</button>
        </section>
    );
}