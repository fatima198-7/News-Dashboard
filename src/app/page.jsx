"use client";
import { useState } from "react";
import Categories from "@/components/Categories";
import Trending from "@/components/Trending";
import TopAuthors from "@/components/TopAuthors";
import RecentHeadlines from "@/components/RecentHeadlines";
import RightSidebar from "@/components/RightSidebar";
import "@/styles/page.scss";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="container">
      <div className="main-content">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="searchBar"
        />

        <Categories
          onSelectCategory={setSelectedCategory}
          selected={selectedCategory}
        />

        {/* ✅ Category + Search دونوں props آگے pass ہوں گے */}
        <Trending searchTerm={searchTerm} category={selectedCategory} />
        <RecentHeadlines searchTerm={searchTerm} category={selectedCategory} />
        <TopAuthors />
      </div>

      <div className="sideBar">
        <RightSidebar />
      </div>
    </div>
  );
}
