import "./App.css";

import Nav from "./components/nav/Nav";
import Search from "./components/nav/Search";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Results from "./components/pages/Results";
import Footer from './components/Footer/Footer'
function App() {
  // const [posts , setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  console.log(currentPage);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters${query ? `?name=${query}` : ""}`
      );
      const data = await response.json();
      console.log(data);
      setItems(data);
    };
    getData();
  }, [query, currentPage]);

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
    <>
    <div className = 'App'>
        <div className="side">
          <Header></Header>
          <Search setQuery={setQuery} className="item1"></Search>
          <Nav
            currentPage={currentPage}
            paginateNext={paginateNext}
            paginateBack={paginateBack}
          ></Nav>
        </div>
        <Results items={currentPost}></Results>
        </div>
      <Footer></Footer>
    </>
  );
}

export default App;
