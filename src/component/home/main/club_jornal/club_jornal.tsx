import main_styles from "../main.module.css";

export default function ClubJornal() {
    return (
        <section>
            <h1 className={main_styles.header}>部誌</h1>
            <div className={main_styles.content}>
                <p>オンラインの部誌は<a href="https://drive.google.com/file/d/1SZyjIK-c53WSN8EaBqHOhJbgEJKxxX1g/view?usp=drivesdk">こちら</a>から。</p>
            </div>
        </section>
    );
}
