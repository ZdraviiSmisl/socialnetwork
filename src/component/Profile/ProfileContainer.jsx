import React from 'react';
import Profile from './Profile';
import * as axios from "axios";
import {connect} from "react-redux";
import MyPosts from "./MyPosts/MyPosts";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; //получаем наш юзер айди и записываем  в  строку ниже  в запрос вместо цифры2,match-совпадение нашего урла с роутами
        if (!userId) {
            userId = 2; // если параметра юзер айди  нет в урле .. то по умолчанию ставим цифру 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId) //либо  если в конце с помощтю конкатинации добавить через плюс
            .then(response => {
                this.props.setUserProfile(response.data); //берём тут profile для AC
            });
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/> //передаём помимо пропсов извне(если они придут)
                ещё и profile с сервера


            </div>
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile  //передаём это в Profile

})
let WithUrlDataContainerComponet = withRouter(ProfileContainer);/*// оборачиваем в контейнер withrouter*/
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponet); /*//далее оборачиваем в connerct*/


