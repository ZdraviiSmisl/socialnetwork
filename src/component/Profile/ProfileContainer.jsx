import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUser_Profile} from "../../redux(BLL)/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import WithRedirect from '../hocs/WithUserRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUser_Profile(userId);

  }


  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  };
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,

})

export default compose(
  connect(mapStateToProps, {getUser_Profile}),
  withRouter,
  WithRedirect
)(ProfileContainer)