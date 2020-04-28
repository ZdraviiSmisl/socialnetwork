import React from "react";
import Header from "./Header";
import {connect} from 'react-redux';
import {get_Auth_UserData} from "../../redux(BLL)/authentications-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {

    this.props.get_Auth_UserData();
  }

  render() {
    return <Header {...this.props}/>
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
export default connect(mapStateToProps, {get_Auth_UserData})(HeaderContainer);