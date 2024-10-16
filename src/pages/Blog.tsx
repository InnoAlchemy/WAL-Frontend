import { useState } from "react";
import BlogFeatureCard from "../components/BlogFeatureCard";
import DownloadBanner from "../components/DownloadBanner";
import Header from "../components/Header";
import { blogCategories, blogs } from "../data";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const [categories, setCategories] = useState(blogCategories);

  // Handler to toggle the selected category
  const handleCategoryClick = (index: number) => {
    setCategories((prevCategories) =>
      prevCategories.map((category, i) =>
        i === index ? { ...category, selected: !category.selected } : category
      )
    );
  };

  return (
    <div>
      <Header
        img="./header.png"
        title="Make Every Moment Count"
        text="EXPLORE OUR LATEST EVENTS"
        buttonLink="/events"
        buttonText="Get Tickets"
      />
      <div className="w-full m-auto text-center mt-4 mb-12 text-4xl text-primary font-semibold">
        OUR BLOG
      </div>
      <BlogFeatureCard />
      <div className="custom-md:w-md m-auto">
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="text-2xl md:text-3xl lg:text-4xl md:text-start text-center text-primary font-bold mb-4 md:mb-0 ml-4">
              Latest News & Blogs
            </div>
            <div className="flex flex-wrap gap-3 md:gap-5 md:m-0 m-auto">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 md:px-8 md:py-3 flex items-center justify-center rounded-full text-xs md:text-sm lg:text-base
          ${
            category.selected
              ? "bg-primary text-white"
              : "text-primary border border-primary"
          }`}
                  onClick={() => handleCategoryClick(index)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          <div className="grid custom-md:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center justify-center gap-7">
            {blogs.map(({ img, title, date }) => (
              <BlogCard img={img} title={title} date={date} />
            ))}
          </div>
        </div>
        <DownloadBanner />
      </div>
    </div>
  );
};

export default Blog;
