import React from 'react'
import './Results.css'
import Character from './Character'
const Results = ({items}) => {
console.log(items);
    return (
        <div className = "results">
          { items.map((item)=><Character key = {item.char_id}item = {item}></Character>)} 
        </div>
    )
}

export default Results
