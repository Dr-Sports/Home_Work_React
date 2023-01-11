import React ,{useState} from "react";
import API from "../API";
import BookMarck from "./bookMarck";
import CounterPeople from "./countPeople";
import Qualities from "./userQuality";

const Users =()=>{
    const [users , setUsers] = useState(API.users.fetchAll())


const handleDelete =(id)=>{
setUsers((prevState)=>prevState.filter(person=>{ return person._id!==id}))
}

const renderPrise =()=>{
 
const user =  users.map((user)=>{
    return  (
<tr key={user._id} >
  <th>{user.name}</th>
  <Qualities user1={user.qualities} />
  <td >{user.profession.name}</td>
  <td >{user.completedMeetings}</td>
  <td >{user.rate}</td>
  <BookMarck  inv={user.bookmark} />
  <td><button class="btn btn-primary" onClick={()=>handleDelete(user._id)}>delete</button></td>
  

</tr>
    )})
   return(<table class="table table table-hover" >
             <thead >
             <tr>
               <th scope="col">Имя</th>
               <th scope="col">Качества</th>
               <th scope="col">Проффессия </th>
               <th scope="col">Встретился раз</th>
               <th scope="col">Оценка</th>
               <th>Избраное</th>
               
             </tr>
             </thead>
             <tbody>
                {user}
             </tbody>
             
         </table>   ) 
    }
    


return (
    <>
    <CounterPeople   countPeople = {users.length}/>
<div>{renderPrise()}</div>
    </>
)
}  


export default Users