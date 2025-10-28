import styles from "../styles/RecentHeadlines.module.scss";
import { articles } from "../data/articles";
import ArticleCard from "./ArticleCard";

export default function RecentHeadlines({ searchTerm }) {
  const filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.recentHeadlines}>
      <h2>Recent Headlines</h2>
      <div className={styles.articlesGrid}>
        {filtered.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
