import jwt_decode from "jwt-decode";
 
export const DecodedToken =(token)=>{
    if(token){
        return jwt_decode(token);
    }
    else{
        return null;
    }
    
} 
 