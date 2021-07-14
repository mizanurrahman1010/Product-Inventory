import axios from "axios"
import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Form extends Component 
{
    state = {
        forms:[],
        loading:true,
    }
    async componentDidMount(){
        const res = await axios.get('http://localhost:8000/api/forms');
        console.log(res);
        if(res.data.status === 200)
        {
            this.setState({
                forms:res.data.forms,
                loading:false,
            });

        }
    }

    render() {
        var form_HTMLTABLE = "";
        if(this.state.loading)
        {
            form_HTMLTABLE = <tr><td colSpan="7"><h2>Loading..</h2></td></tr>

        }
        else
        {
            form_HTMLTABLE =
            this.state.forms.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.details}</td>
                        <td>
                            <Link to={'edit-form/${item.id}'} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-success btn-sm">Delete</button>
                            </td>
                        
                        </tr>
                )
            }
            );

        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Products
                                    <Link to={'add-product'} className="btn btn-primary btn-sm float-end"> Add Product</Link>

                                </h4>

                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Product Code</th>
                                            <th>Product Name</th>
                                            <th>Product Quantity</th>
                                            <th>Product Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {form_HTMLTABLE}
                                        </tbody>
                                </table>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );



    }

}
export default Form;