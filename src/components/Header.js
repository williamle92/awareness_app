import React, { Component } from "react";
import logo from "../photos/noBlogo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InsertEmoticonSharpIcon from "@material-ui/icons/InsertEmoticonSharp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Avatar } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Link } from 'react-router-dom'

import { useStateValue } from "../StateProvider";

function Header(){
    const [{user}, dispatch] = useStateValue();
    
    return (
      <div className="header">
        <div className="header__left">
          <img src={logo} />
          <div className="header__input">
            <SearchIcon />
            <input placeholder="Search Awareness" type="text" />
          </div>
        </div>
        <div className="header__center">
          <Link to="/">
          <div
            className="header__option 
          header__option--active"
          >
            <HomeIcon fontSize="large" />
          </div>
          </Link>
          <Link to='/todotracker'>
          <div className="header__option">
            <DashboardIcon fontSize="large" />
          </div>
          </Link>
          <div className="header__option">
            <MenuBookIcon fontSize="large" />
          </div>
          <div className="header__option">
            <InsertEmoticonSharpIcon fontSize="large" />
          </div>
    
          <div className="header__option">
           <Link to="/login">
            <VpnKeyIcon fontSize="large" />

           </Link>
          </div>
          <div className="header__option">
            <ExitToAppIcon fontSize="large" />
          </div>
        </div>
        <div className="header__right">
          <div className="header__info">
            <Avatar src={user.photoURL} />
            <h4>{user.displayName}</h4>
          </div>
        </div>
      </div>
    );
    }
export default Header;
    
