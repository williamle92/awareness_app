import React from "react";
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
import { auth } from "../firebase";
import { Button } from '@material-ui/core'

function Header(){
  const signOut = (e) => {
    auth.signOut().then(() => {
      console.log('sign out successful')
    }).catch((error) => {
      console.log('Error in the log out process')
    });
  }
    const [{user}] = useStateValue();
    
    return (
      <div className="header">
        <div className="header__left">
          <img src={logo} alt='logo' />
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
          <Link to='/dashboard'>
          <div className="header__option">
            <DashboardIcon fontSize="large" />
          </div>
          </Link>
          <Link to="/diarylogs">
          <div className="header__option">
            <MenuBookIcon fontSize="large" />
          </div>
          
          </Link>
          <Link to="/meditate">
          <div className="header__option">
            <InsertEmoticonSharpIcon fontSize="large" />
          </div>

          </Link>
    
           <Link to="/login">
          <div className="header__option">
            <VpnKeyIcon fontSize="large" />
          </div>
           </Link>
          <Button type='submit' onClick={signOut}>
          <div className="header__option">
            <ExitToAppIcon fontSize="large" />
          </div>

          </Button>
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
    
