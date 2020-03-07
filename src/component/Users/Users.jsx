import React from "react";
import UsersStyles from "./users.module.css";
import userPhoto from '../../assets/images/StanadartUser.jpg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }


    return <div>

        <div>
            {pages.map(p => {

                return <span key={p.id} className={props.currentPage === p && UsersStyles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}


        </div>

        {
            props.users.map(u => <div key={u.id}>
            <span>

                   <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={UsersStyles.userPhoto}/>
                       </NavLink>
                </div>

                <div>
                    {u.followed ?
                        <button disabled={props.buttonFollowingStatus.some(id => id === u.id)} onClick={() => { /*метод some выбирает кого-то 1го и змассива,если он равин id  пользователя то some  вернёт тру, кнопка дисэйблится*/

                            props.toggleFollowingStatus(true, u.id) /*предаём 2 параметра дисейбл кнопки и конкретного пользователя*/
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,/*отписка от пользователя,2 параетра*/
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'
                                    }
                                })

                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)

                                    }
                                    props.toggleFollowingStatus(false, u.id)
                                });
                        }}>Unfollow
                        </button>
                        : <button disabled={props.buttonFollowingStatus.some(id => id === u.id)} onClick={() => {

                            props.toggleFollowingStatus(true, u.id)/*перед асинхронным запросом мы лиспатчим  true*/
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},  /*подписка на пользователя,отличие от гэт запроса.. передаёться три параметра вместо 2х*/
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9afe52b8-8bdf-4340-bf02-6f9a020ad3e6'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingStatus(false, u.id)/*а в конце запроса дизэйблим кнопку*/

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