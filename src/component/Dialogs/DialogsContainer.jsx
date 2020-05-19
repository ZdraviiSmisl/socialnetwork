import React from "react";
import {addMessage} from "../../redux(BLL)/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithRedirect from '../hocs/WithUserRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}


export default compose(
  connect(mapStateToProps, {addMessage}),
  WithRedirect)(Dialogs);


