import "./App.css";

import Nav from "./components/nav/Nav";
import Search from "./components/nav/Search";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Results from "./components/pages/Results";

import Footer from "./components/Footer/Footer";
function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters${
          query ? `?name=${query}` : ""
        }`
      );
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
      
    };

    getData();
  }, [query]);

  const paginateNext = () => {
    if (currentPage < items.length / postsPerPage) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const paginateBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className = 'container'>
      <div className="App">
        <div className="side">
          <Header></Header>
          <Search setQuery={setQuery}></Search>
          <Nav
            currentPage={currentPage}
            paginateNext={paginateNext}
            paginateBack={paginateBack}
          ></Nav>
        </div>
        <Results items={currentPost} />
        </div>
        {!isLoading ? <Footer /> : null}
    </div>
  );
}

export default App;
