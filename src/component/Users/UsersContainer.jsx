import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingStatus,
    toggleIsFetching,
    unfollow
} from '../../redux(BLL)/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api(DAL)/api";

/*создать ещё функций в папке DLL для других запросов (follow,unfollow)-63 */
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => { /*первый зен в гетюзерс возвращает полный ответ,2й-тот что здесь,только data,так как весь ответ с сервера нашей компоненте не нужен*/

            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {     /*// второй запрос делаем   при переключении страницы,а повторно сайз вызываем   так как на странице может быть другое колличество пользователей*/
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);

        });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingStatus={this.props.toggleFollowingStatus}
                   buttonFollowingStatus={this.props.buttonFollowingStatus}
            />
        </>
    }


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        buttonFollowingStatus: state.usersPage.buttonFollowingStatus
    }
};


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingStatus
})(UsersContainer); /*connect внутри создатст колбэки которые  внутри задиспатчат то что вернут эшн криетеры с таким же именами как у колбэков*/

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {

            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNamber) => {

            dispatch(setCurrentPageAC(pageNamber));
        },

        setTotalUsersCount: (totalCount) => {

            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }

    }
};*/