import Link from "next/link";
import styles from "./blogCard.module.css";

export default function BlogCard({
  className,
  children,
  title,
  url,
  urlAria,
  releaseDate,
}) {
  return (
    <Link href={url} className={`${className} ${styles.cardLink}`}>
      <article className={styles.card}>
        <h2>{title}</h2>
        {children}
        <div className={styles.cardEnd}>
          <p className={styles.releaseDate}>{releaseDate}</p>
          <p>Click to read more</p>
        </div>
      </article>
    </Link>
  );
}
