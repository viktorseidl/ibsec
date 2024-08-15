import React from 'react'
import Cookie from 'js-cookie'

/**
 * COOKIE CLEANER
 * @param {STRING} COOKIE KEYNAME 
 * @returns BOOLEAN
 */
const RemoveCookie = (CKeyname) => {
  return Cookie.remove(CKeyname) ? true : false;
}
export default RemoveCookie;