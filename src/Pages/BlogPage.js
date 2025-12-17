import React from "react";
import { useParams } from "react-router-dom";
import Blog from "../components/BlogList/Blog";

const BlogPage = () => {
    const { id } = useParams();
    return <Blog id={id} />;
};

export default BlogPage;
