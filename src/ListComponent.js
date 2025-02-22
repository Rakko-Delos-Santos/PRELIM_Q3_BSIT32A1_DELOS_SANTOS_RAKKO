import React from "react";

const ListComponent = ({ items }) => {
  return (
    <div>
      <h3>Fullname:</h3>
      <ul>
        {items.map((item, index) => (
          <ul key={index}>{item}</ul>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
