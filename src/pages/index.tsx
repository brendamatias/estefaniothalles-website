import * as React from 'react';
import About from '../components/About';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Services from '../components/Services';
import GlobalStyle from '../styles/global';
import '@fontsource/roboto';

export default function IndexPage() {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <hr />
      <Services />
      <Feedbacks />
      <Footer />
      <GlobalStyle />
    </main>
  );
}
