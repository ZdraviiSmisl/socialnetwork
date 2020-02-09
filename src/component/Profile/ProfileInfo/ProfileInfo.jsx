import React from "react";
import f from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={f.content}>
            <div className={f.item}>
                <img src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"/>
            </div>
            <div className={f.descriptionBlock}>
                avatar+description
            </div>

        </div>
    );
};
export default ProfileInfo;
