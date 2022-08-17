import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'
import Header from '../components/Header';

function Details() {
const [blog, setBlog] = useState();
  const {id} = useParams(); 

useEffect(() => {
  async function fetchBlogs(){
    try{
      const {data} = await
       axios.get('https://624c63b1d71863d7a80997bc.mockapi.io/movies/' + id);
      setBlog(data);
    } catch (error){
alert ('Error');
    }
  }
  fetchBlogs();

}, [id])

if(!blog) {
  return 'Loading'
}


  return (


<div className = "card-wrapper">
  <div className = "card">
      <div className = "img-display">
        <div className = "img-showcase">
          <img src = {blog.imageLink} />
        </div>
      </div>

    <div className = "product-content">
      <h2 className = "product-title">{blog.title}</h2>
      <h3 className = "product-link">{blog.author}</h3>
      <div className = "product-rating">
        <span>4.7(21)</span>
      </div>

      <div className = "product-price">
        <p className = "last-price">Price: <span> {blog.price} $</span></p>
        <p className = "new-price">Year : <span> {blog.year}</span></p>
      </div>

      <div className = "product-detail">
        <h2>about this item: </h2>
        <p>{blog.subtitle}</p>
        <ul>
        <li>Binding : <span>{blog.language}</span></li>
        <li>Pages : <span>{blog.pages}</span></li>
          <li>Binding : <span>{blog.category}</span></li>
          <li>Themes: <span>{blog.themes}</span></li>
          <li>country: <span>  {blog.country}</span></li>
        </ul>
      </div>

        <button type = "button" className = "btn">
          Add to Cart </button>
        <button type = "button" className = "btn">Click on by</button>
    </div>
  </div>
</div>



  )
}

export default Details