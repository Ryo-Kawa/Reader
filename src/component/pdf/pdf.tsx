import styles from "./pdf.module.css";
import { ReactElement } from "react";

export default function Pdf({ path, title } : { path: string, title: string | ReactElement }) {
  return (
    <div className={styles.pdfWrapper}>
      <iframe src={path} className={styles.pdf} />
      <p>{title}</p>
    </div>
  );
}