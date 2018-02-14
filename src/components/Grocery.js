import React from 'react';

const Grocery = props => {
  let groceryName = `${props.name} ${props.selectedText}`;
  return(
      <li onClick={props.handleClick}>{groceryName}</li>
  )
}

export default Grocery;
