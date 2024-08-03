import React from "react";

const CustomerCard = ({ customer, onClick, isSelected }) => {
  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(customer.id)}
    >
      <h3>{customer.name}</h3>
      <p>{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
