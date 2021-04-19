import "./Blog.css";
import React, { useEffect, useState } from "react";

export function BlogCard(props) {
  const [blogData, setblogData] = useState(props.blogData);

  const trimData = function (text, length) {
    return text.slice(0, length);
  };
  return (
    <a target="_blank" className="blog" href={blogData.url}>
      <img src={blogData.image} alt="something" />
      <div className="blog-content">
        <h1>{trimData(blogData.title, 40)}</h1>
        <p>{trimData(blogData.description, 90)}...</p>
        <span href={blogData.url}>READ MORE</span>
        <i className="fas fa-chevron-right"></i>
      </div>
    </a>
  );
}

export default function Blog() {
  const [blogs, setblogs] = useState("");

  const getBlogs = function () {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setblogs(data);
      });
  };

  useEffect(() => {
    document.getElementById("blog-container").style.opacity = 1;
    getBlogs();
  }, []);

  return (
    <div id="blog-container" className="blog-container">
      <h4>Blogs</h4>
      <div className="blogs">
        {Object.keys(blogs).map((blog, key) => {
          return <BlogCard key={key} blogData={blogs[blog]} />;
        })}
      </div>
    </div>
  );
}
