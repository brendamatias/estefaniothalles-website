import * as React from 'react';
import Aos from 'aos';
import About from '../components/About';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Services from '../components/Services';
import GlobalStyle from '../styles/global';
import '@fontsource/roboto';
import 'aos/dist/aos.css';
import SEO from '../components/SEO';

export default function IndexPage() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <About />
      <hr />
      <Services />
      <Feedbacks />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export function Head() {
  return <SEO />;
}
