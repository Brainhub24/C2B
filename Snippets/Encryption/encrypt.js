// *************************************************//
//			    www.BrainHub24.com                  //
// *************************************************//

const fs = require('fs');
const CryptoJS = require('crypto-js');

// Encryption function using AES algorithm
function encryptData(data, secretKey) {
  const encData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
  return encData;
}

// Define your login details
const loginDetails = {
  contributor: 'Brainhub24',
  project: 'Cert2Brain',
  description: 'Login Details for the Cert2Brain Bot',
  username: 'your_username',
  password: 'your_password'
};

// Define your secret key
const secretKey = 'your_secret_key';

// Encrypt the login details
const encryptedData = encryptData(loginDetails, secretKey);

// Write the encrypted data to login.json
fs.writeFileSync('login.json', encryptedData, 'utf8');

console.log('login.json file encrypted successfully.');
