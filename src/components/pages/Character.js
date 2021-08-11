


import Quotes from './Quotes'
import "./Character.css";
const Character = ({ item }) => {
  
  return (

    
    <div className="card">
      <div>
        <img src={item.img} height="400px" width="auto"></img>
      </div>
      <div className="details">
        <h1>{item.name}</h1>
        <p>
          D.O.B :<span>{item.birthday}</span>
          {""}
        </p>
        <p>
          Status: <span>{item.status}</span>
        </p>
        <p>
          {""}
          Nickname:<span>{item.nickname}</span>{" "}
        </p>
        <p>
          Occupation :{""}
          {item.occupation.map((item) => (
            <span key = {item}>{item},</span>
          ))}
        </p>
        <p>
          appearance in seasons :{" "}
          <span>
            {item.appearance.map((e) => (
              <span key = {e}>{e},</span>
            ))}
          </span>
        </p>
        <p>
          portrayed by: <span>{item.portrayed}</span>{" "}
        </p>
        <div className="line"></div>
        <h3>Quotes by {item.name}</h3>
        <Quotes name={item.name} />
      </div>
    </div>

  );
};

export default Character;
