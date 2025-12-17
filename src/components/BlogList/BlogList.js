import React from "react";
import "./BlogList.css";
import blogList from "../../Data/blogData";
import { useNavigate } from "react-router-dom";


const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="blog-list-container">
      <h2>Blogu</h2>
      <div className="blog-list">
        {blogList.map((item) => (
          <article onClick={() => navigate(`/blogs/${item.id}`)} className="blog-item" key={item.id}>
            <span className="blog-category">
              {item.category ? item.category : "Uncategorized"}
            </span>
            <div className="blog-image-wrapper">
              <img src={item.imageUrl} className="blog-image" />
            </div>

            <div className="blog-content">
              <h3>{item.title}</h3>
              <p className='clamp-3'>{item.content}</p>
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
