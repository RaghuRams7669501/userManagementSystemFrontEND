import { credentialsNull, renderpwdNull, renderSteps, renderuserNameNull, submitOTP } from "../actions/actionTypes";
import { INSTITUTIONAUTH } from "../constants/appConstants";
import data from "../data.json";

export function submit(userName,password,type)
{
  console.log('>>>>>Test Util>>INSTITUTIONAUTH>>>>>',userName,password,type);
if(type===INSTITUTIONAUTH)
{
  if(userName==='')
  {
    console.log('userName Null');
  renderuserNameNull();
  }
 else  if(password==='')
  {
    console.log('Password Null');
    renderpwdNull();
  }
 
} 
else if(type!==INSTITUTIONAUTH)
{
  console.log('>>>>>Test Util>>>LDAP>>>>',userName,password,type);
}
}