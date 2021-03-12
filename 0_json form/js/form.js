'use strict';

import fs from 'fs';

const sendBut = document.getElementById('subBut');
const fName = document.getElementById('first_name');
const lName = document.getElementById('last_name');
const eMail = document.getElementById('email_address');

let sendData = []
let validForm = false;

subBut.addEventListener("click", function (event) {
  event.preventDefault();
  sendData = []; // resets the send array.
  const arr = [fName, lName, eMail];
  validate(arr);
  validForm ? writeOutput(sendData) : null;
});

function validate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lead = { "firstName": arr[0].value, "lastName": arr[1].value, "mail": arr[2].value }

    if (!arr[i].value) {
      // console.log('empty field : ', arr[i].name); //could write a user warning here...
      arr[i].classList.add('inValid'); // color empty field in red
      validForm = false;
    }
    else {
      arr[i].classList.remove('inValid');
      sendData.push(arr[i].value)
    }
    if (sendData.length > 2) {
      validForm = true;
      sendData = []; // resets the send array.
      sendData.push(lead)
    }
  }
}

function writeOutput(data){
 JSON.stringify(data);
 fs.writeFileSync('data.json', data);
}