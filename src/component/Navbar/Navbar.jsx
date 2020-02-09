import React from "react";
import f from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {

    //const friendsElements = props.state.friends.map(f => <FriendItem name={f.name} id={f.id}/>)

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
            <div className={f.friends}>
                <NavLink to='/friends' activeClassName={f.activeLink}>Friends</NavLink>
               <div className={f.friendsItems}>

               </div>
            </div>
        </nav>
    );
};

export default Navbar;
//  {friendsElements }