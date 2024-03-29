import React from "react";
import { books } from "../data";
import Book from "./ui/book";
function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
           <h2> Discounted <span className="purple">Cards</span></h2> 
          </div>
          <div className="books">
          {books
          .filter(book=>book.salePrice>0)
          .slice(0,8)
          .map(book=><Book book={book} key={book.id}></Book>)}
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discounted;
