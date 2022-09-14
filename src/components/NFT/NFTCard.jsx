import React from 'react';

import nft from '../../assets/img/image-equilibrium.jpg';
import avatar from '../../assets/img/image-avatar.png';
import { ReactComponent as Clock } from '../../assets/svg/icon-clock.svg';
import { ReactComponent as Ethereum } from '../../assets/svg/icon-ethereum.svg';
import { ReactComponent as View } from '../../assets/svg/icon-view.svg';

import styles from '../../assets/scss/nftCard.module.scss';

function NFTCard() {
  return (
    <main>
      <img src={nft} alt="nft-img" />

      <h1>Equilibrium #3429</h1>
      <h2>Our Equilibrium collection promotes balance and calm.</h2>
      <div className={styles.info}>
        <div className={styles.ethereum}>
          <Ethereum />
          <p className={styles.eth}>0.041 ETH</p>
        </div>
        <div className={styles.time}>
          <Clock />
          <p className={styles.days}>3 days left</p>
        </div>
      </div>

      <footer>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <p className={styles.name}>
          Creation of <span>Jules Wyvern</span>
        </p>
      </footer>
    </main>
  );
}

export default NFTCard;
