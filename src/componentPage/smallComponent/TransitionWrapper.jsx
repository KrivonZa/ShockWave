import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css'; // Chứa các style cho transition

export const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const prevLocation = useRef(location.pathname);
  const [transitionKey, setTransitionKey] = useState(location.key);

  useEffect(() => {
    if (prevLocation.current === '/' && location.pathname === '/home') {
      setTransitionKey(location.key); // Update key to trigger transition
    }
    prevLocation.current = location.pathname;
  }, [location]);

  return (
    <TransitionGroup>
      <CSSTransition key={transitionKey} classNames="fade" timeout={500}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
