import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect, useState,useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/book";
import CartAdded from "../components/ui/CartAdded";
 import BestCards from "../components/BestCards";
function BookInfo({ books,addItemToCart,added,cart }) {
     const {id}=useParams();
    const book=books.find(book=>book.id==id)
    function bookExistinCart(){
  const dupe=cart.find((item) => item.id === book.id);
    console.log(dupe)
  return dupe
 
}
 bookExistinCart()
  return (
    
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Cards</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}
                </h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    {book.summary1}
                  </p>
                  <p className="book__summary--para">
                  {book.summary2}
                  </p>
                </div>

                {
                   
                  bookExistinCart() ? <button className="btn"><Link to="/cart" className="btn__link">Checkout</Link></button> :  <button className="btn" onClick={()=>{addItemToCart(book);}}>
                  Add to Cart
                </button>
                }
                {}
               
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Cards</h2>
              </div>
            <div className="books">
            <BestCards  id={id} books={books}></BestCards>
           
            </div>
            
             
           
          </div>
        </div>
      </main>
    </div>
  );

}

export default BookInfo;
