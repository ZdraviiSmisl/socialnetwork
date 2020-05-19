
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux(BLL)/profile-reducer";
import React from "react";
import {connect} from "react-redux";



const mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}

const MyPostsContainer= connect(mapStateToProps, {addPost})(MyPosts)
export default MyPostsContainer;





