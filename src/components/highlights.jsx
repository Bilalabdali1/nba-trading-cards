import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/highlight";
function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Bilal's Hoops Legacy</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ Cards"
              para="Uncover the rarest gems and the coolest collectibles in the
                game."
            ></Highlight>
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Get your hands on rare cards for as little as $1."
            ></Highlight>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Highlights;
