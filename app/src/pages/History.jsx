import React from "react";
import VideoPlayIcon from "../components/Icons/VideoPlayIcon";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";
import EmptyState from "../components/EmptyState";
import { toDate, toMinutes } from "../utils/functions";

const History = ({ earningHistory }) => {
    return (
        <>
            <div className={`zesha__box show`}>
                <div className="zesha__ex-wrapper alert--bx shadow-lg rounded-2xlxx">
                    <div>
                        <Header />
                    </div>
                    <div className="main-wrapper">
                        <div className="ze_history_section">
                            <div className="ze_subheader">
                                <h4>History</h4>
                            </div>

                            <div className="ze_history_box">
                                {earningHistory.length > 0 ? (
                                    earningHistory.map(
                                        (earning, index) =>
                                            earning.video && (
                                                <div
                                                    className="divide-y divide-[#EEEFF2]"
                                                    key={index}
                                                >
                                                    <div className="ze_history_main_card">
                                                        <span className="icon-box">
                                                            <VideoPlayIcon />
                                                        </span>
                                                        <div className="ze_history_main_box">
                                                            <div className="ze_history_title">
                                                                <h5 className="line-clamp-1">
                                                                    You viewed{" "}
                                                                    {
                                                                        earning
                                                                            ?.video
                                                                            ?.title
                                                                    }{" "}
                                                                    -{" "}
                                                                    {toMinutes(
                                                                        earning
                                                                            ?.video
                                                                            ?.videoLength
                                                                    )}{" "}
                                                                    mins
                                                                </h5>
                                                                <span className="text-right">
                                                                    {
                                                                        earning.viewerAmount
                                                                    }{" "}
                                                                    TFUEL
                                                                </span>
                                                            </div>

                                                            <div className="flex items-center justify-between w-full ze_history_subtitle">
                                                                <span className="ze_history_date">
                                                                    {toDate(
                                                                        earning
                                                                            ?.video
                                                                            ?.createdAt
                                                                    )}
                                                                </span>
                                                                <span className="text-[#7F8691] text-xs font-normal">
                                                                    ~$
                                                                    {Number(
                                                                        earning.viewerAmountUSD
                                                                    ).toFixed(
                                                                        4
                                                                    )}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    )
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
