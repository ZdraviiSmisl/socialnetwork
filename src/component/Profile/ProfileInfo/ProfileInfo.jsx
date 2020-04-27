import React from "react";
import f from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

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
        avatar+description
      </div>

    </div>
  );
};
export default ProfileInfo;
//