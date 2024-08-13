// src/App.jsx
import { useRoutes, useLocation } from 'react-router-dom';
import './index.css';
import { router } from './router';
import { useEffect } from 'react';
import TransitionWrapper from './componentPage/smallComponent/TransitionWrapper';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <div className="flex-grow">
        <TransitionWrapper>
          {useRoutes(router)}
        </TransitionWrapper>
      </div>
    </div>
  );
}

export default App;
