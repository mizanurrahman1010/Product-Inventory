import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom'
class Addproduct extends Component {
    state = {
        code: '',
        name: '',
        qty: '',
        details: '',
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveForm = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/add-product', this.state);
        if (res.data.status === 200) 
        {
            console.log(res.data.message);
            this.setState({
                code: '',
                name: '',
                qty: '',
                details: '',

            });
        }

    }
    render() {
        return (
            <div className="container center ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Products
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end"> Back </Link>

                                </h4>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveForm}>
                                    <div className="form-group mb-3 center ">
                                        <label>Product Code</label>
                                        <input type="text" name="code" onChange={this.handleInput} value={this.state.code} className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Product Name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Quantity</label>
                                        <input type="text" name="qty" onChange={this.handleInput} value={this.state.qty} className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Details</label>
                                        <input type="text" name="details" onChange={this.handleInput} value={this.state.details} className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Product</button>

                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );



    }

}
export default Addproduct;