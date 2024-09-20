import styles from "./image.module.css";

export default function _Image({ path, title } : { path: string, title: string}) {
  return (
    <div className={styles.imageWrapprr}>
      <p>{title}</p>
      <img src={path} className={styles.image} />
    </div>
  );
}
