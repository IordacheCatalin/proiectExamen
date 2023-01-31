// import axios from "axios";
// import React, { useState, useEffect } from "react";

// import MyButton from "../../Components/Button/Mybutton";
// import styles from "./News.module.scss";

// function News() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a351e2b7a88e4c88aed5ab3a8b4ecb70"
//       )
//       .then((response) => {
//         setNews(response.data.articles);
//         console.log(response);
//       })
//       .catch((error) => console.log(error));
//   }, []);




//   return (
//     <>
             
//             {news.map((value) => {
//               return (
//               <div className={styles.cardContainer}>
//                 <div className="card" key="{item}">
//                   <img
                    
//                     type="image"
//                     src={value.urlToImage}
//                     aria-hidden
//                     alt="Image of the article"
//                   />
//                   <div className="card-body">
//                     <h5 className={styles.cardTitle}>{value.title}</h5>
//                     <p className={styles.cardText}>{value.description}</p>
//                     <MyButton>
//                       <a href={value.url} target="_blank" rel="noopener noreferrer">Go to article</a>
//                     </MyButton>
//                   </div>
//                 </div>
//               </div>
//               );
//             })}
          
       
//     </>
//   );
// }

// export default News;
