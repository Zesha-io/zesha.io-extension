import React from 'react';
import Footer from '../components/Layout/footer';
import Header from '../components/Layout/header';

const Settings = () => {
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
                <h4>Settings</h4>
              </div>

              <div className="ze_acc_section">
                {/* <div className="ze_subheader">
                    <h4>Account setup</h4>
                  </div> */}
                <div className="ze_acc_box ze_setting_box">
                  <label htmlFor="interests">My interest</label>
                  {/* <select name="interests" id="interests">
                    <option value="select">Select your interest</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="interiors">Interiors</option>
                  </select> */}
                </div>

                <div className="ze_acc_box ze_setting_box">
                  <label htmlFor="frequency">Frequency of recommendations</label>
                  {/* <select name="frequency" id="frequency">
                    <option value="select">Select a frequency</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="interiors">Interiors</option>
                  </select> */}
                </div>

                <div className="ze_acc_box ze_setting_box">
                  <label htmlFor="view_mode">View mode</label>
                  {/* <select name="view_mode" id="view_mode">
                    <option value="select">Select a view mode</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="interiors">Interiors</option>
                  </select> */}
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
