import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getUser_Profile, getUser_Status, update_User_Status} from "../../redux(BLL)/profile-reducer";
import {withRouter} from "react-router-dom";
import WithRedirect from '../hocs/WithUserRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUser_Profile(userId);
    this.props.getUser_Status(userId);

  }


  render() {
    return (
      <div>
        <Profile {...this.props}
                 profile={this.props.profile}
                 status={this.props.status}
                 update_User_Status={this.props.update_User_Status}/>
      </div>
    );
  };
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, {getUser_Profile, getUser_Status,update_User_Status}),
  withRouter,
  WithRedirect
)(ProfileContainer)