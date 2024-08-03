import React from "react";
import CustomerCard from "./CustomerCard";
const CustomerList = ({ customers, onSelect, selectedCustomerId }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          onClick={onSelect}
          isSelected={customer?.id === selectedCustomerId}
        />
      ))}
    </div>
  );
};

export default CustomerList;
