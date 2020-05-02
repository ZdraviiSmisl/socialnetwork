import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


let mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
export const WithRedirect = (ComponentForRedirect) => {
 class RedirectedComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <ComponentForRedirect {...this.props}/>
    }
  }


let ConnectedUserRedirectComponent = connect(mapStateToPropsRedirect)(RedirectedComponent)
  return  ConnectedUserRedirectComponent;
};

export default WithRedirect;
