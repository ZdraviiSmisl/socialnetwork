import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {setUserProfile} from "../../redux(BLL)/profile-reducer";
import {withRouter} from "react-router-dom";
import {api} from "../../api(DAL)/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    api.getUserProfile(userId).then(response => {
      this.props.setUserProfile(response.data);
    });
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
  profile: state.profilePage.profile

})
let WithUrlDataContainerComponet = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponet); /*//далее оборачиваем в connerct*/


