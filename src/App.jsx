import React, { useState } from "react";
import { customers } from "./data/customers";
import CustomerList from "./components/CustomerList.jsx";
import CustomerDetails from "./components/CustomerDetails";

import "./App.css";
const App = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(1);

  const handleSelectCustomer = (id) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer = customers.find(
    (customer) => customer.id === selectedCustomerId
  );

  return (
    <>
      <h1 style={{ textAlign: "center", backgroundColor: "grey", margin: 0 }}>
        Customer Details Portal
      </h1>
      <div className="app">
        <CustomerList
          customers={customers}
          onSelect={handleSelectCustomer}
          selectedCustomerId={selectedCustomerId}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </>
  );
};

export default App;
