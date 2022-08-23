import React,  {useEffect, useState} from 'react';
import Books from './Books';
import Header from '../components/Header';
import axios from 'axios';

const Home: React.FC = () => {
  const [items, setItems] = useState([]); 

  useEffect(() => {
    axios.get('https://624c63b1d71863d7a80997bc.mockapi.io/movies/')
    .then((res) => {
      setItems(res.data); 
      window.scrollTo(0, 0);
    })
  }, [])
  
  return ( 
    <>
      <Header />


      <div className="container">
        <div className="blogList-wrap">
          {
            items.map((obj:any) => (
                  <Books key={obj.id} {...obj} />
            
              ))

                }
        </div>
      </div>
    </>
  );
};

export default Home;
