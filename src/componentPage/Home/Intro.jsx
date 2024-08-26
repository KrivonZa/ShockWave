// src/components/Intro.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './styles.css'; // File CSS cho styling

export const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 4000); // Chuyển hướng sau 4 giây

    return () => clearTimeout(timer); // Xóa timer khi component unmount
  }, [navigate]);

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });
  const slideIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-100px)' },
    delay: 1500,
  });

  return (
    <div className="intro">
      <animated.div style={fadeIn}>
        <img src="/image/ShockWave.png" alt="Logo" className="relative z-10 logo shadow-logo-glow rounded-full mb-5 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40" />
      </animated.div>
      <animated.div style={slideIn}>
        <div className='text-center'>
          <div className='text-base font-medium sm:text-lg md:text-2xl'>Welcome to ShockWave</div>
          <div className='text-sm sm:text-base md:text-lg'>Fast & Versatile Messaging</div>
        </div>
      </animated.div>
    </div>
  );
};

export default Intro;
