import React, { useEffect, useState } from 'react';

const ManageInventory = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-center mt-4">Manage inventory</h3>
                <div className="table-responsive">
                    <table class="table  align-middle table-striped table-hover">
                        <thead>
                            <tr className="align-bottom">
                                <th scope="col">Supplier Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">quantity</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map(service => {
                                    return <tr>
                                        <th scope="row">{service?.supplier}</th>
                                        <td>{service.title}</td>
                                        <td>${service.price}</td>
                                        <td>{service.quantity}</td>
                                        <td>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <div className="text-center mt-5">
                        <button className="inventory-btn">Add-item</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageInventory;