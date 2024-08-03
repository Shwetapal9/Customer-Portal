import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomerDetails = ({ customer }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=9"
      );
      setPhotos(response.data);
    };
    fetchPhotos();

    const interval = setInterval(fetchPhotos, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-details">
      <h2 style={{ textAlign: "center" }}>
        Customer - {customer.id} details here
      </h2>
      <p>Name : {customer.name}</p>
      <p>Title : {customer.title}</p>
      <p>Address : {customer.address}</p>
      <div className="photo-grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
