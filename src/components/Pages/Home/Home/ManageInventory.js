import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [services, setService] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch("https://morning-coast-63993.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const handelUserDelete = id => {
        const procced = window.confirm("Are you sure?")
        if (procced) {
            axios.delete(`https://morning-coast-63993.herokuapp.com/service/${id}`)
                .then(response => {
                    console.log(response);
                    if (response.data.deletedCount > 0) {
                        const remaining = services.filter(service => service._id !== id)
                        setService(remaining)
                    }
                })
        }

    }
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
                                            <button onClick={() => handelUserDelete(service._id)} className='btn btn-danger'>Delete</button>
                                        </td>

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div>
                    <div className="text-center mt-5">
                        <button onClick={() => navigate('/additem')} className="inventory-btn">Add-item</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageInventory;