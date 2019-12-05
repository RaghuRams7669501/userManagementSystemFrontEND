import {

  REQUEST_SUCCESS,
  DELETE_USER,
  DISPLAY_ADD_USER,
  SAVE_DATA,
  UPDATE_FORM,
  UPDATE_DETAILS_FORM,
  updatedfname,
  USER_ID,
  FIRST_NAME,
  USER_NAME,
  EMAIL,
  PHONE,
  WEB_SITE,
  STREET,
  CITY,
  SUITE,
  ZIP_CODE,
  LATITUDE,
  LONGITUDE,
  COMPANY_NAME,
  CATCH_PHRASE,
  BS,
  EDIT_DATA,
  UPDATE_USER
} from "../constants/appConstants";

const initialState = {
  editedId: 100,
  json: [],
  successfullDeleteMsg: "",
  deleleCompleted: false,
  addUser: false,
  displayAddUser: false,
  updateUserObject: {
   id:10,
    firstname: "",
    username: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    companyName: ""
  },
  userObject: {
    id: 999,
    firstname: "",
    username: "",
    email: "",
    phoneNumber: "",
    webSite: "",
    address: {
      street: "",
      city: "",
      suite: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      companyname: "",
      catchPhrase: "",
      bs: ""
    }
  }
};

export default function fetchLoginWidget(state = initialState, action) {
  console.log(">>>>>>>>>>>Action>>>aaaaaaaaaaaa>>", action);
  switch (action.type) {
    case EDIT_DATA:
      return Object.assign({}, state, {
        editedId: action.id,
        displayAddUser: true,
        dispalyEditUser: true
      });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        json: action.json
      });
    case DELETE_USER:
      return Object.assign({}, state, {
        json: action.response,
        successfullDeleteMsg: "User Successfully Deleted",
        deleleCompleted: true
      });
    case SAVE_DATA:
      return Object.assign({}, state, {
        json: action.response,
        successfullDeleteMsg: "User Successfully Added",
        displayAddUser: false
      });
    case DISPLAY_ADD_USER:
      return Object.assign({}, state, {
        displayAddUser: true,
        deleleCompleted: false
      });
    case UPDATE_USER:
      return Object.assign({}, state, {
        displayAddUser: false,
        dispalyEditUser: false,
        json:action.response,
      });
    case UPDATE_DETAILS_FORM:
      switch (action.id) {
        

        case FIRST_NAME:
          return Object.assign({}, state, {
            ...(state.updateUserObject.firstname = action.value
              ),
          
              ...(state.updateUserObject.id = action.editedId
                )
            
          });
        case USER_NAME:
          return Object.assign({}, state, {
            ...(state.updateUserObject.username = action.value)
          });
        case EMAIL:
          return Object.assign({}, state, {
            ...(state.updateUserObject.email = action.value)
          });
        case PHONE:
          return Object.assign({}, state, {
            ...(state.updateUserObject.phoneNumber = action.value)
          });
          case STREET:
          return Object.assign({}, state, {
            ...(state.updateUserObject.street = action.value)
          });
          case COMPANY_NAME:
          return Object.assign({}, state, {
            ...(state.updateUserObject.companyName = action.value)
          });
      }
    case UPDATE_FORM:
      switch (action.id) {
        case USER_ID:
          return Object.assign({}, state, {
            ...(state.userObject.id = action.value)
          });

        case FIRST_NAME:
          return Object.assign({}, state, {
            ...(state.userObject.firstname = action.value)
          });
        case USER_NAME:
          return Object.assign({}, state, {
            ...(state.userObject.username = action.value)
          });
        case EMAIL:
          return Object.assign({}, state, {
            ...(state.userObject.email = action.value)
          });
        case PHONE:
          return Object.assign({}, state, {
            ...(state.userObject.phoneNumber = action.value)
          });
        case WEB_SITE:
          return Object.assign({}, state, {
            ...(state.userObject.webSite = action.value)
          });
        //Address Object//
        case STREET:
          return Object.assign({}, state, {
            ...(state.userObject.address.street = action.value)
          });
        case CITY:
          return Object.assign({}, state, {
            ...(state.userObject.address.city = action.value)
          });
        case SUITE:
          return Object.assign({}, state, {
            ...(state.userObject.address.suite = action.value)
          });
        case ZIP_CODE:
          return Object.assign({}, state, {
            ...(state.userObject.address.zipcode = action.value)
          });
        //GEO OBJECT//
        case LATITUDE:
          return Object.assign({}, state, {
            ...(state.userObject.address.geo.lat = action.value)
          });
        case LONGITUDE:
          return Object.assign({}, state, {
            ...(state.userObject.address.geo.lng = action.value)
          });
        //Company Object
        case COMPANY_NAME:
          return Object.assign({}, state, {
            ...(state.userObject.company.companyname = action.value)
          });
        case CATCH_PHRASE:
          return Object.assign({}, state, {
            ...(state.userObject.company.catchPhrase = action.value)
          });
        case BS:
          return Object.assign({}, state, {
            ...(state.userObject.company.bs = action.value)
          });
      }
    default:
      return state;
  }
}
