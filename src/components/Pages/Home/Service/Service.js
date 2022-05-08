import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, title, img, price, des, quantity, supplier } = service;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <CardGroup>
  <Card className="ms-auto">
    <Card.Img variant="top"src={img} />
    <Card.Body className="">
      <Card.Title className="services-title">{title}</Card.Title>
      <Card.Text>
      <p className=""> {des}</p>
      </Card.Text>
      <p className="">Price: {price} </p> 
      <p className=""> Amount: {quantity} </p>
      <p className=""> Supplier: {supplier} </p>
    </Card.Body>
     <button onClick={() => navigateToServiceDetail(_id)} className="button">
        Manage
      </button>
  </Card>
</CardGroup>
  );

};


export default Service;
