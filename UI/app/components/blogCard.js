import Link from "next/link";
import styles from "./blogCard.module.css";

export default function BlogCard({ children, title, url }) {
  return (
    <Link href={url} className={styles.cardLink}>
      <article className={styles.card}>
        <h2>{title}</h2>
        {children}
      </article>
    </Link>
  );
}
