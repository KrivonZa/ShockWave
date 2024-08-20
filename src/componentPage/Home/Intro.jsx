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
        <img src="/image/ShockWave.png" alt="Logo" className="relative z-10 logo shadow-logo-glow rounded-full" />
      </animated.div>
      <animated.div style={slideIn}>
        <h1>Welcome to ShockWave</h1>
        <p>Unleash the Power of Instant Messaging with ShockWave – Where Speed Meets Versatility</p>
      </animated.div>
    </div>
  );
};

export default Intro;
