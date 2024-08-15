import React from 'react'

/**
 *  LOCALSTORAGE READER
 * @param {STRING||JSON} LOCALSTORAGE KEYNAME
 * @param {BOOLEAN} TYPR (TRUE=JSON, FALSE=STRING)
 * @returns JSON || STRING
 */
const GetLocalData = (LSKeyname,Type) => {
  if(localStorage.getItem(LSKeyname)===null){
    return false;
  }else{
    return Type ? JSON.parse(localStorage.getItem(LSKeyname)) : localStorage.getItem(LSKeyname);
  }
}
export default GetLocalData;