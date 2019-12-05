
import data from "app/data.json";


export function post(resourcePath) { 
  const url = resourcePath;
  const settings = {
   
    method: "POST",
    credentials: "same-origin",
   
  };
  console.log('>>>>>>>Settings>>>>>>',settings);
  return fetch(url,settings);
}
// export function post(resourcePath, requestBody,serviceAccount,rememberMe) { 
//   const url = resourcePath;
//   const settings = {
//     headers: {
//       "Content-type": data.contentType,
//       "X-AOS-ServiceAccount": serviceAccount,     
//       "X-AOS-RememberMe":rememberMe,
//       "cache-control":"no-cache",
     
//     },
//     method: data.methodType,
//     credentials: "same-origin",
//     body: requestBody,
//   };
//   console.log('>>>>>>>Settings>>>>>>',settings);
//   return fetch(url,settings);
// }
export function get(url) {
  console.log('>>>>url>>>>>>>',url)
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "GET",
       
      })
        .then(response => {
          response.json().then(json => {
          console.log('>>>>>>>>>>Response>>>ResTClient>>',json)
          resolve(json);
          })
        })
        .catch(error => {
          resolve(handleResponse({ status: 500, error }));
        });
    } catch (error) {}
  });
}

export function postData(url) {
  console.log('>>>>url>>>>>>>',url)
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
       
      })
        .then(response => {
          response.json().then(json => {
          console.log('>>>>>>>>>>Response>>>ResTClient>>',json)
          resolve(json);
          })
        })
        .catch(error => {
          resolve(handleResponse({ status: 500, error }));
        });
    } catch (error) {}
  });
}
export function saveData(url,requestBody) {
  console.log('>>>>url>>>>>>>',url,requestBody)
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
        body: requestBody,
        headers: {
      "Content-type": "application/json",
        },
        
      })
        .then(response => {
          response.json().then(json => {
            console.log('>>>>>>>>>>Add USer Response>>',json)
            resolve(json);
          })
        })
        .catch(error => {
          resolve(handleResponse({ status: 500, error }));
        });
    } catch (error) {}
  });
}