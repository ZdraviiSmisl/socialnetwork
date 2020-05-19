import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {InputType} from "../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50)

const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLength50]}
                        name='newMessageText'
                        placeholder='Enter your message'
                        component={InputType}
                        types='textarea'/></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const MessagesReduxForm = reduxForm({form: 'messages'})(MessagesForm);

export default MessagesReduxForm;
