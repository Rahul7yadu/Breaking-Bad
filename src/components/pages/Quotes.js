import { useState, useEffect } from "react";
const Quotes = ({ name }) => {
  const [quotes, setQoutes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/quote?author=${name}`
      ).then((res) => res.json());
      //   console.log(response)
      const data = response;
      setQoutes(data);
    };
    getData();
  }, [name]);

  console.log(quotes);
  return (
    <div className="quotes">
      {quotes.length > 0
        ? quotes.map((quote) => (
            <p key={quote.quote_id}>
              {quotes.indexOf(quote) + 1}.{quote.quote} <br></br>
            </p>
          ))
        : "No Qoutes available"}
    </div>
  );
};

export default Quotes;
