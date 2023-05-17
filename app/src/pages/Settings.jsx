import React from 'react';
import Footer from '../components/Layout/footer';
import Header from '../components/Layout/header';

const Settings = () => {
  return (
    <>
      <div className={`zesha__box show`}>
        <div className="zesha__ex-wrapper alert--bx shadow-lg rounded-2xl">
          <div>
            <Header />
          </div>
          <div
            className="main-wrapper settings"
            
          >
            <div className="">
              <div className="main_head ze_subheader">
                <h4>Settings</h4>
              </div>

              <div className="ze_acc_section">
                {/* <div className="ze_subheader">
                    <h4>Account setup</h4>
                  </div> */}
                <div className="ze_acc_box ze_setting_box">
                  <div className="ze_subheader">
                    <h4>What type of videos are you interested in?</h4>
                  </div>

                  <div className="ze_setting_inner_wrapper">
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Beauty</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Travel</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Languages</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Food</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Culture</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Cars</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Politics</span>
                    </label>
                  </div>
                </div>

                <div className="ze_acc_box ze_setting_box">
                  <div className="ze_subheader">
                    <h4>How often should we recommend videos to you?</h4>
                  </div>

                  <div className="ze_setting_inner_wrapper">
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Daily</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Weekly</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Every 2 days</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="checkbox" />
                      <span>Monthly</span>
                    </label>
                  </div>
                </div>

                <div className="ze_acc_box ze_setting_box">
                  <div className="ze_subheader">
                    <h4>Choose a view mode?</h4>
                  </div>

                  <div className="ze_setting_inner_wrapper">
                    <label className="ze__settings__label">
                      <input type="radio" />
                      <span>Overlay</span>
                    </label>
                    <label className="ze__settings__label">
                      <input type="radio" />
                      <span>Full page</span>
                    </label>
                  </div>
                </div>


                <div >
                  <button className='btn1 settings_btn'>Continue</button>
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

export default Settings;
