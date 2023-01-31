import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinSg from "../Coin/coinSg";
import styles from "./home.module.scss";
// import News from "../News/news";
import Footer from "../../Components/Footer/Footer";
import MyButton from "../../Components/Button/Mybutton";

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

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a351e2b7a88e4c88aed5ab3a8b4ecb70"
      )
      .then((response) => {
        setNews(response.data.articles);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
    
      <div className={styles.container}>
        <div className={styles.cardBox}>
          <div className={styles.cardBoxScroll}>
            <div>
          {news.map((value) => {
              return (
              <div className={styles.cardContainer}>
                <div className="card" key="{item}">
                  <img
                    
                    type="image"
                    src={value.urlToImage}
                    aria-hidden
                    alt="Image of the article"
                  />
                  <div className="card-body">
                    <h5 className={styles.cardTitle}>{value.title}</h5>
                    <p className={styles.cardText}>{value.description}</p>
                    <MyButton>
                      <a href={value.url} target="_blank" rel="noopener noreferrer">Go to article</a>
                    </MyButton>
                  </div>
                </div>
              </div>
              );
            })}
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
