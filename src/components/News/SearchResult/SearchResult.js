import React,{useEffect, useState,useRef} from 'react'
import './SearchResult.css'
import getSearch from '../../../apis/service/getSearch';
import MediumCard from '../../Card/MediumCard/MediumCard'
import { Link } from 'react-router-dom';
import Pending from '../../Feature/Pending/Pending';
import ReachScrolling from '../../Feature/ReachScrolling/ReachScrolling';

function SearchResult({typeText}) {
  const [searchDatas, setSearchDatas] = useState([]);
  const [pageSearch,setPageSearch]=useState(1);
  const [currentSearch, setCurrentSearch]=useState(typeText);
  const loading=useRef(false)

  useEffect(() => {
    if (typeText.length > 0) {
    const timeOutId = setTimeout(() => 
    {if(typeText===currentSearch){
      setCurrentSearch(typeText);
      getSearchData(typeText,pageSearch);
    }
    else {
      setSearchDatas([]);
      setPageSearch(1);
      getSearchData(typeText,1) //delete old data
      setCurrentSearch("")
    }
    } 
    , 500);
    return () => clearTimeout(timeOutId);
    }
  }, [typeText]);

  function getSearchData(searchText,page){
    if(!loading.current){
      loading.current=true
      getSearch(searchText,page)
      .then(data => {
        setSearchDatas(prevData=>[...prevData,...data.response.results]);
        setPageSearch(page+1)
      })
      .catch(error => {
        console.error(error);
      }).finally(()=>{loading.current=false});
    }
  }
  console.log(searchDatas)

  useEffect(() => {
    const handleScroll = () => {
        const offsetHeight = document.documentElement.offsetHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 5;
        if(hasReachedBottom)  {
          getSearchData(typeText,pageSearch)
        }
      };

    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
    }, [typeText,pageSearch]);

  return (
  <div>
    <h1 className='header'>Search results</h1>
    <div className='bigSearch'>
      {searchDatas.map((searchData,index)=>{
        return(
          <div key={index} className='searchResultNews'>
            <Link to="/article" state={{data:searchData}}>
            <MediumCard
            titleMed={searchData.webTitle}
            image={searchData?.fields?.thumbnail}
            />
            </Link>
          </div>
        )
      })}
    </div>
  </div>

  )
}

export default SearchResult