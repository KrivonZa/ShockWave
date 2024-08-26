import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";

export const Homepage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);


  //Mấy cái này để kiểm tra độ rộng màn hình để áp dụng hiệu ứng
  const isSmallScreen = window.innerWidth < 640; // sm: < 640px
  const isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 768; // md: 640px - 767px
  const isLargeScreen = window.innerWidth >= 768 && window.innerWidth < 1024; // lg: 768px - 1023px
  const isExtraLargeScreen = window.innerWidth >= 1024 && window.innerWidth < 1280; // xl: 1024px - 1279px
  const is2ExtraLargeScreen = window.innerWidth >= 1280; // 2xl: >= 1280px

  return (
    <div className="text-[var(--primary-text-color)] mt-12 mb-32 mx-4 sm:mx-12 lg:mx-36 text-base sm:text-lg lg:text-xl">
      <div className="flex justify-center items-center h-[65vh] flex-col" data-aos="fade-down">
        <div className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center">ShockWave</div>
        <div className="font-normal text-center mt-2 sm:mt-4 whitespace-nowrap">Fast & Versatile Messaging</div>
      </div>

      <div className="mx-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-14 h-auto p-6 my-20 lg:my-64">
          <div className="flex flex-col justify-center" data-aos={isSmallScreen ? "fade-left" : "fade-right"}>
            <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 sm:mb-10">About ShockWave</div>
            <div className="leading-relaxed text-sm sm:text-base lg:text-lg">Shockwave simplifies real-time communication with its intuitive design and powerful features. Chat instantly, share media, and connect effortlessly on any device.</div>
          </div>
          <div className="flex items-center justify-center" data-aos="fade-left">
            <video
              src="/ads/About-1.mp4"
              alt="A man using phone"
              className="rounded-3xl object-cover h-48 sm:h-64 lg:h-full"
              autoPlay
              muted
              loop
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ boxShadow: '10px 7px 0px rgb(110, 172, 218)' }}
            ></video>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-14 h-auto p-6 my-20 lg:my-64">
          <div className="hidden lg:flex items-center justify-center" data-aos="fade-right">
            <video
              src="/ads/About-2.mp4"
              alt="Timelapse of traffic"
              className="rounded-3xl object-cover h-48 sm:h-64 lg:h-full"
              autoPlay
              muted
              loop
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ boxShadow: '-10px 7px 0px rgb(110, 172, 218)' }}
            ></video>
          </div>

          <div className="flex flex-col justify-center" data-aos={isSmallScreen ? "fade-right" : "fade-left"}>
            <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 sm:mb-10">Fast and Convenient</div>
            <div className="leading-relaxed text-sm sm:text-base lg:text-lg">Shockwave delivers fast, convenient messaging with an intuitive interface for seamless communication, whether in groups or one-on-one.</div>
          </div>

          <div className="lg:hidden flex items-center justify-center" data-aos="fade-right">
            <video
              src="/ads/About-2.mp4"
              alt="Timelapse of traffic"
              className="rounded-3xl object-cover h-48 sm:h-64 lg:h-full"
              autoPlay
              muted
              loop
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ boxShadow: '-10px 7px 0px rgb(110, 172, 218)' }}
            ></video>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center h-[20vh] sm:h-[25vh] lg:h-[30vh] p-6 my-20 sm:my-30 lg:my-40 border-2 rounded-3xl border-blue-400 z-20"
            data-aos="fade-up"
            data-aos-duration="1500">
            <div className="grid grid-flow-row grid-rows-2 text-center">
              <div className="text-base sm:text-lg lg:text-xl font-medium">
                Ready to experience seamless communication? Join Shockwave now and start connecting instantly!
              </div>
              <div className="mt-2">
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: '0px 4px 6px rgb(110, 172, 218)',
                    '&:hover': {
                      boxShadow: '0px 4px 8px rgb(110, 172, 218)',
                    },
                  }}
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
