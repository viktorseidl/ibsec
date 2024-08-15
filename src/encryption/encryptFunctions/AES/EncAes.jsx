import React from 'react';
import { pki, util, random, cipher,pkcs5 } from "node-forge";
import GetCookie from '../../cookiehooks/GetCookie';
import DecText from '../DecText';
import EncText from '../EncText';

/**
 * AES ENCODER 
 * @param {STRING || JSON-STRING} String to be encoded 
 * @returns OBJECT || FALSE
 */
const EncAes = (String)=> {
    if(GetCookie('pr') && GetCookie('sh') && sessionStorage.getItem('rh')){
        //GET PRIVATE KEY PEM
    const privKe = pki.privateKeyFromPem(util.decode64(DecText(JSON.parse(GetCookie('pr')).pr.toString())));
        //DECODE SHARED KEY
    const shared=util.decode64(DecText(JSON.parse(GetCookie('sh')).sh.toString()));
        //DECODE SHARED KEY WITH PRIVATE KEY
    const decryptedSharedKey = privKe.decrypt(shared);
        //GET RANDOM 16  BIT IV 
    const iv=util.decode64(DecText(sessionStorage.getItem('rh')));
        //START ENCRYPTION AES-CBC WITH SHARED KEY
    const encryption = cipher.createCipher('AES-CBC', decryptedSharedKey); 
        //USE RANDOM 16 BIT IV FOR ENCRYPTION
    encryption.start({iv: iv});
        //CREATE BUFFER UTF-8
    encryption.update(util.createBuffer(String, 'utf8'));
        //FINALIZE ENCRYPTION
    encryption.finish();
        //GET ENCRYPTED MESSAGE OUTPUT
    const encriptedtext =encryption.output.data.toString();
        //PREPARE MESSAGE FOR RETURN AND SENDING
    const preparedMessage=EncText(util.encode64(iv+encryption.output.data));
        //RETURN PREPARED MESSAGE TO BE SENT
    return {b:preparedMessage,f:EncText(util.encode64(encriptedtext))}; 
  }else{
     return false;
  }
}

export default EncAes;
