import React from 'react'

/**
 *  SESSIONSTORAGE SUPPLIER 
 * @param {STRING} SESSIONSTORAGE  KEYNAME
 * @param {JSON||STRING} STRING (STRINGYFIED JSON OBJECT || STRING)
 * @param {BOOLEAN} TYPE (TRUE=JSON||FALSE=STRING) 
 * @returns BOOLEAN 
 */
const SetSessionData = (SSKeyname,String,Type) => {
   return Type ? sessionStorage.setItem(SSKeyname,JSON.stringify(String)) : sessionStorage.setItem(SSKeyname,String);
}
export default SetSessionData;