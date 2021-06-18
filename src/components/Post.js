import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function Post() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      postImage: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            placeholder={`What are you most thankful for ${user.displayName}?`}
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
