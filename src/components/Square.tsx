import React from 'react';
import "./Square.css";

interface SquarProps {
  id: string;
  bgColor: string;
  clicked: boolean;
  found: boolean;
  clickFn:(id:string)=>void
}

const Square: React.FC<SquarProps> = ({id, bgColor, clicked, found, clickFn}) => {
  return (
    <div>
      <article 
      style={{background: bgColor}}
      className={clicked ? "clicked" : ""}
      id={id}
      onClick={()=>clickFn(id)}
      >

        {Number(id.slice(1)) + 1}
      </article>
    </div>
  )
}

export default Square
