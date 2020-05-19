import React from "react";
import f from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfileReduxForm from "../../FormForProject/ProfileForm";


const MyPosts = (props) => {

    const postsElements = props.posts.map(p => <Post key={p.id}
                                                     massage={p.message}
                                                     lickesCaunt={p.likesCount}/>)


    const addNewPost = (values) => {
        props.addPost(values.NewPostText);
    }


    return (
        <div className={f.postBlock}>
            <h3>My Posts </h3>
            <div>
                <div>

                    <ProfileReduxForm onSubmit={addNewPost}/>
                </div>


            </div>
            <div className={f.posts}>
                {postsElements}

            </div>
        </div>
    );
};
export default MyPosts;





