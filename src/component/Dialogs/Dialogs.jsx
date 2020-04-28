import React from "react";
import f from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

  let state = props.dialogsPage;
  const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
  const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

  const newMessageText = state.newMessageText;


  const onAddMessage = () => {
    props.addMessage();

  }

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  }

if(!props.isAuth) return <Redirect to={'/login'}/>


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
          <div className={f.button}>
            <button onClick={onAddMessage}>Add Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
