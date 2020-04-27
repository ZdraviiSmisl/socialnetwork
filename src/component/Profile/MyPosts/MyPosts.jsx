import React, {createRef} from "react";
import f from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

    const postsElements = props.posts.map( p => <Post key={p.id} massage = {p.message} lickesCaunt={p.likesCount}/>)
    const newPostElement=React.createRef();

    const onAddPost=()=>{
     props.addPost();
    }

    const onPostChange = () => {
         let text=newPostElement.current.value;
    props.updateNewPostText(text);
    }

    return (
        <div className = {f.postBlock}>
          <h3>My Posts </h3>
            <div>
                <div>
                    <textarea placeholder='knock your message here' onChange={onPostChange}ref={newPostElement}
                               value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className = {f.posts}>
                {postsElements}

            </div>
        </div>
    );
};
export default MyPosts;





