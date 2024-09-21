import styles from "./image.module.css";
import { ReactElement } from "react";

export default function _Image({ path, title } : { path: string, title: string | ReactElement }) {
  return (
    <div className={styles.imageWrapper}>
      <p>{title}</p>
      <img src={path} className={styles.image} />
    </div>
  );
}
