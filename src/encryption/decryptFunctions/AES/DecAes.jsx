import React from 'react';
import { pki, util, random, cipher,pkcs5 } from "node-forge";
import GetCookie from '../../cookiehooks/GetCookie';
import DecText from '../DecText';
import EncText from '../EncText';

/**
 * AES DECODER 
 * @param {STRING || JSON-STRING} String to be decoded 
 * @returns OBJECT || FALSE
 */
const DecAes = (String)=> {
    if(GetCookie('pr') && GetCookie('sh') && sessionStorage.getItem('rh')){
        //GET PRIVATE KEY PEM
    const privKe = pki.privateKeyFromPem(util.decode64(DecText(JSON.parse(GetCookie('pr')).pr.toString())));
        //DECODE SHARED KEY
    const shared=util.decode64(DecText(JSON.parse(GetCookie('sh')).sh.toString()));
        //DECODE SHARED KEY WITH PRIVATE KEY
    const decryptedSharedKey = privKe.decrypt(shared);
        //DECODE MESSAGE FOR DECRYPTION
    const encriptedtext=util.decode64(DecText(String.toString()));
        //GET RANDOM 16  BIT IV 
    const iv=util.decode64(DecText(sessionStorage.getItem('rh')));
        //START DECRYPTION AES-CBC WITH SHARED KEY
    const decryptor= cipher.createDecipher('AES-CBC', decryptedSharedKey); 
        //USE RANDOM 16 BIT IV FOR DECRYPTION
    decryptor.start({iv: iv});
        //CREATE BUFFER 
    decryptor.update(util.createBuffer(encriptedtext));
        //FINALIZE DECRYPTION
    decryptor.finish();
        //GET DECRYPTED MESSAGE OUTPUT
    const decriptedtext =decryptor.output.data.toString();
        //PREPARE MESSAGE FOR RETURN AND USE
    const preparedMessage=EncText(util.encode64(decriptedtext));
        //RETURN MESSAGE TO BE USED
    return {f:preparedMessage, uf: decriptedtext}; 
  }else{
     return false;
  }
}

export default DecAes;
