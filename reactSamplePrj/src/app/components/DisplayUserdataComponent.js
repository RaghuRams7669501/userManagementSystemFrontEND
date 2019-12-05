import { PropTypes } from 'prop-types';
import React, { Component } from "react";
import { connect } from "react-redux";
import data from '../data.json'
import {
     editUser,
    deleteUser,
  
  } from "./../actions/actionTypes";
  
class DisplayUserdataComponent extends Component {
    handleDelete(userid){
        console.log('>>>>>>>>>.USERID>>>>>>>',userid.input.id)
        const id=userid.input.id;
        this.props.deleteUser(data.deleteUser+id);
    }
    editUser(userid){
      console.log('>>>>>>>>>.USERID>>>>>>>',userid.input.id)
      const id=userid.input.id;
      this.props.editUser(id);
  }
    render() {
        const {json} = this.props;
        return (
            <div>
               
<table className="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Street</th>
      <th scope="col">City</th>
      <th scope="col">CompanyName</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {json.map((input) => (
  <tbody>
    <tr>
     
      <td>{input.id}</td>
      <td>{input.firstname}</td>
      <td>{input.email}</td>
      <td>{input.phoneNumber}</td>
      <td>{input.address.street}</td>
      <td>{input.address.city}</td>
      <td>{input.company.companyname}</td>
      <td>
     <button className="btn btn-primary" onClick={()=> this.editUser({input})}>
     <i className="fa fa-edit">Edit User</i></button>
                        <button 
                        className="btn btn-danger"
                        onClick={() => { if (window.confirm('Are you sure to delete this user?')) 
                        this.handleDelete({input})}}>
                        <i className="fa fa-trash">Delete User</i></button>
                    </td>
      
    </tr>
    
  </tbody>
    ))}
</table>
              
            </div>
        )
    }
}
DisplayUserdataComponent.propTypes = {
    json:PropTypes.array,
   


  };
  
  function mapStateToProps(state) {
    return {
      applicationState: state.reducerTypes
    };
  }
  export default connect(
    mapStateToProps,
    { deleteUser,editUser }
  )(DisplayUserdataComponent);
  
