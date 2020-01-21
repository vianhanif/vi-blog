import React from 'react';
import "./style.scss";

const List = ({nodes}) => {
  return (
    <div className="container-fluid">
      <ul className="list-group list-group-flush">
        {nodes.map((node, i) => 
          <li className="list-group-item" key={i}>
            {node}
          </li>
        )}
      </ul>      
    </div>
  );
}

export default List;
