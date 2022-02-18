import React from 'react';
import lottie from 'lottie-web';
import loader from '../../assets/loading-screen.json';

const Loading = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#loading-screen'),
      animationData: loader,
    });
  }, []);

  return (
    <div id="loading-screen" style={{ width: 200, height: '100vh', margin: 'auto auto' }}></div>
  );
};

export default Loading;
