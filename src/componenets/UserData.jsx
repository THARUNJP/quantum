import "../css/grid.css"
import { useEffect } from "react";
import { useState } from "react";


function UserData(){
  const [users,setUsers]= useState([])

  useEffect(()=>{
getData();
  },[])

async function getData(){

const response = await fetch("http://localhost:5000/users",{
method:"GET",
headers: {
  "Content-Type": "application/json", 
}
})

const data = await response.json();
const status = response.status;
if(status === 200){

setUsers(data)
}


}




return (

<div className="tableContainer">
  <table className="taskTable">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Date of Birth</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      
        {users?.map((e,i)=>(
       <tr key={i}>
      <td>{e.name}</td>
      <td>{e.email}</td>
      <td>{ new Date(e.dob).toLocaleDateString()}</td>
      <td>active</td>
      </tr>
        ))}
      
      
    </tbody>
  </table>
</div>




)


}


export default UserData;