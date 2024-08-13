import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";

export const HeaderHome = () => {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center text-[var(--primary-text-color)] text-xl font-medium px-4 py-4 bg-gradient-to-r from-[#1e0c37] via-purple-950 to-[#0E001A] border-b-2 border-b-purple-950">
      <div className="flex items-center space-x-20 px-20">
        <div className="h-20 w-20 rounded-full cursor-pointer" onClick={() => navigate('/home')}>
          <img src="/image/ShockWave.png" alt="Logo"></img>
        </div>
        <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/home')}>Home</div>
        <div className="hover:shadow-glow duration-200 cursor-pointer" onClick={() => navigate('/about')}>About</div>
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
