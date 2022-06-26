import * as React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import GlobalStyle from '../styles/global';

export default function IndexPage() {
  return (
    <main>
      <Header />
      <Intro />
      <GlobalStyle />
    </main>
  );
}
