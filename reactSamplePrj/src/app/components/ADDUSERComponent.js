

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import data from '../data.json'
import {
  updateForm,saveData
  
} from "../actions/actionTypes";


class ADDUSERComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleUpdate = this.handleUpdate.bind(this);
    this.saveData = this.saveData.bind(this);
    
  }
  handleUpdate(e) {
    console.log('>>>>>>>>>>>UID>>>>>>>>.',e.target.id)
    this.props.updateForm(e.target.id, e.target.value);
  }
  saveData(){
    
    this.props.saveData(data.addUser);
  }
  render() {
    
    
  
    return (
      <div>
      <h1>Add User</h1>
   
      <div className="card" style={{marginLeft:'10rem',border:"solid",width:"100rem"}}>
      <div className="card-body">
      <div className="form-group">
    
      
    <label >UserID</label>
    <input type="text" className="form-control" id="uid" onChange={this.handleUpdate}
    aria-describedby="emailHelp" placeholder="Enter UID"/>
    <label >FirstName</label>
    <input type="text" className="form-control" id="fname" 
    aria-describedby="emailHelp" placeholder="Enter FirstName" onChange={this.handleUpdate}/>
    <label >Username</label>
    <input type="text" className="form-control" id="uname" 
    aria-describedby="emailHelp" placeholder="Enter Username" onChange={this.handleUpdate}/>
    <label >EMAIL</label>
    <input type="text" className="form-control" id="email" 
    aria-describedby="emailHelp" placeholder="Enter Email" onChange={this.handleUpdate}/>
      <label >PhoneNumber</label>
    <input type="text" className="form-control" id="phone" 
    aria-describedby="emailHelp" placeholder="Enter PhoneNumber" onChange={this.handleUpdate}/>
     <label>Website</label>
    <input type="text" className="form-control" id="webSite" 
    aria-describedby="emailHelp" placeholder="Enter Website" onChange={this.handleUpdate}/>
    </div>
    </div>
     <label>Street</label>
    <input type="text" className="form-control" id="street" 
    aria-describedby="emailHelp" placeholder="Enter street" onChange={this.handleUpdate}/>
      <label>Suite</label>
    <input type="text" className="form-control" id="suite" 
    aria-describedby="emailHelp" placeholder="Enter suite" onChange={this.handleUpdate}/>
     <label>City</label>
    <input type="text" className="form-control" id="city" 
    aria-describedby="emailHelp" placeholder="Enter city" onChange={this.handleUpdate}/>
    <label>ZipCode</label>
    <input type="text" className="form-control" id="zipCode" 
    aria-describedby="emailHelp" placeholder="Enter zipCode" onChange={this.handleUpdate}/>
      <label>Latitude</label>
    <input type="text" className="form-control" id="latitude" 
    aria-describedby="emailHelp" placeholder="Enter Latitude" onChange={this.handleUpdate}/>
    <label>longitude</label>
    <input type="text" className="form-control" id="longitude" 
    aria-describedby="emailHelp" placeholder="Enter Longitude" onChange={this.handleUpdate}/>
      <label>CompanyName</label>
    <input type="text" className="form-control" id="companyName" 
    aria-describedby="emailHelp" placeholder="Enter CompanyName" onChange={this.handleUpdate}/>
      <label>CatchPhrase</label>
    <input type="text" className="form-control" id="catchPhrase" 
    aria-describedby="emailHelp" placeholder="Enter CatchPhrase" onChange={this.handleUpdate}/>
     <label>BS</label>
    <input type="text" className="form-control" id="bs" 
    aria-describedby="emailHelp" placeholder="Enter BS" onChange={this.handleUpdate}/>
  
  <button type="button" className="btn btn-primary" onClick={this.saveData}>Save</button>
    </div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    applicationState: state.reducerTypes
  };
}
export default connect(
  mapStateToProps,
  { updateForm,saveData }
)(ADDUSERComponent);