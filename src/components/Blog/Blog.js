import React from "react";
import "./Blog.css";
import blogList from "../../Data/blogData";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>Blogu</h2>
      <div className="blog-list">
        {blogList.map((item) => (
          <article>
            <span className="blog-category">
              {item.category ? item.category : "Uncategorized"}
            </span>
            <div className="blog-image-wrapper">
              <img src={item.imageUrl} className="blog-image" />
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <a href="/">Read More »</a>
            </div>

            <div className="blog-footer">
              <span>{item.publishedDate}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
