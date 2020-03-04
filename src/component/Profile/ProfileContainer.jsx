import React from "react";
import f from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

class ProfileContainer extends React.Component {
render() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    );
};
}
export default ProfileContainer;


// store={props.store}