import React from 'react';
import {Link} from 'react-router-dom';

function Books({
  subtitle,
  title,
  price,
  imageLink,
  name,
  id, 
 author
}) {


  return (
    <div className="blogItem-wrap" key ={id}>
<Link to={`/Details/${id}`}>
<img className="blogItem-cover" src={imageLink} alt="cover" />

<h1>{title}</h1>

<p className="blogItem-desc">{subtitle}</p>
<footer>
  <div className="blogItem-author">
  <img className='book__image' src={imageLink} alt="avatar" />

    <h2> {author}</h2>
    <div>
      <h6>{name}</h6>
    </div>
  </div>
</footer>


</Link>
</div>
  );
}

export default Books;
