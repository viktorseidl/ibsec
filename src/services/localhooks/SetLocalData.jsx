import React from 'react'

/**
 *  LOCALSTORAGE SUPPLIER
 * @param {string} LOCALSTORAGE KEYNAME
 * @param {JSON||STRING} STRING (STRINGYFIED JSON OBJECT || STRING)
 * @param {BOOLEAN} TYPE (TRUE=JSON||FALSE=STRING) 
 * @returns BOOLEAN 
 */
const SetLocalData = (LSKeyname,String,Type) => {
  return Type ? localStorage.setItem(LSKeyname,JSON.stringify(String)) : localStorage.setItem(LSKeyname,String);
}
export default SetLocalData;