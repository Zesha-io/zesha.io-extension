import React from 'react';
import MoneyIcon from '../components/Icons/MoneyIcon';
import VideoPlayIcon from '../components/Icons/VideoPlayIcon';
import Footer from '../components/Layout/footer';
import Header from '../components/Layout/header';

const History = () => {
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

            <div className="ze_history_section">
              <div className="ze_subheader">
                <h4>History</h4>
              </div>

              <div className="ze_history_box">
                <div className="divide-y divide-[#EEEFF2] py-6">
                  <div className="ze_history_main_card">
                    <span className="icon-box">
                      <VideoPlayIcon />
                    </span>
                    <div className="ze_history_main_box">
                      <div className="ze_history_title">
                        <h5 className="">
                          <span>You viewed </span>2 videos <span>for</span> 30 mins
                        </h5>
                        <span>
                          24 TFUEL
                        </span>
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
                  <div className="ze_history_main_card">
                    <span className="icon-box">
                      <MoneyIcon />
                    </span>
                    <div className="ze_history_main_box">
                      <div className="ze_history_title">
                        <h5 className="">
                          <span>You tipped </span>&ldquo;The Incessant&rdquo;
                        </h5>
                        <span>
                          2 TFUEL
                        </span>
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
