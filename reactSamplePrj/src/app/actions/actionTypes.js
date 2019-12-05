import data from "app/data.json";
import * as restClient from "../api/restClient";
import {
  REQUEST_SUCCESS,
  DELETE_USER,
  DISPLAY_ADD_USER,
  UPDATE_FORM,
  SAVE_DATA,
  EDIT_DATA,
  UPDATE_USER,
  UPDATE_DETAILS_FORM,
} from "../constants/appConstants";

export function editUser(id) {
  return dispatch => {
    console.log(">>>>>>>>>>ID>>>>>", id);
    dispatch(dispatchEditUser(id));
  };
}
function dispatchEditUser(id) {
  console.log(">>>>>>>>>>dispatchEditUser>>>>>", id);
  return {
    type: EDIT_DATA,
    id
  };
}
export function renderSteps(resourcePath) {
  console.log(">>>>>>.RS>>>>>>>", resourcePath);
  return dispatch => {
    return restClient.get(resourcePath).then(json => {
      console.log(">>>>>>>>>>>>AUTH_SUCCESS_CODE>>>>>");
      dispatch(receiveSuccess(json));
    });
  };
}

function receiveSuccess(json) {
  console.log("....receiveSuccess.....");
  return {
    type: REQUEST_SUCCESS,
    json
  };
}
export function deleteUser(resourcePath) {
  console.log(">>>>>>deleteUser>ACtionTypes>ssss>>", resourcePath);

  return (dispatch, getState) => {
    return restClient.postData(resourcePath).then(response => {
      console.log(">>>>>>>>>>>DEEREsponse>>>>>", response);
      dispatch(processDeletedData(response));
    });
  };
}

function processDeletedData(response) {
  console.log("....deleteUser..aaaaaaaaaaaaa...");
  return {
    type: DELETE_USER,
    response
  };
}
export function displayAddUserScreen() {
  return (dispatch, getState) => {
    dispatch(displayAddUser());
  };
}
function displayAddUser() {
  console.log(">>>>displayAddUser>>>ssss>>>");
  return {
    type: DISPLAY_ADD_USER
  };
}
export function updateUserDetails(id,value) {
  return (dispatch, getState) => {
    
    dispatch(updateUserDetailsItem(id, value,getState().reducerTypes.editedId));
  };
}
function updateUserDetailsItem(id, value,editedId) {
  return {
    type: UPDATE_DETAILS_FORM,
    id,
    value,
    editedId
    
  };
}
export function updateForm(id, value) {
  return dispatch => {
    dispatch(requestUpdateItem(id, value));
  };
}
function requestUpdateItem(id, value) {
  return {
    type: UPDATE_FORM,
    id,
    value
  };
}
export function saveData(resourcePath) {
  return (dispatch, getState) => {
    return restClient
      .saveData(
        resourcePath,
        JSON.stringify(getState().reducerTypes.userObject)
      )
      .then(response => {
        dispatch(saveFormData(response));
      });
  };
}
function saveFormData(response) {
  return {
    type: SAVE_DATA,
    response
  };
}
export function updateUser(resourcePath) {
  return (dispatch, getState) => {
    return restClient
      .saveData(
        resourcePath,
        JSON.stringify(getState().reducerTypes.userObject)
      )
      .then(response => {
        dispatch(saveAfterUpdate(response));
      });
  };
}

function saveAfterUpdate(response) {
  return {
    type: UPDATE_USER,
    response
  };
}
