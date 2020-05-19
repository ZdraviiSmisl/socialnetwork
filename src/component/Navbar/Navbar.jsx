import React from "react";
import f from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


const Navbar = (props) => {


  return (
    <nav className={f.nav}>
      <div className={`${f.item} ${f.active}`}>
        <NavLink to='/profile' activeClassName={f.activeLink}>Profile</NavLink>
      </div>
      <div className={f.item}>
        <NavLink to='/dialogs' activeClassName={f.activeLink}>Messages</NavLink>
      </div>
      <div className={f.item}>
        <NavLink to='/news' activeClassName={f.activeLink}>News</NavLink>
      </div>
      <div className={f.item}>
        <NavLink to='/music' activeClassName={f.activeLink}>Music</NavLink>
      </div>
      <div className={f.item}>
        <NavLink to='/settings' activeClassName={f.activeLink}>Settings</NavLink>
      </div>

      <div className={f.users}>
        <NavLink to='/users' activeClassName={f.activeLink}>Users</NavLink>


      </div>
    </nav>
  );
};

export default Navbar;
//  {friendsElements }