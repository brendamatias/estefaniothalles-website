import * as React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Intro from '../components/Intro';
import GlobalStyle from '../styles/global';

export default function IndexPage() {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <GlobalStyle />
    </main>
  );
}
