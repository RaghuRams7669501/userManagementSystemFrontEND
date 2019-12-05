
import {
  INSTITUTIONAUTH,
  LDAP,
 
} from "../constants/appConstants";
export default 
{
  getCookie() {
    var name = "camsusername" + "=";
    var ca = document.cookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        // this.setState({ userNameValue: c.substring(name.length, c.length) });

        return c.substring(name.length, c.length);
      }
    }
  },

 

 
  validateUserName(username) {
   if(username==="")
   {
     return false;
   }
   else
   {
     return true;
   }
  },

 


  validatePassword(password) {
   if(password==="")
   {
     return false;
   }
   else
   {
     return true;
   }
  },



handleKeyPress(userName,type,componentName)
{
 
if(type===INSTITUTIONAUTH && componentName==='inputComponent')
{
 return this.validateUserName(userName);
}
if(type===LDAP && componentName==='inputComponent')
{
  
  document.getElementById('input-4').focus();
  return true;

}

}
};
 
