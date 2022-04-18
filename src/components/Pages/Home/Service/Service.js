import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, title, img, price } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img className="w-100" src={img} alt="" />
      <h2 className="product">{title}</h2>
      <p className="text-center">Price: {price}</p>
      <button onClick={() => navigateToServiceDetail(id)} className="button">
        Book Now
      </button>
    </div>
  );
};

export default Service;
