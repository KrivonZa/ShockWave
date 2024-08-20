import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {

  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center text-[var(--primary-text-color)] text-xl font-medium px-4 py-3 bg-[#F7FBFC] bg-opacity-75 backdrop-blur-sm border-b-2 border-b-[#B9D7EA] shadow-[0px_8px_20px_5px_rgba(44,116,179,0.4)]">
      <div className="flex items-center space-x-12 px-20">
        <div className="h-20 w-20 rounded-full cursor-pointer" onClick={() => navigate('/home')}>
          <img src="/image/ShockWave.png" alt="Logo"></img>
        </div>
        <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/home')}>Home</div>
        <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/contact')}>Contact</div>
      </div>

      <div className="flex space-x-20 px-20">
        <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/login')}>
          Login
        </div>
        <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/register')}>Register</div>
      </div>
    </div>
  );
};

export default HeaderHome;
