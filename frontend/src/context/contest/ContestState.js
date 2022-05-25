import contestContext from "./contestContext";
import { useState } from "react";
import React from "react";
const ContestState = (props) => {
    const host= "http://localhost:3000"
    const contestInitial=[]
    const [contests, setContest] = useState(contestInitial);
    // get all contest
    const getContest= async ()=>{
        //TODO api call
        const response = await fetch(`${host}/api/contest/fetchallcontests`, {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           "auth-token":localStorage.getItem('token')
         },
       });
       const json= await response.json(); //.json() converts resposne into a javascript object
      console.log(json);
       setContest(json);
       }
       // Add a contest
      const addContest= async (title,start,duration,url)=>{
        //TODO api call
        const response = await fetch(`${host}/api/contest/addcontest`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           "auth-token":localStorage.getItem('token')
         },
         body: JSON.stringify({title,start,duration,url}) 
       });
       const contest=await response.json();
        setContest(contests.concat(contest));
      }
   // Delete a note
   const deleteContest =async (id) =>{
    const response = await fetch(`${host}/api/contest/deletecontest/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await  response.json();
    console.log(json);
   console.log("Deleting the contest"+id)
   const newContest=contests.filter((contest)=>{
     // filter out all the nodes having the id passed
     // so logically that note will deleted 
    return contest._id!==id
   })
   setContest(newContest);
  }
  return (
    <contestContext.Provider value={{contests,getContest,addContest,deleteContest}}>
           {props.children};
       </contestContext.Provider>
  )
}
export default ContestState