import React from "react";
import "./Cards.css";
import {Avatar} from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

function Cards({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="card">
      <div className="card__top">
      <Avatar src={profilePic} className="card__avatar" />
      <div className="card__topInfo">
        <h3>{username}</h3>
        <p>Timestamp... </p>

      </div>
      </div>
      <div className="card__bottom">
          <p>{message}</p> 
      </div>
      <div className="card__image">
          <img src={image} alt="card__image"/>
      </div>
      <div className="card__options">
      <div className="card__option">
          <ThumbUpIcon />
            <p>Like</p>          
          </div>
      <div className="post__option">
          <CommentIcon />
            <p>Comment</p>          
          </div>
      </div>
    </div>
  );
}

export default Cards;
