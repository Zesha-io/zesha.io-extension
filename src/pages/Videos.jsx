import React from 'react';
import Footer from '../components/Layout/footer';
import Header from '../components/Layout/header';

const Videos = () => {
  return (
    <>
      <div className={`zesha__box show`}>
        <div className="zesha__ex-wrapper alert--bx">
          <div>
            <Header />
          </div>
          <div className="main-wrapper videos">
            <div className="ze_video_section">
              <div className="main_head ze_subheader">
                <h4>Videos</h4>
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
