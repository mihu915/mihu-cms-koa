function authType(param){
   let type
   if(typeof param === 'object' && Array.isArray(param)){
     type = 'array'
   }else if(typeof param === 'object' && !Array.isArray(param)){
     type = 'object'
   }
   return type
}

module.exports = {
  authType
}