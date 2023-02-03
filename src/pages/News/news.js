import React, { useState, useEffect } from "react";

import MyButton from "../../Components/Button/Mybutton";
import styles from "./News.module.scss";

function News() {
  let [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a351e2b7a88e4c88aed5ab3a8b4ecb70")
    .then(response => response.json())
       
    .then(data => {
        setNews(data.articles);
        console.log(data.articles);
    })

    .catch((error) => console.log(error));
  },[])




  return (
    <>
             
            {news.map((value, index) => {
              return (
              <div className={styles.cardContainer}  key={index}>
                <div className="card">
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
          
       
    </>
  );
}

export default News;
