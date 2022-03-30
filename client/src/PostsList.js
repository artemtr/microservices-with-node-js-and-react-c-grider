import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PostList() {
  const [posts, setPosts] = useState({});
  const getAllPosts = async () => {
    const FethedPosts = await axios.get("http://localhost:5000/posts");
    setPosts(FethedPosts.data);
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id}>
        <h4>{post.id}</h4>
        <p>{post.title}</p>
      </div>
    );
  });

  return (
    <div>
      <h4>Posts</h4>
      {renderedPosts}
    </div>
  );
}
