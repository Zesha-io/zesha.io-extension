import React from "react";
import VideoPlayIcon from "../components/Icons/VideoPlayIcon";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";
import EmptyState from "../components/EmptyState";

const History = ({ history }) => {
    return (
        <>
            <div className={`zesha__box show`}>
                <div className="zesha__ex-wrapper alert--bx shadow-lg rounded-2xl">
                    <div>
                        <Header />
                    </div>
                    <div className="main-wrapper">
                        <div className="ze_history_section">
                            <div className="ze_subheader">
                                <h4>History</h4>
                            </div>

                            <div className="ze_history_box">
                                {history ? (
                                    <div className="divide-y divide-[#EEEFF2] py-6">
                                        <div className="ze_history_main_card">
                                            <span className="icon-box">
                                                <VideoPlayIcon />
                                            </span>
                                            <div className="ze_history_main_box">
                                                <div className="ze_history_title">
                                                    <h5 className="">
                                                        <span>You viewed </span>
                                                        2 videos{" "}
                                                        <span>for</span> 30 mins
                                                    </h5>
                                                    <span>24 TFUEL</span>
                                                </div>

                                                <div className="flex items-center justify-between w-full ze_history_subtitle">
                                                    <span className="ze_history_date">
                                                        Jan 05, 12:50
                                                    </span>
                                                    <span className="text-[#7F8691] text-xs font-normal">
                                                        ~$12
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <EmptyState
                                        text={"Start watching to earn"}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
};

export default History;
