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
      <article className={`card ${styles.card}`}>
        <p className={styles.releaseDate}>{releaseDate}</p>
        <h3>{title}</h3>
        <div className={styles.cardContent}>{children}</div>
        <div className={styles.cardEnd}>
          <SlArrowRight className={`${styles.seeMoreIcon}`} />
        </div>
      </article>
    </Link>
  );
}
