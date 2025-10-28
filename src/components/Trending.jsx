import styles from "../styles/Trending.module.scss";
import { articles } from "../data/articles";

export default function Trending({ searchTerm, category }) {
  const filtered = articles
    .filter((a) => {
      // Category filter
      const matchesCategory = category === "All" || a.category === category;

      // Search filter
      const matchesSearch = a.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .slice(0, 4);

  return (
    <div className={styles.trending}>
      <h2>Trending</h2>

      {filtered.length > 0 ? (
        <ul>
          {filtered.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResults}>No trending articles found.</p>
      )}
    </div>
  );
}
