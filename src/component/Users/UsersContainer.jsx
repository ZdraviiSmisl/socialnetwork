import React from 'react';
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toggleFollowingStatus,
    toggleIsFetching,
    unfollow
} from '../../redux(BLL)/users-reducer';

import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
       /* this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        api.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);

        });*/
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
    follow, unfollow, setUsers,
    setCurrentPage, setUsersTotalCount, toggleIsFetching,
    toggleFollowingStatus, getUsers
})(UsersContainer);