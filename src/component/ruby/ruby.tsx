export default function Ruby({ text, ruby } : { text: string, ruby: string }) {
    return (
        <ruby>{text}<rp>(</rp><rt>{ruby}</rt><rp>)</rp></ruby>
    );
}