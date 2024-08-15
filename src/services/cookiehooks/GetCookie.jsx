import React from 'react'
import Cookie from 'js-cookie'

/**
 * COOKIE READER
 * @param {STRING||JSON} COOKIE KEYNAME 
 * @returns JSON || STRING
 */
const GetCookie = (CKeyname) => {
  return Cookie.get(CKeyname);
}

export default GetCookie;