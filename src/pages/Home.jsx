import React from 'react';
import { Link } from 'react-router-dom';
import EmptyWalletIcon from '../components/Icons/EmptyWalletIcon';
import HomeIcon from '../components/Icons/HomeIcon';
import LineArrowIcon from '../components/Icons/LineArrowIcon';
import SettingsIcon from '../components/Icons/SettingIcon';
import TimerIcon from '../components/Icons/TimerIcon';
import VideoAddIcon from '../components/Icons/VideoAddIcon';
import VideoPlayIcon from '../components/Icons/VideoPlayIcon';
import Footer from '../components/Layout/footer';
import Header from '../components/Layout/header';

const Home = () => {
  return (
    <>
      <div className={`zesha__box show`}>
        <div className="zesha__ex-wrapper alert--bx shadow-lg rounded-2xl">
          <div
            className="main-wrapper"
            style={{
              overflowY: 'auto',
              height: '100%',
              maxHeight: '500px',
              padding: '10px 0 140px 0',
              scrollBehavior: 'smooth',
            }}
          >
            <div>
              <Header />
            </div>
            <div className="balance_main_wrapper">
              <div className="balance_wrapper">
                <div style={{ width: '100%' }}>
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
              <button className="btn1" type="button">
                Open Dashboard{' '}
                <span>
                  <LineArrowIcon />
                </span>
              </button>
            </div>

            <div className="ze_acc_section">
              <div className="ze_subheader">
                <h4>Account setup</h4>
              </div>
              <div className="ze_acc_box">
                <button className="btn2" type="button">
                  <span className="">
                    <SettingsIcon /> Set Preferences
                  </span>
                  <span>
                    <LineArrowIcon />
                  </span>
                </button>
                <button className="btn2" type="button">
                  <span>
                    <img src="/images/discord.svg" />
                    Join Discord
                  </span>
                  <span>
                    <LineArrowIcon />
                  </span>
                </button>
              </div>
            </div>

            <div className="ze_reco_section">
              <div className="ze_subheader">
                <h4>My recommendations</h4>
              </div>

              <div class="w-full bg-white mt-1  relative rounded py-4 cursor-pointer ze_reco_box">
                <div class="flex items-center justify-between flex-col gap-3 ze_reco_inner_box ">
                  <span class="text-[#046ED1]">
                    <VideoAddIcon />
                  </span>
                  <h5 class="">No recommendations for you</h5>
                  <Link to="/" class="">
                    Set preferences to start
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
