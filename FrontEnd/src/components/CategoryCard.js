import React from "react";

export default function CategoryCard(props) {    
  // const {  click } = props;     
  return (
    <li onClick={() => click(props.name)}>
      <p>{props.name}</p>
    </li>
  );
}
