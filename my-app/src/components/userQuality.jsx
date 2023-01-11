import React from "react";


const Qualities=({user1 , ...rest})=>{
    const text = ' text-white  m-1 bage bg-'
    return(
   <td> {user1.map((quea)=><span class= {text+quea.color}>{quea.name}</span>)}</td> 
     )
    
}

export default Qualities