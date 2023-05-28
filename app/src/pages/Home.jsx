import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyWalletIcon from "../components/Icons/EmptyWalletIcon";
import LineArrowIcon from "../components/Icons/LineArrowIcon";
import MoneyIcon from "../components/Icons/MoneyIcon";
import SettingsIcon from "../components/Icons/SettingIcon";
import VideoAddIcon from "../components/Icons/VideoAddIcon";
import VideoPlayIcon from "../components/Icons/VideoPlayIcon";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router-dom";
import { hostUrl, backendUrl } from "../utils/constants";
import { toDate, toMinutes, convertTimeToVideoTime } from "../utils/functions";

const Home = ({ account, profile, earningHistory }) => {
    const navigate = useNavigate();
    const [analytics, setAnalytics] = useState(null);
    const [tfuelUsd, setTfuelUsd] = useState(0);
    const [recommendations, setRecommendations] = useState([]);

    earningHistory = earningHistory.slice(0, 3);

    // useEffect(() => {
    //     console.log("profile", profile);
    // }, [profile, recommendation, history]);

    const getRecommendations = async () => {
        const res = await fetch(`${backendUrl}/api/videos/recommended`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (res.ok) {
            setRecommendations(data.data.slice(0, 3));
        }
    };

    useEffect(() => {
        if (account) {
            getAnalytics();
            getRecommendations();
        }
    }, [account]);

    useEffect(() => {
        if (analytics?.walletbalance) {
            getTfuelPrice();
        }
    }, [analytics]);

    const getAnalytics = async () => {
        const res = await fetch(
            `${backendUrl}/api/users/${account.userId}/analytics?type=VIEWER`
        );

        const data = await res.json();

        if (res.ok) {
            setAnalytics(data.data);
        } else {
            setAnalytics({
                totalviewerviews: 0,
                totaltimewatched: 0,
                totalviewerearnings: 0,
                viewerviewsgroupedbydate: [],
                viewertimewatchedgroupedbydate: [],
                viewerearningsgroupedbydate: [],
                walletbalance: 0,
            });
        }
    };

    const getTfuelPrice = async () => {
        const res2 = await fetch(
            "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=TFUEL&tsyms=USD"
        );

        const data2 = await res2.json();

        if (res2.ok) {
            const price = data2.RAW.TFUEL.USD.PRICE;

            setTfuelUsd(price * analytics.walletbalance);
        }
    };

    return (
        <>
            {profile && (
                <div className={`zesha__box show`}>
                    <div className="zesha__ex-wrapper alert--bx">
                        <div>
                            <Header />
                        </div>
                        {profile && (
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
                                                {analytics?.walletbalance || 0}{" "}
                                                TFUEL{" "}
                                                <span className="">
                                                    ~ $
                                                    {Number(
                                                        tfuelUsd *
                                                            analytics?.walletbalance
                                                    ).toFixed(2)}
                                                </span>
                                            </h5>
                                            <p>
                                                <span
                                                    onClick={() => {
                                                        window.open(
                                                            `${hostUrl}/individual/payout`,
                                                            "_blank"
                                                        );
                                                    }}
                                                >
                                                    Withdraw
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        onClick={() => {
                                            window.open(
                                                "https://www.zesha.io/individual/auth/login",
                                                "_blank"
                                            );
                                        }}
                                        className="btn1"
                                        type="button"
                                    >
                                        Open Dashboard{" "}
                                        <span>
                                            <LineArrowIcon />
                                        </span>
                                    </button>
                                </div>

                                {profile?.userInterests?.length === 0 && (
                                    <div className="ze_acc_section">
                                        <div className="ze_subheader">
                                            <h4>Account setup</h4>
                                        </div>
                                        <div className="ze_acc_box">
                                            <button
                                                className="btn2"
                                                type="button"
                                            >
                                                <span>
                                                    <img
                                                        alt="discord"
                                                        src="/images/discord.svg"
                                                    />
                                                    Join Discord
                                                </span>
                                                <span>
                                                    <LineArrowIcon />
                                                </span>
                                            </button>
                                            <button
                                                className="btn2"
                                                type="button"
                                                onClick={() => {
                                                    navigate("/settings");
                                                }}
                                            >
                                                <span className="">
                                                    <SettingsIcon /> Set
                                                    Preferences
                                                </span>
                                                <span>
                                                    <LineArrowIcon />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="ze_reco_section">
                                    {recommendations.length > 0 ? (
                                        <>
                                            <div className="ze_subheader">
                                                <h4>
                                                    Recommended videos for today
                                                </h4>
                                            </div>

                                            <div className="video_card_main_wrapper">
                                                <div className="video_card_wrapper">
                                                    {recommendations.map(
                                                        (video, index) => (
                                                            <div
                                                                className="video_card cursor-pointer"
                                                                key={index}
                                                                onClick={() => {
                                                                    navigate(
                                                                        "/videos"
                                                                    );
                                                                }}
                                                            >
                                                                <div className="video_container">
                                                                    {video.id}
                                                                    <img
                                                                        src={
                                                                            video.videoThumbnail
                                                                        }
                                                                        alt={
                                                                            video.title
                                                                        }
                                                                        className="object-cover"
                                                                    />
                                                                    <span className="">
                                                                        {convertTimeToVideoTime(
                                                                            video.videoLength
                                                                        )}
                                                                    </span>
                                                                </div>
                                                                <div className="video_info">
                                                                    <span className="video_user_img_box">
                                                                        <img
                                                                            style={{
                                                                                width: "28px",
                                                                                height: "28px",
                                                                            }}
                                                                            src={
                                                                                video
                                                                                    .channel
                                                                                    .channelAvatar
                                                                            }
                                                                            alt=""
                                                                            className="video_user_img rounded-full"
                                                                        />
                                                                    </span>
                                                                    <div className="video_info_details">
                                                                        <h5 className="text-[#344054] text-sm font-medium line-clamp-1">
                                                                            {
                                                                                video.title
                                                                            }
                                                                        </h5>
                                                                        <span className="text-[#5C636E] text-xs font-normal line-clamp-1">
                                                                            {
                                                                                video
                                                                                    .channel
                                                                                    .name
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                <div className="link_view_all">
                                                    <Link to="/videos">
                                                        View all recommended
                                                        videos
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="ze_reco_box">
                                            <div className="ze_reco_inner_box ">
                                                <span className="text-[#046ED1]">
                                                    <VideoAddIcon />
                                                </span>
                                                <h5 className="">
                                                    Stay tuned for recommended
                                                    videos
                                                </h5>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="ze_history_box">
                                    <div className="ze_subheader">
                                        <h4>Videos history</h4>
                                        <Link to="/history">View all</Link>
                                    </div>
                                    {earningHistory.length > 0 ? (
                                        earningHistory.map((earning, index) => (
                                            <div
                                                className="divide-y divide-[#EEEFF2] py-1"
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
                                                                        .video
                                                                        .videoLength
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
                                                                ).toFixed(4)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <EmptyState
                                            text={"Start watching to earn"}
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
