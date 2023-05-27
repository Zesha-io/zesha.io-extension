import React from "react";
import { Link } from "react-router-dom";
import EmptyWalletIcon from "../components/Icons/EmptyWalletIcon";
import LineArrowIcon from "../components/Icons/LineArrowIcon";
import VideoAddIcon from "../components/Icons/VideoAddIcon";
import Header from "../components/Layout/header";

const UnAuthenticated = ({ host }) => {
    const loginUrl = `${host}/individual/auth/login`;
    return (
        <>
            <div className={`zesha__box show`}>
                <div className="zesha__ex-wrapper alert--bx">
                    <div>
                        <Header />
                    </div>
                    <div className="main-wrapper home">
                        <div className="balance_main_wrapper">
                            <div className="balance_wrapper">
                                <div style={{ width: "100%" }}>
                                    <span className="icon-box">
                                        <EmptyWalletIcon />
                                    </span>
                                </div>

                                <div className="">
                                    <h5 className="">
                                        0 TFUEL <span className="">~ $0</span>
                                    </h5>
                                    <p>Withdraw</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <button
                                onClick={() => {
                                    window.open(loginUrl, "_blank");
                                }}
                                className="btn1"
                                type="button"
                            >
                                Login on Zesha.io{" "}
                                <span>
                                    <LineArrowIcon />
                                </span>
                            </button>
                        </div>

                        <div className="ze_reco_section">
                            <div className="ze_subheader">
                                <h4>Recommended videos for today</h4>
                            </div>

                            <div className="ze_reco_box">
                                <div className="ze_reco_inner_box ">
                                    <span className="text-[#046ED1]">
                                        <VideoAddIcon />
                                    </span>
                                    <h5 className="">
                                        No recommendations for you
                                    </h5>
                                    <Link
                                        to={loginUrl}
                                        target="_blank"
                                        className=""
                                    >
                                        Login to start receiving your
                                        recommendations
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UnAuthenticated;
