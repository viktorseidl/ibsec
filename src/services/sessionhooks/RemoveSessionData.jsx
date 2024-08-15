import React from 'react'

/**
 * SESSIONSTORAGE CLEANER
 * @param {STRING} SESSIONSTORAGE KEYNAME
 * @returns BOOLEAN 
 */
const RemoveSessionData = (SSKeyname) => {
    return (sessionStorage.removeItem(SSKeyname)) ? true : false;
}
export default RemoveSessionData;