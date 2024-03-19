import React from 'react'
import cardInfographic from "../assets/infographic (1).png";

function Landing() {
 return ( 
 
 
  <section id="landing">
 <header>
 <div className="header__container">
 <div className="header__description">
 <h1>Collect the Icons of the Court One Card at a Time</h1>
  <h2>Score Rare Finds & Iconic Moments with <span className="purple">Bilal's Hoops Legacy</span> </h2>
<a href="#recent"> 
 <button className="btn">Browse Cards</button>
 </a>
<figure className="header__img--wrapper">

<img src={cardInfographic} alt="" />

</figure>
 
 </div>
 </div>
 </header>
 </section>
)
}







export default Landing;