import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux(BLL)/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithRedirect from '../hocs/WithUserRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithRedirect)(Dialogs);


