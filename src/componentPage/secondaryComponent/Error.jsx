import React from "react";
import './styles.css';
import { useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen text-center">
      <div className="text-[var(--primary-text-color)]">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="text-9xl font-bold">500</div>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="text-4xl font-bold">Unexpected Error :(</div>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <div className="mt-4 text-xl">Oops! The page is having trouble now. Sorry!</div>
        </CSSTransition>
        <div className="flex justify-around items-center">
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <button
              className="mt-4 px-4 py-2 bg-purple-950 text-white font-medium rounded hover:bg-purple-800 transition-all duration-300"
              onClick={() => navigate("/home")}
            >
              Go to Homepage
            </button>
          </CSSTransition>

          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-500 transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact Support
            </button>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Error;
