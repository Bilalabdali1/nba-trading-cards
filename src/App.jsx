import "./App.css";
import Nav from "./components/nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Footer from "./components/Footer";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import TopScroll from "./components/ui/TopScroll"
import { useEffect, useState } from "react";
import { books } from "./data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faArrowLeft,
);
function App() {
  
    const [cart,setCart]=useState([])
    function changeQuanity(book,quantity){
      setCart(cart.map(item=>{
  if(book.id===item.id){
    return{
      ...item,
      quantity:+quantity,
    }
  }
  else{
    return{
      ...item
    }
  }
      }))
            console.log(book,quantity)

      console.log(book.quantity)
    }
    function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }
   function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
        console.log(counter)

    return counter;
  }
 
  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }
function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }


  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }
useEffect(()=>{
  console.log(cart)
},[cart])
  return (
    <Router>
    <TopScroll/>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}></Nav>
        <Routes>
          <Route path="/" Component={Home}></Route>
        <Route path="/books" Component={() => <Books books={books} />} />
        <Route path="/books/:id" Component={() => (<BookInfo books={books} addItemToCart={addItemToCart} key={books.id}/>)}></Route>
        <Route path="/cart" Component={() => <Cart cart={cart}
              updateCart={updateCart}
              removeItem={removeItem}
              totals={calcPrices()}/>} />

        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
