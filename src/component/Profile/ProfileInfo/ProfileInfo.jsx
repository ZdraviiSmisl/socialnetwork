import React from "react";
import f from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={f.content}>
      <div className={f.item}>
        <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"/>
      </div>
      <div className={f.descriptionBlock}>
        <img
          src={props.profile.photos.large}/>
       <ProfileStatus status={props.status} update_User_Status={props.update_User_Status}/>
      </div>

    </div>
  );
};
export default ProfileInfo;
//