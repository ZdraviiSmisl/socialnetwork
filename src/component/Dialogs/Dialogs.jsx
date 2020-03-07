import React from "react";
import f from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';



const Dialogs = (props) => {

let state=props.dialogsPage;
    const dialogsElements =state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const newMessageText = state.newMessageText;


    const onAddMessage = () => {
        props.addMessage();

    }


    const onMessageChange = (event) => {

        let text=event.target.value;
props.updateNewMessage(text);


    }
    return (
        <div className={f.dialogs}>
            <div className={f.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={f.messages}>
                <div>{messagesElements}</div>
                <div className={f.form}>
                    <div className={f.area}>
                        <textarea placeholder="Knock your message here" onChange={onMessageChange}
                              value={newMessageText}>  </textarea></div>
                    <div className={f.button}><button onClick={onAddMessage}>Add Message</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
