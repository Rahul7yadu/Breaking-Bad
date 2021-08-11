
import './Nav.css'
const Nav = ({currentPage,paginateNext,paginateBack})=>{

return (
  <div className="nav">
    <button onClick={paginateBack} className="navButton">
      <i className="fa fa-arrow-left fa-2x"></i>
    </button>
    <div className="page-number">{currentPage}</div>
    <button onClick={paginateNext} className="navButton">
      <i className="fa fa-arrow-right fa-2x"></i>{" "}
    </button>
  </div>
);

}

export default Nav;
