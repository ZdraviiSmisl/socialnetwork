import React from "react";
import UsersStyles from "./users.module.css";
import userPhoto from '../../assets/images/StanadartUser.jpg';
import {NavLink} from "react-router-dom";
import {api} from "../../api(DAL)/api";

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages = [...pages, i];
  }


  return <div>

    <div>
      {pages.map(p => {

        return <span key={p.id}
                     className={props.currentPage === p && UsersStyles.selectedPage}
                     onClick={() => {
                       props.onPageChanged(p)
                     }}>{p}</span>
      })}


    </div>

    {
      props.users.map(u => <div key={u.id}>
            <span>

                   <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={UsersStyles.userPhoto}/>
                       </NavLink>
                </div>

                <div>
                    {u.followed ?
                      <button disabled={props.buttonFollowingStatus.some(id => id === u.id)}
                              onClick={() => {
                                props.toggleFollowingStatus(true, u.id);
                                api.unfollow(u.id)
                                  .then(response => {
                                    if (response.data.resultCode === 0) {
                                      props.unfollow(u.id)

                                    }
                                    props.toggleFollowingStatus(false, u.id)
                                  });
                              }}>Unfollow
                      </button>
                      : <button disabled={props.buttonFollowingStatus.some(id => id === u.id)}
                                onClick={() => {
                                  props.toggleFollowingStatus(true, u.id);

                                  api.follow(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                      props.follow(u.id);
                                    }

                                    props.toggleFollowingStatus(false, u.id)
                                  });
                                }}>Follow
                      </button>}
                    </div>
                        </span>
        <span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.Status}</div>
                        </span>
                        <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                        </span>
                        </span>
      </div>)
    }
  </div>
};

export default Users;