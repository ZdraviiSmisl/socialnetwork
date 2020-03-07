import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from 'react-redux';
import {setAuthUserData} from "../../redux(BLL)/authentications-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`{https://social-network.samuraijs.com/api/1.0/auth/me}`, {/*т.к. браузр при кросс доменных запосах не отправляет куку автомотически,нужно передать её в ручную вторым параметром после запроса*/
            withCredentials: true /*ваш пароль,логин?объект  с настройками запроса*/
        }).then(response => {

            if (response.data.resultCode == 0) { /*если всё нормально */
                let {id, email, login} = response.data.data;/*первая data пренадлежит библиотеке axios,вторая-объект на сервере который так назвал бэкэнд разраб*/
             /*только в этом случае означает что мы залогинены имы можем диспатчить авторизационные данные*/
                this.props.setAuthUserData(id, email, login);  }/*получаем 2й ответ сервера с  профилем и диспатчим его в стэйт*/
        });
    }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
   isAuth: state.authentication.isAuth,
   login: state.authentication.login
});
export default connect(mapStateToProps, { setAuthUserData})(HeaderContainer);