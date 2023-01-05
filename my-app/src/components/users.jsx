import React ,{useState} from "react";
import API from "../API";

const Users =()=>{
    const [users , setUsers] = useState(API.users.fetchAll())



const counterPeople =()=>{
    const r = users.length%10
    if (users.length==0){
      return  <p><span class="badge bg-danger">Никто не тусанет с тобой</span></p>
    }else if(users.length==12||users.length==13||users.length==14){
        return  <p><span class="badge bg-primary">{users.length} {"Человек тусанет с тобой сегодня "}</span></p>
     }else if (r>=2&&r<=4){
       return  <p><span class="badge bg-primary">{users.length} {"Человека тусанет с тобой сегодня "}</span></p>
    } else {return <p><span class="badge bg-primary">{users.length} {"Человек тусанет с тобой сегодня"}</span></p>}
    }
    


const handleDelete =(id)=>{
setUsers((prevState)=>prevState.filter(person=>{ return person._id!==id}))
}
    

const renderPrise =()=>{

const user =  users.map((user)=>{
    return  (
<tr key={user._id} >
  <th>{user.name}</th>
  <td key={user.completedMeetings} > {user.qualities.map((qualitie) => <span >{qualitie.name} </span>)}</td>
  <td >{user.profession.name}</td>
  <td >{user.completedMeetings}</td>
  <td >{user.rate}</td>
  <td><button onClick={()=>handleDelete(user._id)}>delete</button></td>

</tr>

  
    )})
   return(<table class="table table-dark table-hover" >
             <thead >
             <tr>
               <th scope="col">Имя</th>
               <th scope="col">Качества</th>
               <th scope="col">Проффессия </th>
               <th scope="col">Встретился раз</th>
               <th scope="col">Оценка</th>
               <th scope="col"></th>
             </tr>
             </thead>
             <tbody>
                {user}
             </tbody>
             
         </table>   ) 
    }
    


return (
    <>
 <div>{counterPeople()}</div>
<div>{renderPrise()}</div>

    </>
   
)
}


export default Users