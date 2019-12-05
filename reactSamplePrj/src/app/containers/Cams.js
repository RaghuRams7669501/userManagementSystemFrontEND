import React, { Component } from 'react';

import { Provider } from 'react-redux';

import configureStore from 'app/store';
import { renderSteps } from "../actions/actionTypes";
import HomeComponent from '../components/HomeComponent'
import data from '../data.json'
const store = configureStore({},renderSteps);
class Cams extends Component {

  render() {   
    return (
      <Provider store={store}>
        <div>
          <HomeComponent 
          getUserData={data.getUsers}/>
          </div>
        
      </Provider>
    );
  }
}



export default Cams;
