import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {
    const handleAddItem = (event) => {
        event.preventDefault();
        const bikecollection = {
            title: event.target.product.value,
            price: event.target.price.value,
            img: event.target.imgUrl.value,
            des: event.target.desc.value,
            supplier: event.target.supplierName.value,
            quantity: event.target.quantity.value,
            email: event.target.email.value,
        };
        // axiosPrivate.post("https://secure-reaches-83838.herokuapp.com/dress", dressCollection)
        //     .then(response => {
        //         toast.success("product upload successfully")
        //         event.target.reset()
        //     })
    };

    return (
        <div>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-6 mx-auto form-group">
                        <h3 className="mb-4">Add Your Product</h3>
                        <Form onSubmit={handleAddItem} className="">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name="product" type="text" placeholder="Product Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name="email" type="email" placeholder="Your email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name="price" type="number" placeholder="Price" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control name="imgUrl" type="text" placeholder="img-url" required />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Control name="desc" type="text" placeholder="Description" required />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Control name="supplierName" type="text" placeholder="supplierName" required />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Control name="quantity" type="text" placeholder="Quantity" required />
                            </Form.Group>
                            <div className="text-center">
                                <Button className="inventory-btn" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default AddItem;