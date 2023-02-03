import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinSg from "../Coin/coinSg";
import styles from "./home.module.scss";
import News from "../News/news";
import Footer from "../../Components/Footer/Footer";


function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.cardBox}>
          <div className={styles.cardBoxScroll}>
            <div>

              <News></News>
         
            </div>
          </div>
        </div>

        <div className={styles.coinBox}>
          <div className={styles.coinBoxScroll}>
            <div className={styles.search}>
              <form>
                <input
                  className={styles.coinInput}
                  type="text"
                  onChange={handleChange}
                  placeholder="Search you coins"
                  id="inputID"
                />
              </form>
            </div>
            {filteredCoins.map((coin) => {
              return (
                <CoinSg
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
