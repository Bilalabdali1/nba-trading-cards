import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "./ui/book";
import {books} from "../data"
import Assets from "../assets/westbrookCard.jpg"
function Features() {
console.log(books)

  return (
     <section id="features">
     
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Cards</span>
          </h2>
          <div className="books">
          {books
          .filter((book)=>book.rating===5)
          .slice(0,4)
          .map((book)=>(
          <Book book={book}key={book.id}/>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
