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

              <div className="ze_reco_section">
                <div className="ze_subheader">
                  <h4>Recommended videos for today</h4>
                </div>

                  <div className='video_card_wrapper'>
                    <div className='video_card'>
                      <div className="video_container">
                        <img
                          src={'/images/demoimage.png'}
                          fill
                          priority
                          alt={`Picture of image`}
                          className="object-cover"
                        />
                        <span className="">
                          00:30
                        </span>
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
                    <div className='video_card'>
                      <div className="video_container">
                        <img
                          src={'/images/demoimage.png'}
                          fill
                          priority
                          alt={`Picture of image`}
                          className="object-cover"
                        />
                        <span className="">
                          00:30
                        </span>
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
                    <div className='video_card'>
                      <div className="video_container">
                        <img
                          src={'/images/demoimage.png'}
                          fill
                          priority
                          alt={`Picture of image`}
                          className="object-cover"
                        />
                        <span className="">
                          00:30
                        </span>
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
                    <div className='video_card'>
                      <div className="video_container">
                        <img
                          src={'/images/demoimage.png'}
                          fill
                          priority
                          alt={`Picture of image`}
                          className="object-cover"
                        />
                        <span className="">
                          00:30
                        </span>
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
                    <div className='video_card'>
                      <div className="video_container">
                        <img
                          src={'/images/demoimage.png'}
                          fill
                          priority
                          alt={`Picture of image`}
                          className="object-cover"
                        />
                        <span className="">
                          00:30
                        </span>
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
                    <div className='video_card'>
                      <div className="video_container">
                        <img
                          src={'/images/demoimage.png'}
                          fill
                          priority
                          alt={`Picture of image`}
                          className="object-cover"
                        />
                        <span className="">
                          00:30
                        </span>
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
