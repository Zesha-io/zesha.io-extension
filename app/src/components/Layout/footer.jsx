import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../Icons/HomeIcon";
import SettingsIcon from "../Icons/SettingIcon";
import TimerIcon from "../Icons/TimerIcon";
import VideoPlayIcon from "../Icons/VideoPlayIcon";

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-end gap-4 mt-5 flex-row w-full text-sm footer">
                <NavLink className="" to={"/"}>
                    <HomeIcon />
                </NavLink>
                <NavLink className="" to={"/videos"}>
                    <VideoPlayIcon />
                </NavLink>
                <NavLink className="" to="/history">
                    <TimerIcon />
                </NavLink>
                <NavLink className="" to={"/settings"}>
                    <SettingsIcon />
                </NavLink>
            </div>
        </>
    );
};

export default Footer;
