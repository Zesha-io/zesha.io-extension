import React, { useEffect, useState, useRef } from "react";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";
import VideoJS from "../components/VideoJS";
import ThumbsUpIcon from "../components/Icons/ThumbsUpIcon";
import ThumbsDownIcon from "../components/Icons/ThumbsDownIcon";
import EyeIcon from "../components/Icons/EyeIcon";

import { hostUrl, backendUrl } from "../utils/constants";
import { toDate, toMinute, convertTimeToVideoTime } from "../utils/functions";

const Videos = ({ account }) => {
    const [recommendations, setRecommendations] = useState([]);
    const [videojsPlayer, setVideojsPlayer] = useState(null);
    const [sources, setSources] = useState([]);
    const [videoJsOptions, setVideoJsOptions] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [liking, setLiking] = useState(false);
    const [disliking, setDisliking] = useState(false);

    const playerRef = useRef(null);

    const getRecommendations = async () => {
        const res = await fetch(`${backendUrl}/api/videos/recommended`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (res.ok) {
            setRecommendations(data.data);
        }
    };

    useEffect(() => {
        if (account) {
            getRecommendations();
        }
    }, [account]);

    useEffect(() => {
        if (recommendations.length > 0) {
            const srcs = recommendations.map((video) => {
                return {
                    src: `https://media.thetavideoapi.com/${video.videoUrl}/master.m3u8`,
                    poster: video.videoThumbnail,
                    key: video.videoUrl,
                    id: video._id,
                    creatorId: video.creator.id,
                };
            });

            setSources(srcs);
            setPlaying(recommendations[0]);

            const current = srcs[0];

            setVideoJsOptions({
                autoplay: true,
                controls: true,
                responsive: true,
                techOrder: ["theta_hlsjs", "html5"],
                sources: [
                    {
                        src: current.src,
                        poster: current.poster,
                        type: "application/vnd.apple.mpegurl",
                        label: "auto",
                    },
                ],
                theta_hlsjs: {
                    videoId: current.id,
                    walletUrl:
                        "wss://api-wallet-service.thetatoken.org/theta/ws",
                    onWalletAccessToken: null,
                    hlsOpts: null,
                    thetaOpts: {
                        allowRangeRequests: true, // false if cdn does not support range headers
                    },
                },
            });
        }
    }, [recommendations]);

    useEffect(() => {
        if (videojsPlayer) {
            console.log("Currently playing", playing, videojsPlayer.state);
        }
    }, [playing]);

    const changePlayerSrc = (vSrc, i) => {
        if (videojsPlayer) {
            videojsPlayer.src(vSrc.src);
            videojsPlayer.poster(vSrc.poster);
            setPlaying(recommendations[i]);
        }
    };

    const likePlaying = async () => {
        setLiking(true);
        setTimeout(() => {
            setLiking(false);
        }, 1000);
        const video = playing;
        video.analytics.totallikes += 1;

        const response = await fetch(
            `${backendUrl}/api/videos/${video._id}/likesdislikes`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    viewerId: account.userId,
                    actionType: "LIKE",
                }),
            }
        );

        await response.json();

        setPlaying({ ...playing, video });
    };

    const dislikePlaying = async () => {
        setDisliking(true);
        setTimeout(() => {
            setDisliking(false);
        }, 1000);
        const video = playing;
        video.analytics.totaldislikes += 1;

        const response = await fetch(
            `${backendUrl}/api/videos/${video._id}/likesdislikes`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    viewerId: account.userId,
                    actionType: "DISLIKE",
                }),
            }
        );

        await response.json();

        setPlaying({ ...playing, video });
    };

    const payForAds = async (player, src) => {
        const payload = {
            watchedAt: new Date().toISOString(),
            watchDuration: player.duration(),
            exitedAt: new Date().toISOString(),
            viewerId: account.userId,
        };

        const response = await fetch(
            `${backendUrl}/api/videos/${src.id}/views`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            }
        );

        const payback = await response.json();

        const { id } = payback.data;

        const payload2 = {
            adId: "zeshagroup",
            videoId: src.id,
            creatorId: src.creatorId,
            viewerId: account.userId,
            viewId: id,
        };

        const response2 = await fetch(`${backendUrl}/api/earnings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload2),
        });

        await response2.json();

        if (!response2.ok) {
            console.log("unable to pay earnings");
        } else {
            console.log("paid earnings");
        }
    };

    const handlePlayerReady = (player) => {
        console.log("player", player);

        player.ads({});

        setVideojsPlayer(player);
        player.setState({
            ...player.state,
            track: 0,
        });
        // player.setState({
        //     ...player.state,
        //     ad: "https://zesha.nyc3.cdn.digitaloceanspaces.com/pre-roll-short.mp4",
        // });

        playerRef.current = player;

        player.on("ended", function () {
            let nextTrack = player.state.track + 1;
            if (nextTrack > sources.length - 1) nextTrack = 0;
            setPlaying(recommendations[nextTrack]);
            player.setState({
                ...player.state,
                track: nextTrack,
            });

            player.poster(sources[nextTrack].poster);
            player.src(sources[nextTrack].src);
        });

        const requestAds = function () {
            player.trigger("adsready");
        };

        const playAd = function () {
            player.ads.startLinearAdMode();
            // player.setState({ ...player.state, adPlaying: true });

            player.src(
                "https://zesha.nyc3.cdn.digitaloceanspaces.com/pre-roll-short.mp4"
            );

            player.one("adplaying", function () {
                player.trigger("ads-ad-started");
            });

            // player.one("durationchange", function () {
            //     console.log("durationchange");
            //     player.play();
            // });

            player.one("adended", function () {
                // play your linear ad content, then when it's finished ...
                // player.setState({ ...player.state, adPlaying: false });

                player.ads.endLinearAdMode();

                payForAds(player, sources[player.state.track]);
                console.log("ad ended", player.state);
            });
        };

        if (player.currentSrc()) {
            requestAds();
        }

        player.on("contentupdate", () => {
            if (player.currentSrc() !== player.state.ad) {
                requestAds();
            }
        });

        player.on("readyforpreroll", function () {
            // if (!player.state?.prerollPlayed) {
            // player.setState({ ...player.state, prerollPlayed: true });

            playAd();
            // }
        });

        // player.on("timeupdate", function (event) {
        //     if (player.state.midrollPlayed) {
        //         return;
        //     }

        //     var currentTime = player.currentTime(),
        //         opportunity;

        //     if ("lastTime" in player.state) {
        //         opportunity = currentTime > 15 && player.state.lastTime < 15;
        //     }

        //     player.setState({ ...player.state, lastTime: currentTime });

        //     if (opportunity) {
        //         player.setState({ ...player.state, midrollPlayed: true });

        //         playAd();
        //     }
        // });
    };

    return (
        <>
            <div className="zesha__box show">
                <div className="zesha__ex-wrapper alert--bx">
                    <div>
                        <Header />
                    </div>
                    <div className="main-wrapper videos">
                        <div className="ze_video_section">
                            <div className="main_head ze_subheader">
                                <h4>Videos</h4>
                            </div>

                            <div className="ze_reco_section">
                                <div className="ze_subheader">
                                    <h4>Recommended videos for today</h4>
                                </div>

                                {/* <div className="video_card_wrapper"></div> */}
                                <div className="flex flex-col">
                                    <div className="flex">
                                        {videoJsOptions && (
                                            <VideoJS
                                                options={videoJsOptions}
                                                onReady={handlePlayerReady}
                                            />
                                        )}
                                    </div>
                                </div>

                                {playing && (
                                    <>
                                        <div className="flex w-full">
                                            <div className="flex w-full">
                                                <div className="flex inline-flex items-center gap p-4 mt-3  bg-[#f2f2f2] px-2 py-1 rounded-full">
                                                    <span
                                                        className={`inline-flex  items-center cursor-pointer ${
                                                            liking
                                                                ? "animate-ping"
                                                                : ""
                                                        }`}
                                                        onClick={likePlaying}
                                                    >
                                                        <ThumbsUpIcon />{" "}
                                                        <span className="font-bold pl-2">
                                                            {playing?.analytics
                                                                ?.totallikes ||
                                                                0}
                                                        </span>
                                                    </span>
                                                    <span className="ml-2 mr-2">
                                                        |
                                                    </span>
                                                    <span
                                                        className={`inline-flex  gap-1 items-center cursor-pointer ${
                                                            disliking
                                                                ? "animate-ping"
                                                                : ""
                                                        }`}
                                                        onClick={dislikePlaying}
                                                    >
                                                        <ThumbsDownIcon />{" "}
                                                        <span className="font-bold pl-2">
                                                            {playing?.analytics
                                                                ?.totaldislikes ||
                                                                0}
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="ml-4 flex inline-flex items-center gap p-4 mt-3  bg-[#f2f2f2] px-2 py-1 rounded-full">
                                                    <span className="inline-flex  items-center">
                                                        <EyeIcon />{" "}
                                                        <span className="font-bold pl-2">
                                                            {playing?.analytics
                                                                ?.totalvideoviews ||
                                                                0}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold w-full my-1">
                                                {playing.title}
                                            </p>

                                            <p className="font-normal my-0">
                                                {playing.description}
                                            </p>
                                        </div>
                                    </>
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

export default Videos;
