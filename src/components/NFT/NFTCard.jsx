import React from 'react';
import nft from '../../assets/img/image-equilibrium.jpg';

import styles from '../../assets/scss/nftCard.module.scss';

function NFTCard() {
  return (
    <main>
      <div>
        <img src={nft} alt="nft-img" />
      </div>
      <h1>Equilibrium #3429</h1>
      <h2>Our Equilibrium collection promotes balance and calm.</h2>
      <p>0.041 ETH</p>
      <p>3 days left</p>
      <p>
        Creation of <span>Jules Wyvern</span>
      </p>
    </main>
  );
}

export default NFTCard;
