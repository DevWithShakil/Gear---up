import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setServices] = useState({});
  console.log(service);

  useEffect(() => {
    const url = `http://localhost:5000/service/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setServices(data));


  }, [id])

  const handleDelivered = () => {

  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 text-center mx-auto" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <img className="img-fluid mx-auto text-center" src={service?.img} alt="" />
          </div>
          <div className="col-md-6 mt-2 mx-auto mb-5"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <h4>Name:{service?.title}</h4>
            <p>Price:${service?.price}</p>
            <p>
              Description: <small>{service?.des}</small>{" "}
            </p>
            <h4>Supplier Name: {service?.supplier}</h4>
            <p>
              Quantity: <small>{service?.quantity}</small>{" "}
            </p>
            <Form >
              <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder=" quantity"
                  required
                />
              </Form.Group>
              <button className="btn btn-secondary px-5 py-2">add</button>
            </Form>
            <button className="btn btn-primary px-4 mt-3 py-2">
              Delivered
            </button>
          </div>
        </div>
        <div className="text-center">
          <button className="mt-5 btn btn-link fs-5">Manage inventory</button>
        </div>
      </div>
    </div>
  );
};



export default ServiceDetail;
