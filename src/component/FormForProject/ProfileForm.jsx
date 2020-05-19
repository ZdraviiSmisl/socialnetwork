import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InputType} from "../common/FormsControls/FormsControls";


const maxLength20 = maxLengthCreator(20)

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLength20]}
                        name={'NewPostText'}
                        placeholder={'Enter Your Post'}
                        component={InputType}
                        types='textarea'/></div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    );
};

const ProfileReduxForm = reduxForm({form: 'posts'})(ProfileForm);


export default ProfileReduxForm;
