import axios from 'axios'
export const fetchUsersRequest = () => {

     return {
         type: 'FETCH_USERS_REQUEST'
     }
}

export const fetchUsersSuccess = data => {
    console.log(data)
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: data
    }
}

export const fetchUsersFailure = error => {
    return {
        type: 'FETCH_USERS_FAILURE',
        payload: error
    }
}


var myHeaders = new Headers();
myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNzI3YmI0ZTc1M2NmYjNkMDVkNCIsImlhdCI6MTYxNzc3NDgyNn0.1wNsSYOENh1TnK2RVx1rokUhSFZjxtzEPHaT75DjeIM");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "from": "606c33ed6d448a49acadd734",
  "createdBy": "606d423c9e1c2619841b3288",
  "to": "606c33e76d448a49acadd733",
  "notes": "delivered to mohali at 2/2/21",
  "items": {
    "productName": "t-shirt",
    "quantity": "12",
    "description": "wdddwddwee",
    "unitPrice": "2132",
    "total": "123456"
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://192.168.1.82:9000/createInvoice", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));