import React, { useEffect, useState } from "react";
import "./Sport.css";
import getSports from "../../../apis/service/getSports";
import MediumCard from "../../Card/MediumCard/MediumCard";
import Pending from "../../Feature/Pending/Pending";

function Sport() {
    //api fetch for section=sport
    const [sportDatas,setSportDatas] = useState([]);
    const [page,setPage]=useState(1)
    const [pageSize,setPageSize]=useState(3)
    
    useEffect(() => {
        getSports(page,pageSize)
            .then((data) => {
                setSportDatas(data.response.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page,pageSize]);

if (sportDatas.length === 0) {
    return <Pending/>
;
}

return (
<div className="sport">
    <div className="sportsTitle">Sports</div>

    <div className="sportNews">
        {sportDatas.map((sportData,index)=>{
            return (
                <div key={index}>
                    <MediumCard 
                    titleMed={sportData.webTitle}
                    image={sportData.fields.thumbnail}
                    />
                </div>
                )
            })}
        {/* <MediumCard
            titleMed={sportData[0].webTitle}
            image={sportData[0].fields.thumbnail}
        />
        <MediumCard
            titleMed={sportData[1].webTitle}
            image={sportData[1].fields.thumbnail}
        />
        <MediumCard
            titleMed={sportData[2].webTitle}
            image={sportData[2].fields.thumbnail} */}
        {/* /> */}
    </div>
    </div>
);
}

export default Sport;
