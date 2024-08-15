import React from 'react'

/**
 *  STRING RANDOMIZER 
 * @param {INT} STRINGLENGTH (INTEGER) 
 * @returns STRING
 */
const RandString = (Length)=> {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < Length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }  
  return result.toString();
}

export default RandString;