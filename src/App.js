import React from "react";
import QuoteCard from "./components/QuoteCard";
import axios from "axios";

function App() {
  const [quote, setQuote] = React.useState("Random");
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=1000")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard {...quote} />
      <button type="button" onClick={getQuote}>
        Random Quote
      </button>
    </div>
  );
}
export default App;
