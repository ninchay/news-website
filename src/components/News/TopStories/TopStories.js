import React,{ useState,useEffect } from "react";
import "./TopStories.css";
import getNews from "../../../apis/service/getNews";
import Pending from "../../Feature/Pending/Pending";
import Dropdown from "../../Feature/Dropdown/Dropdown";
import BiggestCard from "../../Card/BiggestCard/BiggestCard";
import MediumCard from "../../Card/MediumCard/MediumCard";
import SmallCard from "../../Card/SmallCard/SmallCard";
import TinyCard from "../../Card/TinyCard/TinyCard";
import { Link } from "react-router-dom";


function TopStories({ setOrder,order }) {
  //api fetch for section=news

  const handleSelectOrder = (selectedOrder) => {
    setOrder(selectedOrder);
  };
  const [newsDatas, setNewsData] = useState([]);
  useEffect(() => {
      getNews(order)
          .then((data) => {
              setNewsData(data.response.results);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [order]);

  console.log(order)
  
  if (newsDatas.length === 0) {
      return <Pending/>;
  }
return (
<>
<div className="top">
  <div className="topStories">Top stories</div>
  <Dropdown onSelectOrder={handleSelectOrder}/>
</div>
        <div className="topStoriesCombined">
          {newsDatas[0] 
          ?
          <Link to="/article" state={{data:newsDatas[0]}}>
          <BiggestCard 
          title={newsDatas[0].webTitle} 
          body={newsDatas[0].fields.bodyText}
          image={newsDatas[0].fields.thumbnail}
          />
          </Link>
          :
          null
          }
        <div className="rowTwo">
          <Link to="/article" state={{data:newsDatas[1]}}>
            <SmallCard 
            titleSmall={newsDatas[1].webTitle} 
            />
          </Link>
          <Link to="/article" state={{data:newsDatas[2]}}>
            <TinyCard titleTiny={newsDatas[2].webTitle} />
          </Link>
        </div>
        <div className="rowThree">
          <Link to="/article" state={{data:newsDatas[3]}}>
            <SmallCard titleSmall={newsDatas[3].webTitle} />
          </Link>

          <Link to="/article" state={{data:newsDatas[4]}}>
            <TinyCard titleTiny={newsDatas[4].webTitle} />
          </Link>
        </div>
      </div>

      <div className="mediumCardContainer">
        {newsDatas.map((newsData,index)=>{
            if (index>=5 && index<=7){
              return (
                <Link to="/article" state={{data:newsDatas[index]}}>
                  <MediumCard 
                  titleMed={newsData.webTitle}
                  bodyMed={newsData.fields.bodyText}
                  image={newsData.fields.thumbnail}
                  />
                </Link>
              )
            }
            return null
        })}
      </div>
    </>
  );
}

export default TopStories;
