import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import data from '../data.json'
import {updateUser,updateUserDetails,updateForm} from "./../actions/actionTypes";
  
class EdituserDataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    
   
    this.handleChange = this.handleChange.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  handleChange(e) {
    console.log('>>>>>>>>>>>UID>>>>>>>>.',e.target.id)
   this.props.updateForm(e.target.id, e.target.value,);
  }
  updateData(){
    
    this.props.updateUser(data.updateUser);
  }
   
    render() {
      const { json,editedId} = this.props.applicationState;
        return (
            <div>
              <h1 style={{marginLeft:"380px"}}>Edit User Details</h1>
             {json.map((input) => (
               <div>
               
                 {input.id===editedId &&
                 <div className="card" style={{marginLeft:'10rem',border:"solid",width:"100rem"}}>
    
                 <div className="card-body">
                 <div className="form-group">
               <label >UserID</label>
               <input type="text" className="form-control" id="uid"  value={input.id} 
               aria-describedby="emailHelp" />
               <label >FirstName</label>
               <input type="text" className="form-control" id="fname" 
               aria-describedby="emailHelp"    placeholder={input.firstname} onChange={this.handleChange}/>
               
               <label >EMAIL</label>
               <input type="text" className="form-control" id="email" 
               aria-describedby="emailHelp" placeholder="Enter Email" placeholder={input.email} onChange={this.handleChange}/>
                 <label >PhoneNumber</label>
               <input type="text" className="form-control" id="phone" 
               aria-describedby="emailHelp" placeholder="Enter PhoneNumber"  placeholder={input.phoneNumber} onChange={this.handleChange}/>
                
                <label>Street</label>
               <input type="text" className="form-control" id="street" 
               aria-describedby="emailHelp" placeholder="Enter street"  placeholder={input.address.street} onChange={this.handleChange}/>
                
                <label>City</label>
               <input type="text" className="form-control" id="city" 
               aria-describedby="emailHelp" placeholder="Enter city"  placeholder={input.address.city} onChange={this.handleChange}/>
               
                 <label>CompanyName</label>
               <input type="text" className="form-control" id="companyName" 
               aria-describedby="emailHelp" placeholder="Enter CompanyName"  placeholder={input.company.companyname} onChange={this.handleChange}/>
                 
             </div>
             </div>
             <button type="button" className="btn btn-primary" onClick={this.updateData}>Save</button>
               </div>

                 }
                 </div>
               
               ))}

              
            </div>
        )
    }
}

  
  function mapStateToProps(state) {
    return {
      applicationState: state.reducerTypes,
     
    };
  }
  export default connect(
    mapStateToProps,
    {updateUserDetails,updateUser,updateForm}
  )(EdituserDataComponent);
  
