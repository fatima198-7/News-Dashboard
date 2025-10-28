import { useState } from "react";
import styles from "../styles/Categories.module.scss";

export default function Categories({ onSelectCategory }) {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Business",
    "Health",
    "Sports",
    "Entertainment",
  ];

  const handleClick = (cat) => {
    setActive(cat);
    onSelectCategory(cat);
  };

  return (
    <div className={styles.categories}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`${styles.button} ${active === cat ? styles.active : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
