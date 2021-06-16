import React from "react";
import "./Feed.css";
import Post from "./Post";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      <img
        className="image"
        src="https://cdn.dribbble.com/users/63407/screenshots/6324540/dribbble_reasoning_corner.png?compress=1"
      />

      <Post />
      {posts.map((post) => (
        <Cards
          key={post.id}
          profilePic={post.data.profilePic}
          postImage={post.data.postImage}
          message={post.data.message}
          username={post.data.username}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
}

export default Feed;
