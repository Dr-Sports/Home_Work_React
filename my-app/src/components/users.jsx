import React ,{useState} from "react";
import API from "../API";

const Users =()=>{
    const [users , setUsers] = useState(API.users.fetchAll())
    console.log( users)
}
export default Users