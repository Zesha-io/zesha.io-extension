import React from 'react';
import { Link } from 'react-router-dom';
import EmptyWalletIcon from '../components/Icons/EmptyWalletIcon';
import LineArrowIcon from '../components/Icons/LineArrowIcon';
import MoneyIcon from '../components/Icons/MoneyIcon';
import SettingsIcon from '../components/Icons/SettingIcon';
import VideoAddIcon from '../components/Icons/VideoAddIcon';
import VideoPlayIcon from '../components/Icons/VideoPlayIcon';
import Footer from '../components/Layout/footer';
import Header from '../components/Layout/header';

const Home = () => {
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
                    <img alt="discord" src="/images/discord.svg" />
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

              <div className="ze_reco_box">
                <div className="ze_reco_inner_box ">
                  <span className="text-[#046ED1]">
                    <VideoAddIcon />
                  </span>
                  <h5 className="">No recommendations for you</h5>
                  <Link to="/" className="">
                    Set preferences to start
                  </Link>
                </div>
              </div>
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
                  <h5 className="">Stay tuned for recommended videos</h5>
                </div>
              </div>
            </div>

            <div className="ze_reco_section">
              <div className="ze_subheader">
                <h4>Recommended videos for today</h4>
              </div>

              <div className='video_card_main_wrapper'>
                <div className="video_card_wrapper">
                  <div className="video_card">
                    <div className="video_container">
                      <img
                        src={'/images/demoimage.png'}
                        fill
                        priority
                        alt={`Picture of image`}
                        className="object-cover"
                      />
                      <span className="">00:30</span>
                    </div>
                    <div className="video_info">
                      <span className="video_user_img_box">
                        <img
                          src={'/images/pic2.png'}
                          alt={`Picture of image`}
                          className="video_user_img"
                        />
                      </span>
                      <div className="video_info_details">
                        <h5 className="text-[#344054] text-sm font-medium">
                          Under the sea
                        </h5>
                        <span className="text-[#5C636E] text-xs font-normal">
                          Zantena
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="video_card">
                    <div className="video_container">
                      <img
                        src={'/images/demoimage.png'}
                        fill
                        priority
                        alt={`Picture of image`}
                        className="object-cover"
                      />
                      <span className="">00:30</span>
                    </div>
                    <div className="video_info">
                      <span className="video_user_img_box">
                        <img
                          src={'/images/pic2.png'}
                          alt={`Picture of image`}
                          className="video_user_img"
                        />
                      </span>
                      <div className="video_info_details">
                        <h5 className="text-[#344054] text-sm font-medium">
                          Under the sea
                        </h5>
                        <span className="text-[#5C636E] text-xs font-normal">
                          Zantena
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="video_card">
                    <div className="video_container">
                      <img
                        src={'/images/demoimage.png'}
                        fill
                        priority
                        alt={`Picture of image`}
                        className="object-cover"
                      />
                      <span className="">00:30</span>
                    </div>
                    <div className="video_info">
                      <span className="video_user_img_box">
                        <img
                          src={'/images/pic2.png'}
                          alt={`Picture of image`}
                          className="video_user_img"
                        />
                      </span>
                      <div className="video_info_details">
                        <h5 className="text-[#344054] text-sm font-medium">
                          Under the sea
                        </h5>
                        <span className="text-[#5C636E] text-xs font-normal">
                          Zantena
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="link_view_all">
                    <Link to='/videos' >View all recommended videos</Link>
                </div>
              </div>
            </div>

            <div className="ze_history_box">
              <div className="ze_subheader">
                <h4>Videos history</h4>
                <Link to="/history">view all</Link>
              </div>
              <div className="divide-y divide-[#EEEFF2] py-6">
                <div className="ze_history_main_card">
                  <span className="icon-box">
                    <VideoPlayIcon />
                  </span>
                  <div className="ze_history_main_box">
                    <div className="ze_history_title">
                      <h5 className="">
                        <span>You viewed </span>2 videos <span>for</span> 30
                        mins
                      </h5>
                      <span>24 TFUEL</span>
                    </div>

                    <div className="flex items-center justify-between w-full ze_history_subtitle">
                      <span className="ze_history_date">Jan 05, 12:50</span>
                      <span className="text-[#7F8691] text-xs font-normal">
                        ~$12
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ze_history_main_card">
                  <span className="icon-box">
                    <MoneyIcon />
                  </span>
                  <div className="ze_history_main_box">
                    <div className="ze_history_title">
                      <h5 className="">
                        <span>You tipped </span>
                        &ldquo;The Incessant&rdquo;
                      </h5>
                      <span>2 TFUEL</span>
                    </div>

                    <div className="flex items-center justify-between w-full ze_history_subtitle">
                      <span className="ze_history_date">Jan 05, 12:50</span>
                      <span className="text-[#7F8691] text-xs font-normal">
                        ~$12
                      </span>
                    </div>
                  </div>
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
