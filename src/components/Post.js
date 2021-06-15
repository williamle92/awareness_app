import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput('')
    setImageUrl('')
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar />
        <form>
          <input
            placeholder={`What are you most thankful for?`}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="post__input"
          />
          <input
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="post__input"
          />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <h3>Compassion</h3>
        </div>
        <div className="post__option">
          <h3>Inspire</h3>
        </div>
        <div className="post__option">
          <h3>Empower</h3>
        </div>
      </div>
    </div>
  );
}

export default Post;
