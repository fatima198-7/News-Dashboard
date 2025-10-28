import styles from "../styles/RightSidebar.module.scss";
import { articles } from "../data/articles";

export default function RightSidebar() {
  const trending = articles.slice(0, 3);
  return (
    <aside className={styles.rightSidebar}>
      <h2>Trending Widgets</h2>
      <ul>
        {trending.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </aside>
  );
}
