import React from "react";
import f from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
/*на будущее: отрисовать тут остальную инфу по  профелю пользователя под номером  id 2 с сервера */
const ProfileInfo = (props) => {
    if (!props.profile) { // если профайл равен null или undefined(данных ещё нет..методы жизненного цикла ждать не будут...данные придут позже)
        return <Preloader/> //вернём крутилку и потом когда будетинициализирована загрузка данных,придёт профиль-перезагрузка компоненты стэйт изменился мы вновь придём сюда и отрисуем наш профиль
    }
    return (
        <div className={f.content}>
            <div className={f.item}>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"/>
            </div>
            <div className={f.descriptionBlock}>
                <img
                    src={props.profile.photos.large}/> {/*//достанем из profile приходящего с сервера через гет запрос нашу аватарку(в объекте json)*/}
                avatar+description
            </div>

        </div>
    );
};
export default ProfileInfo;
//