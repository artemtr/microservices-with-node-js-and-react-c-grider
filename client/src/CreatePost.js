import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [title, setTitle] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    await axios.post("http://localhost:5000/posts/", {
      title,
    });

    setTitle("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="post">Create post</label>
        <input
          type="text"
          name="post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
