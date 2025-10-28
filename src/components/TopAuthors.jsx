import styles from "@/styles/TopAuthers.module.scss";
import { articles } from "../data/articles";

export default function TopAuthors() {
  const authors = [...new Set(articles.map((a) => a.author))]; // unique authors
  return (
    <div className={styles.topAuthors}>
      <h2>Top Authors</h2>
      <ul>
        {authors.map((author) => (
          <li key={author}>{author}</li>
        ))}
      </ul>
    </div>
  );
}
