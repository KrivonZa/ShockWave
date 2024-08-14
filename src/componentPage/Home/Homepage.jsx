import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Homepage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <div className="text-[var(--primary-text-color)] my-10 mx-36 text-lg">
      <div className="flex items-center justify-center h-[65vh] flex-col" data-aos="fade-down">
        <div className="text-5xl font-semibold text-center">ShockWave</div>
        <div className="font-normal text-center mt-4">Unleash the Power of Instant Messaging with ShockWave – Where Speed Meets Versatility</div>
      </div>

      {/* 1 hình ảnh + một câu slogan và 1 câu miêu tả, sinh động thêm*/}
      <div className="mx-2 mt-32">
        {/* Giới thiệu sơ lược về ShockWave */}
        <div className="grid grid-flow-col grid-cols-2 gap-x-6 h-[65vh] p-6">
          <div className="flex flex-col justify-center" data-aos="fade-right">
            <div className="text-4xl font-extrabold mb-4">About ShockWave</div>
            <div className="leading-relaxed">Shockwave is your go-to platform for seamless real-time communication. With an intuitive design and powerful features, it makes chatting with friends, family, or colleagues fast and easy. Enjoy instant messaging, group chats, media sharing, and more, all from any device.</div>
          </div>
          <div className="flex items-center justify-center" data-aos="fade-left">
            <img src='/ads/About-1.png' alt='A girl smiling while chatting on the phone' className="rounded-lg object-cover h-full" />
          </div>
        </div>

        {/* Tính năng của ShockWave */}
        <div className="text-center text-5xl font-extrabold">Feature</div>
        {/* Nhanh chóng, tiện lợi */}
        <div className="grid grid-flow-col grid-cols-2 gap-x-6 h-[65vh] p-6">
          <div>
            <div className="text-4xl font-extrabold mb-4">Fast and Convenient</div>
            <div>Shockwave offers lightning-fast, convenient messaging at your fingertips. Experience quick, easy navigation with an intuitive interface designed for seamless communication. Whether you're chatting in groups or one-on-one, Shockwave ensures a smooth and responsive experience every time.</div>
          </div>
        </div>

        {/* Đầy đủ kho emoji và gif */}
        <div></div>

        {/* Có thể tự custom chủ đề cho từng đoạn chat riêng biệt */}
        <div></div>

        {/* Bảo mật thông tin người dùng */}
        <div></div>

        {/* Cập nhật thường xuyên dựa vào nhu cầu người dùng và xu hướng thế giới */}
        <div></div>

        {/* Đăng kí */}
        <div></div>

        {/* Thắc mắc và liên hệ */}
        <div></div>

      </div>
    </div>
  );
};

export default Homepage;