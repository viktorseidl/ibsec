import React from 'react'

/**
 *  KEYGEN GENERATOR 32 CHARS KEY FOR FRONTEND ENCRYPTION
 * @returns BOOLEAN
 */
const KeyGen = ()=> {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let counter = 0;
  while (counter < 32) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter += 1;
  }  
  return result.toString()
}

export default KeyGen;