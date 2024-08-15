import React from 'react'

/**
 * LOCALSTORAGE CLEANER
 * @param {STRING} LOCALSTORAGE KEYNAME
 * @returns BOOLEAN 
 */
const RemoveLocalData = (LSKeyname) => {
  return (localStorage.removeItem(LSKeyname)) ? true : false;
}
export default RemoveLocalData;