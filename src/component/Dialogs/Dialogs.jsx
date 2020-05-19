import React from "react";
import f from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import MessagesReduxForm from "../FormForProject/MessagesForm";


const Dialogs = (props) => {

    let state = props.dialogsPage;
    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }


    if (!props.isAuth) return <Redirect to={'/login'}/>


    return (
        <div className={f.dialogs}>
            <div className={f.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={f.messages}>
                <div>{messagesElements}</div>
                <div className={f.form}>
                    <MessagesReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;
