import { useContext, useEffect, useState } from 'react';
import ReactGa from 'react-ga';
import { ThemeContext } from './contexts/theme';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loading from './components/Loader/Loading';
import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    ReactGa.initialize('G-W9180M1LB5');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      {' '}
      {loading ? (
        <Loading />
      ) : (
        <div id="top" className={`${themeName} app`}>
          <Header />

          <main>
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>

          <ScrollToTop />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
