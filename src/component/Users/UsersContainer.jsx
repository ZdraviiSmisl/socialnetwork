import React from 'react';
import {connect} from 'react-redux';
import {
    follow, get_Users,
    setCurrentPage,
    toggleFollowingStatus,
    unfollow
} from '../../redux(BLL)/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.get_Users(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.get_Users(pageNumber, this.props.pageSize);
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


export default connect(mapStateToProps,
  {follow, unfollow, setCurrentPage, toggleFollowingStatus, get_Users
})(UsersContainer);