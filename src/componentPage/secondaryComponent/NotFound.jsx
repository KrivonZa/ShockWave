import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div className="text-[var(--primary-text-color)]">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="text-9xl font-bold">404</div>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="text-4xl font-bold">Page Not Found</div>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="mt-4 text-xl">Oops! The page you're looking for doesn't exist.</div>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <button
            className="mt-4 px-4 py-2 bg-purple-950 text-white font-medium rounded hover:bg-purple-800 transition-all duration-300"
            onClick={() => navigate("/home")}
          >
            Go to Homepage
          </button>
        </CSSTransition>
      </div>
    </div>
  );
};

export default NotFound;
