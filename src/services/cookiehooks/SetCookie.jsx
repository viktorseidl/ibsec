import React from 'react'
import Cookie from 'js-cookie'

/**
 * COOKIE SUPPLIER
 * @param {STRING} COOKIE KEYNAME
 * @param {STRING} STRING (STRINGYFIED JSON OBJECT || STRING) 
 * @param {INT} DAYS (INTEGER) 
 * @returns BOOLEAN  
 */
const SetCookie = (CKeyname,String,Days) => {
  return Cookie.set(CKeyname,String,{
    expires:Days,
    secure:true,
    sameSite:'strict',
    path:'/'
  }) ? true : false;
}
export default SetCookie;