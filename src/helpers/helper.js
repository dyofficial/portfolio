import ReactGa from 'react-ga';

ReactGa.initialize('G-W9180M1LB5');

export const resumeAnalyticsHandler = () => {
  ReactGa.event({
    category: 'Resume',
    action: 'Resume has been clicked',
  });
  console.log('first');
};
