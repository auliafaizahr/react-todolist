import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) =>
        <li key={index} >
          {item} <span className=""></span>
        </li>)
    }
  </ul>
)

export default List;