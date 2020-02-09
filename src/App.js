/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Profile from "./component/Profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./component/News/News";
import Settings from "./component/Settings/Settings";
import Music from "./component/Music/Music";
import FriendItem from "./component/Navbar/FriendItem/FriendItem";
import MyPosts from "./component/Profile/MyPosts/MyPosts";
import DialogsContainer from "./component/Dialogs/DialogsContainer";


const App = (props) => {

    return (


            <div className="app-wrapper">
                <Header/>

                <Navbar />

                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer />}/>

                    <Route path='/profile' render={() => <Profile  />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/friends' render={() => <FriendItem />}/>

                </div>

            </div>

    );
};

export default App;

//state={props.state.sidebarPage} ...navbar
// state={props.state.sidebarPage}   ...FreidItem

//store={props.store}  ....Profile

//store={props.store}   ....DialogsConstainer