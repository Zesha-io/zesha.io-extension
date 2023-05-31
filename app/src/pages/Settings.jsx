import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";
import { backendUrl } from "../utils/constants";
import Loader from "../components/Loader";

const getInterests = async () => {
    const response = await fetch(`${backendUrl}/api/interests`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) return null;

    return response.json();
};

const convertTimeToVideoTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.ceil(seconds % 60);

    return (
        hours ? [hours, minutes, remainingSeconds] : [minutes, remainingSeconds]
    )
        .map((value) => value.toString().padStart(2, "0"))
        .join(":");
};

const Settings = ({ profile, syncAccount }) => {
    const [statusText, setStatusText] = useState("");
    const [loading, setLoading] = useState(false);
    const [interests, setInterests] = useState([]);
    const [userInterests, setUserInterests] = useState([]);
    const [viewFrequency, setViewFrequency] = useState(
        profile?.userFrequency || "BALANCED"
    );
    const [viewMode, setViewMode] = useState(
        profile?.userViewMode || "OVERLAY_MODE"
    );

    useEffect(() => {
        getInterests().then((interests) => {
            if (interests) {
                setInterests(interests.data);

                let mappedInterests = profile?.userInterests || [];

                setUserInterests(mappedInterests);
            }
        });
    }, []);

    // useEffect(() => {
    //     if (interests.length > 0) {
    //         setInterests(interests);
    //     }
    // }, [interests]);

    const updateSettings = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (userInterests.length === 0) {
            setStatusText("Please select at least one interest");
            setLoading(false);
            return;
        }

        const response = await fetch(`${backendUrl}/api/users/${profile.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userViewMode: viewMode,
                userFrequency: viewFrequency,
                userInterests: userInterests,
            }),
        });

        if (!response.ok) {
            setStatusText("The was an error updating your settings");
            console.log("error: ", response);
        } else {
            setStatusText("Settings updated successfully");
        }

        setLoading(false);
        syncAccount();
    };

    return (
        <>
            <div className={`zesha__box show`}>
                <div className="zesha__ex-wrapper alert--bx shadow-lg rounded-2xlxx">
                    <div>
                        <Header />
                    </div>
                    <div className="main-wrapper settings">
                        <div className="">
                            <div className="main_head ze_subheader">
                                <h4>Settings</h4>
                            </div>

                            <div className="ze_acc_section">
                                {statusText && (
                                    <div className="w-fulls text-center py-4">
                                        <div
                                            className="rounded-full w-fulls p-2 bg-indigo-800 items-center text-indigo-100 leading-none"
                                            role="alert"
                                        >
                                            {loading && <Loader />}
                                            <span className="font-semibold mr-2 text-left flex-auto">
                                                {" "}
                                                {statusText}
                                            </span>
                                        </div>
                                    </div>
                                )}
                                <form onSubmit={updateSettings}>
                                    <div className="ze_acc_box ze_setting_box">
                                        <div className="ze_subheader">
                                            <h4>
                                                What type of videos are you
                                                interested in?
                                            </h4>
                                        </div>

                                        <div className="ze_setting_inner_wrapper">
                                            {interests.map(
                                                (interest, index) => (
                                                    <label
                                                        className="ze__settings__label"
                                                        key={index}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            value={interest.id}
                                                            name="interests"
                                                            checked={userInterests.includes(
                                                                interest.id
                                                            )}
                                                            onChange={(e) => {
                                                                if (
                                                                    e.target
                                                                        .checked
                                                                ) {
                                                                    setUserInterests(
                                                                        [
                                                                            ...userInterests,
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        ]
                                                                    );
                                                                } else {
                                                                    setUserInterests(
                                                                        userInterests.filter(
                                                                            (
                                                                                id
                                                                            ) =>
                                                                                id !==
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                        )
                                                                    );
                                                                }

                                                                console.log(
                                                                    userInterests
                                                                );
                                                            }}
                                                        />
                                                        <span>
                                                            {interest.name}
                                                        </span>
                                                    </label>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="ze_acc_box ze_setting_box">
                                        <div className="ze_subheader">
                                            <h4>
                                                How often should we recommend
                                                videos to you?
                                            </h4>
                                        </div>

                                        <div className="ze_setting_inner_wrapper">
                                            <label className="ze__settings__label">
                                                <input
                                                    type="radio"
                                                    value="LESS"
                                                    name="view_frequency"
                                                    checked={
                                                        viewFrequency === "LESS"
                                                    }
                                                    onChange={(e) => {
                                                        setViewFrequency(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <span>Less</span>
                                            </label>
                                            <label className="ze__settings__label">
                                                <input
                                                    type="radio"
                                                    value="BALANCED"
                                                    checked={
                                                        viewFrequency ===
                                                        "BALANCED"
                                                    }
                                                    name="view_frequency"
                                                    onChange={(e) => {
                                                        setViewFrequency(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <span>Balanced</span>
                                            </label>
                                            <label className="ze__settings__label">
                                                <input
                                                    type="radio"
                                                    value="MORE"
                                                    checked={
                                                        viewFrequency === "MORE"
                                                    }
                                                    name="view_frequency"
                                                    onChange={(e) => {
                                                        setViewFrequency(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <span>More</span>
                                            </label>
                                            {/* <label className="ze__settings__label">
                                            <input type="checkbox" />
                                            <span>Monthly</span>
                                        </label> */}
                                        </div>
                                    </div>

                                    <div className="ze_acc_box ze_setting_box">
                                        <div className="ze_subheader">
                                            <h4>Choose a view mode?</h4>
                                        </div>

                                        <div className="ze_setting_inner_wrapper">
                                            <label className="ze__settings__label">
                                                <input
                                                    type="radio"
                                                    value="OVERLAY_MODE"
                                                    name="view_mode"
                                                    checked={
                                                        viewMode ===
                                                        "OVERLAY_MODE"
                                                    }
                                                    onChange={(e) => {
                                                        setViewMode(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <span>Overlay</span>
                                            </label>
                                            <label className="ze__settings__label">
                                                <input
                                                    type="radio"
                                                    value="FULL_MODE"
                                                    name="view_mode"
                                                    checked={
                                                        viewMode === "FULL_MODE"
                                                    }
                                                    onChange={(e) => {
                                                        setViewMode(
                                                            e.target.value
                                                        );
                                                    }}
                                                />
                                                <span>Full mode</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        {!loading ? (
                                            <button
                                                type="submit"
                                                className="btn1 settings_btn"
                                            >
                                                Continue
                                            </button>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Settings;
