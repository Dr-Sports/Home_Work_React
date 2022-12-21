import React ,{useState} from "react";
import API from "../API";



const Users =()=>{
    const [users , setUsers] = useState(API.users.fetchAll())
    console.log( users)
 
return <h1>User1</h1>
}
export default Users