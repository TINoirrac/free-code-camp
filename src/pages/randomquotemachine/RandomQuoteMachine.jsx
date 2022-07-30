import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "./randomquotemachine.scss";

const RandomQuoteMachine = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("fasdasfa");
  const [author, setAuthor] = useState("fadsasfa");

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((res) => {
        const randomNum = Math.floor(Math.random() * res.length);
        setQuotes(res);
        setQuote(res[randomNum].text);
        setAuthor(res[randomNum].author);
      });
  }, []);

  const handleQuote = () => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomNum].text);
    setAuthor(quotes[randomNum].author);
  };

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div className="quote-text">
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <span id="text">{quote}</span>
        </div>
        <div className="quote-author">
          <span>- </span>
          <span id="author">{author}</span>
        </div>
        <div className="buttons">
          <a
            className="button"
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            title="Tweet this quote!"
            target="_top"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <button className="button" id="new-quote" onClick={handleQuote}>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuoteMachine;
