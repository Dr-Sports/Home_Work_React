import React ,{useState} from "react";


const BookMarck=()=>{
let bookMarks = <svg onClick={()=>handelClikInv()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
<path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
</svg>

    const [invPeople , setInvPeople]= useState(bookMarks);
    
    const  handelClikInv=()=>{
        setInvPeople(bookMarks = <svg onClick={handleOff} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg>)
            }

     const handleOff=()=>{
        setInvPeople(bookMarks = <svg onClick={()=>handelClikInv()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
        <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
        </svg> )
            }


return(
    
     <th>{invPeople}</th>
    
   
)
}

export default BookMarck