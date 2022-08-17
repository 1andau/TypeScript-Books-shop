import React,  {useEffect, useState} from 'react';
import Books from './Books';
import Header from '../components/Header';
import LoadingBlock from '../pages/LoadingBlock';
import axios from 'axios';

const Home = () => {

  const [items, setItems] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://624c63b1d71863d7a80997bc.mockapi.io/movies/')
    .then((res) => {
      setItems(res.data); 
      setLoading(false); 
      window.scrollTo(0, 0);
    })
  }, [])
  
  return (
    <>
      <Header />

      <div className="container">
        <div className="blogList-wrap">
          {setLoading
            ? items.map((obj) => (
                  <Books key={obj.id} {...obj} />
            
              ))
            : Array(10)
                .fill(0)
                .map((_, index) => <LoadingBlock key={index} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
