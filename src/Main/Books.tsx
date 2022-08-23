import React from 'react';
import {Link} from 'react-router-dom';
import {addItem, selectCartItemById} from '../redux/slices/cartSlice'
import {useDispatch, useSelector} from 'react-redux';
import {CartItem} from '../components/cart/types'; 

type BooksBlockProps = {
  imageLink: string;
  title: string;
  author: string;
  language: string; 
  country: string; 
  themes: string;
  subtitle: string; 
  year: number; 
  category: string; 
  pages: number; 
  price: number;
id: string;
}

export const Books: React.FC<BooksBlockProps> = ({
  imageLink, title, author, id, price
  }) => {
const dispatch = useDispatch();
const cartItem = useSelector(selectCartItemById(id));
const addedCount = cartItem ? cartItem.count : 0;

const onClickAdd = () => {
  const item: CartItem = {
    imageLink, title, author, id, price,
    count: 0,
  };
  dispatch(addItem(item));
};

  return (
    <div className="blogItem-wrap" key={id}>
      <Link to={`/Details/${id}`}>
        <img className="blogItem-cover" src={imageLink} alt="cover" />

        <h1>{title}</h1>

        {/* <p className="blogItem-desc">{subtitle}</p> */}
        <footer>
          <div className="blogItem-author">
            <img className="book__image" src={imageLink} alt="avatar" />

            <h2> {author}</h2>
            <div>
              <h6>{title}</h6>
            </div>
          </div>
       
        </footer>
      </Link>
      <button onClick={onClickAdd}>add </button>
          {addedCount > 0 && <i>{addedCount}</i>}
    </div>
  );
}

export default Books;
