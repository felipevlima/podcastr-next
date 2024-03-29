import '../styles/global.scss';
import React from 'react';
import styles from '../styles/app.module.scss';
import Header from '../components/Header';
import Player from '../components/Player';
import { PlayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }: any) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
