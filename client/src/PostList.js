import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentsList from "./ComentsList";
import ComentsList from "./ComentsList";

export default () => {
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  const fetchedComments = async () => {
    const comments = await axios.get(`http://localhost:4001/posts/comments`);
    setComments(comments.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchedComments();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    const commentsForPost = comments[post.id] || [];

    const renderedComments = commentsForPost.map((comment) => {
      return (
        <div>
          <li key={comment.id}>{comment.content}</li>
        </div>
      );
    });

    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          {renderedComments}
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
