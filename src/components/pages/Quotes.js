import { useState, useEffect } from "react";
const Quotes = ({name}) => {
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
  const reducedQuotes = quotes.slice(0,5)
  console.log(quotes);
  return (
    <div className = 'quotes'>
        {reducedQuotes && reducedQuotes.map((quote)=><p key = {quote.quote_id}>{reducedQuotes.indexOf(quote)+1}.{quote.quote}<br></br></p>)}
    </div>
  );
};

export default Quotes;
