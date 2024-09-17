export default function Header({ title } : { title: string }) {
    return (
        <h1 style={{fontSize: "30px", padding: "50px 0 10px 0"}}>{title}</h1>
    );
}