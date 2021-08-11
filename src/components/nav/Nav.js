import { Button } from "@material-ui/core"
import './Nav.css'
const Nav = ({currentPage,paginateNext,paginateBack})=>{

return (
  <div className="nav">
    <button onClick={paginateBack}>
      <i className="fa fa-arrow-left fa-2x"></i> 
    </button>
    <div className="page-number">{currentPage}</div>
    <button onClick={paginateNext}>
      <i className="fa fa-arrow-right fa-2x"></i> {" "}
    </button>
  </div>
);

}

export default Nav;
