import React from 'react'

/**
 *  SESSIONSTORAGE READER
 * @param {STRING} SESSIONSTORAGE KEYNAME
 * @param {BOOLEAN} TYPE (TRUE=JSON-OBJECT, FALSE=STRING)
 * @returns JSON || STRING
 */
const GetSessionData = (SSKeyname,Type) => {
  if(sessionStorage.getItem(SSKeyname)=== null){
    return false;
  }else{
    return Type ? JSON.parse(sessionStorage.getItem(SSKeyname)) : sessionStorage.getItem(SSKeyname);
  }
}
export default GetSessionData;