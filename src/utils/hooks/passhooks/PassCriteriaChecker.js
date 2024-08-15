export function checkUpper(str){
  return /[A-Z]/.test(str.toString());
}

export function checkLower(str){
  return /[a-z]/.test(str.toString());
}
export function checkNum(str){
  let count=0;
  for(let i=0; i<str.toString().length; i++){
    if(!isNaN(str.toString().charAt(i))){
      count++;
    }
  }
  if(Number(count)>0){
    return true;
  }
  return false;    
}
export function checkSpecials(str){
  let b=Array("-","+","!","@","#","$","%","§","=","?","_",".");
  let count=0;
  for(let i=0; i<b.length; i++){
    if(str.toString().includes(b[i].toString())){
      count++;
    }
  }
  if(Number(count)>0){
    return true;
  }
  return false; 
}