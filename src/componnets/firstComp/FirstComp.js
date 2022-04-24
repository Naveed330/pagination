import React, { useState, useEffect } from "react";
import "./FirstComp.css";
import axios from "axios";
import Post from "../posts/Post";
import Paginations from "../pagination/paginations";
const FirstComp = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("post", posts);
  //   Get Current Post
  const indexOfLastPost = currentPage * postperpage;
  console.log("indexOfLastPost", indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postperpage;
  console.log("indexOfFirstPost", indexOfFirstPost);
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPost", currentPost);
  //   Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <h1 style={{ color: "#03fcec" }}>Pagination</h1>
      <Post posts={currentPost} loading={loading} />
      <Paginations
        postperpage={postperpage}
        totalpost={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default FirstComp;
