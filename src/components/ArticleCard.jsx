import styles from "../styles/ArticleCard.module.scss";

export default function ArticleCard({ article }) {
  return (
    <div className={styles.articleCard}>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <span>By {article.author}</span>
    </div>
  );
}
