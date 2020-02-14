import React from "react";
import UsersStyles from './users.module.css'

const Users = (props) => {
    debugger;
    if(props.users.length===0){
        props.setUsers(

            [{id:1,fullName:'Jeca',Status:'many is power',location:{contry:'Russia',city:'Pushkino'},photoUrl: 'https://avatarko.ru/img/kartinka/33/film_muzhchina_ulybka_32755.jpg',followed:true},
                {id:2,fullName:'Kolian',Status:'i agree with you',location:{contry:'Russia',city:'Pushkino'},photoUrl: 'https://avatarko.ru/img/kartinka/33/film_muzhchina_ulybka_32755.jpg',followed:false},
                {id:3,fullName:'Ivan',Status:"no,it's only paper",location:{contry:'Russia',city:'Pushkino'},photoUrl: 'https://avatarko.ru/img/kartinka/33/film_muzhchina_ulybka_32755.jpg',followed:true},
        ])

    }


    return <div>

        {
            props.users.map(u => <div key={u.id}>
            <span>

                <div><img src={u.photoUrl} className={UsersStyles.userPhoto}/></div>
                <div>{u.followed ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button> : <button onClick={() => {
                    props.follow(u.id)
                }}>Follow</button>}</div>
            </span>

                <span>
                  <span>
                      <div>{u.fullName}</div>
                  <div>{u.Status}</div>

                  </span>
                  <span>
                      <div>{u.location.contry}</div>
                      <div>{u.location.city}</div>

                  </span>

            </span>


            </div>)
        }

    </div>
}


export default Users;