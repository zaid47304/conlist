import React from "react";
import { ContestItem } from "./ContestItem";
import { useEffect,useState } from "react";

const Contest = (props) => {
    const contestInitial=[];
    const [contest, setContest] = useState(contestInitial);
    useEffect(() => {
    const url = `https://kontests.net/api/v1/all`;
    const fetchData = async () => {
        try {
          const response = await fetch(url);
          let json = await response.json();
        //   console.log(json);
          setContest(json)
          
        } catch (error) {
          console.log("error", error);
        }
    };
    fetchData();
    }, [])
    
  return (
    <div className="container">
      <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Event</th>
          <th scope="col">Start time</th>
          <th scope="col">Duration</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>

          {contest.map((e,idx)=>{
                return (<ContestItem title = {e.name} start={e.start_time} duration={e.duration} key={idx} idx={idx} url={e.url} showAlert={props.showAlert}/>); 
          })}
      </tbody>
    </table>
    </div>
  )
}

export default Contest