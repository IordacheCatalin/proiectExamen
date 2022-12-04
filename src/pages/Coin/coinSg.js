import React from "react";
import styles from "../Home/home.module.scss";

const CoinSg = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className={styles.coinContainer}>
      <div className={styles.coin}>
        <div className={styles.coinLogo}>
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
          <h6>{symbol}</h6>
        </div>

        <div>
          <span className={styles.coinDetails}>Price $ </span>
          <span className={styles.coinDetailsData}>{price}</span>
        </div>
        <div>
          <span className={styles.coinDetails}>Market Cap $ </span>
          <span className={styles.coinDetailsData}>
            {volume.toLocaleString()}
          </span>
        </div>
        <p>
          <span className={styles.coinDetails}>
            Volume 24H: ${marketcap.toLocaleString()}{" "}
          </span>
        </p>

        {priceChange < 0 ? (
          <p>
            <span className={styles.coinDetails}>Change </span>
            <span className={styles.coinPercentRed}>
              {priceChange.toFixed(2)}%
            </span>
          </p>
        ) : (
          <p>
            <span className={styles.coinDetails}>Change </span>
            <span className={styles.coinPercentGreen}>
              {priceChange.toFixed(2)}%{" "}
            </span>
          </p>
        )}
       
      </div>
    </div>
  );
};

export default CoinSg;
