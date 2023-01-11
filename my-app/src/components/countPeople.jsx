import React from "react";


const CounterPeople=(props)=>{
    const counterPeople =()=>{
        const r = props.countPeople%10
        const b = props.countPeople%100
    
        if (props.countPeople===0){
          return  <p><span class="badge bg-danger">Никто не тусанет с тобой</span></p>
        }else if(b===12||b===13||b===14){
            return  <p><span class="badge bg-primary">{props.countPeople} {"Человек тусанет с тобой сегодня "}</span></p>
         }else if (r>=2&&r<=4){
           return  <p><span class="badge bg-primary">{props.countPeople} {"Человека тусанет с тобой сегодня "}</span></p>
        } else {return <p><span class="badge bg-primary">{props.countPeople} {"Человек тусанет с тобой сегодня"}</span></p>}
        }
        

    
return (
    <>
     {counterPeople()}
    </>
   
)
}

export default CounterPeople