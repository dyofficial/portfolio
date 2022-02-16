import ReactGa from 'react-ga';

ReactGa.initialize('G-W9180M1LB5');

export const resumeAnalyticsHandler = () => {
  ReactGa.event({
    category: 'Resume',
    action: 'Resume has been clicked',
  });
};

export const whatsAppAnalyticsHandler = () => {
  ReactGa.event({
    category: 'WhatsApp',
    action: 'WhatsApp has been clicked',
  });
};

export const githubAnalyticsHandler = () => {
  ReactGa.event({ category: 'Github', action: 'Github has been clicked' });
};
