import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import DevTools from "../containers/DevTools.js";
import DisplayUserdataComponent from './DisplayUserdataComponent';
import ADDUSERComponent from './ADDUSERComponent';
import EdituserDataComponent from "./EdituserDataComponent.js";
import { 
  renderSteps,
  displayAddUserScreen,
} from "./../actions/actionTypes";


class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.addUser = this.addUser.bind(this);

  }
 
  componentDidMount() {   
    this.props.renderSteps(this.props.getUserData);  

  }
  addUser(){
    
    this.props.displayAddUserScreen();
  }
  render() {
    const { json,successfullDeleteMsg,deleleCompleted,displayAddUser,dispalyEditUser } = this.props.applicationState;
  
    return (
      <div>
        
        {<DevTools />}
        {dispalyEditUser &&
        <div>
          <EdituserDataComponent/>
          </div>

        }
        {displayAddUser && !dispalyEditUser &&
      <div>
        <div className="container">
  <div className="row justify-content-md-center">
    <div className="col col-lg-2">
    <ADDUSERComponent/>
    </div>
    </div>
    </div>
     </div>}
      {!displayAddUser &&
      <div>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotia</a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
      </nav>
      
    
      {deleleCompleted &&
      <div className="alert alert-success">
     {successfullDeleteMsg}
     </div>}
    
     <button className="btn btn-success" style={{float:"right"}} onClick={this.addUser}>
      <i className="fa fa-user-plus"></i> Add User
                                    </button>
                                    
     {json !== undefined && (
          <div>
             <DisplayUserdataComponent  json={json}/>
           
            <br/>
            

            <br />
          </div>
        )}
   
    
  </div>
     }
     </div>
    );
  }
}
HomeComponent.propTypes = {
  applicationState: PropTypes.object,
  getUserData: PropTypes.string,
  displayAddUserScreen:PropTypes.func
};

function mapStateToProps(state) {
  return {
    applicationState: state.reducerTypes,
   
  };
}

export default connect(
  mapStateToProps,
  { renderSteps,displayAddUserScreen, }
)(HomeComponent);
