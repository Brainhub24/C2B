/**
 * Encrypt Login Details using AES Algorithm with CryptoJS Library - Cryptographic Functions for JavaScript
 * 
 * Library: CryptoJS (https://www.npmjs.com/package/crypto-js)
 * Documentation: https://cryptojs.gitbook.io/docs/#ciphers
 * 
 * Description:
 * CryptoJS is a widely-used JavaScript library that provides cryptographic functions for hashing, encryption, decryption, encoding, decoding, and more.
 * It offers a variety of algorithms, including MD5, SHA-1, SHA-256, AES, DES, Triple DES, Base64, and HMAC, enabling secure data storage, integrity checks, password hashing, and key derivation.
 * Utilize CryptoJS to implement robust security features in JavaScript applications.
 *
 * Developer: Brainhub24
 * Contact: github@brainhub24.com
 * About: Encrypts login details using the AES algorithm and writes the encrypted data to a file.
 * Version: 2.0.0
 * 
 * Changelog:
 * 
 * v2.0.0 (07-04-2023):
 * - Implemented error handling with try-catch blocks.
 * - Set appropriate file permissions for login.json to restrict access.
 * - Added a changelog to code comments.
 * 
 * v1.0.0 (07-03-2023):
 * - Initial version of the code.
 */

const fs = require('fs');
const CryptoJS = require('crypto-js');

/**
 * Encrypts data using AES algorithm.
 *
 * @param {any} data - The data to be encrypted.
 * @param {string} secretKey - The secret key used for encryption.
 * @returns {string} - The encrypted data.
 */
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

try {
  // Encrypt the login details
  const encryptedData = encryptData(loginDetails, secretKey);

  // Write the encrypted data to login.json
  fs.writeFileSync('login.json', encryptedData, { encoding: 'utf8', mode: 0o600 });

  console.log('login.json file encrypted successfully.');
} catch (error) {
  console.error('An error occurred while encrypting login details:', error);
}
