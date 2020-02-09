import React from "react";
import f from "./../Dialogs.module.css";


const Message = (props) => {
  /*  const newMessageElement = React.createRef();
    const addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }*/

    return (
        <div>

         {/*   <div>
            <div>
                <textarea ref={newMessageElement}>  </textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add Message</button>
            </div>
            </div>*/}
            <div className={f.message}> {props.message}</div>

        </div>






            )

            };

            export default Message;

