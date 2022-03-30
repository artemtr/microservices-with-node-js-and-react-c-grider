import React from "react";
import CreatePost from "./CreatePost";
import PostsList from "./PostsList";

export default function App() {
  return (
    <div>
      <h2>Create post site</h2>
      <CreatePost />
      <PostsList />
    </div>
  );
}
