import Link from "next/link";
import styles from "./blogCard.module.css";
import { SlArrowRight } from "react-icons/sl";

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
          <SlArrowRight className={`${styles.seeMoreIcon}`} />
        </div>
      </article>
    </Link>
  );
}
