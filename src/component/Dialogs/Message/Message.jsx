import React from "react";
import f from "./../Dialogs.module.css";


const Message = (props) => {

  return (
    <div>

      <div className={f.message}> {props.message}</div>

    </div>
  )

};

export default Message;

