import React from "react";
import blogList from "../../Data/blogData";
import { useNavigate} from "react-router-dom";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuggestedBlog = ({blogId}) => {
    const navigate = useNavigate();
    const blog = blogList.find(item => item.id === blogId);

    return (
        <div className="suggested-blog-item" onClick={() => navigate(`/blogs/${blog.id}`)}>
            <img src={blog.imageUrl} alt={blog.title} className="suggested-blog-image" />
            <h4 className="suggested-blog-title">{blog.title}</h4>
            <span className="suggested-blog-date">{blog.publishedDate}</span>
        </div>
    );
}

const Blog = ({id}) => {
    const navigate = useNavigate();
    const blog = blogList.find(item => item.id === id);
    if (!blog) {
        return <div>Blog not found</div>;
    }
    return (
        <div className="container">
            <div className="blog-item-container">
                <img src={blog.imageUrl} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
                <h1>{blog.title}</h1>
                <div className="divider" />
                <p>
                    <em>
                        <FontAwesomeIcon icon="fa-regular fa-clock" color="grey" /> {blog.publishedDate}
                    </em> - <FontAwesomeIcon icon="fa-regular fa-folder" color="grey" /> 
                    <span style={{textTransform: 'capitalize'}}>{" "}{blog.category ? blog.category : "Uncategorized"}</span>
                </p>
                <div className="divider" />
                <div className='blog-full-content'>
                    {blog.content}
                </div>
                <div className="divider" />
                <div className='suggestions'>
                    <div className="title"><FontAwesomeIcon icon="fa-solid fa-chevron-right" color="black" />YOU MIGHT ALSO LIKE</div>
                    <div className="suggested-blogs">
                        {blog.suggestedBlogs.map(id => (
                            <SuggestedBlog key={id} blogId={id} />
                        ))}
                    </div>
                </div>

                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
            <div className="divider-vertical" />
            <div className="search-container">
                <div className="search-input-container">
                    <input type="text" placeholder="Search blogs..." />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;