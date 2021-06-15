import React, { Component } from "react";
import logo from "./photos/noBlogo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InsertEmoticonSharpIcon from "@material-ui/icons/InsertEmoticonSharp";
// import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { Avatar } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <img src={logo} />
          <div className="header__input">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__center">
          <div className="header__option">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header__option">
            <DashboardIcon fontSize="large" />
          </div>
          <div className="header__option">
            <MenuBookIcon fontSize="large" />
          </div>
          <div className="header__option">
            <InsertEmoticonSharpIcon fontSize="large" />
          </div>
        </div>
        <div className="header__right">
          <div className="header__info">
            <Avatar />
            <h4>williaammm</h4>
          </div>
        </div>
      </div>
    );
  }
}
