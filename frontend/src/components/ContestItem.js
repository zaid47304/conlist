import React from "react";
// import contestContext from "../context/contest/contestContext";
// import { useContext } from "react";
export const ContestItem = (props) => {
//   const context=useContext(contestContext);
//   const {addContest,contests,getContest}=context;
//   const exists=(titleee)=>{
//     getContest();
//     let newContests=JSON.parse(JSON.stringify(contests))
//     for (let index = 0; index < newContests.length; index++) {
//       const element = newContests[index];
//       if(element.title===titleee){
//         return true;
//       }
//     }
//     return false;
//   }
//   const handleSave=(e)=>{
//     e.preventDefault();
//     if(exists(props.title)){
//       props.showAlert("Already added","danger");
//     }
//     else{
//       addContest(props.title,props.start,props.duration,props.url);
//       props.showAlert("Added successfully","success");
//     }
//   }
  function ConvertUTCTimeToLocalTime(UTCDateString) {
    var convertdLocalTime = new Date(UTCDateString);

    var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;

    convertdLocalTime.setHours(convertdLocalTime.getHours() + hourOffset);

    return convertdLocalTime;
  }
  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
    var hDisplay = h > 0 ? h + (h === 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }
  return (
    <>
      <tr>
        <td>{props.idx + 1}</td>
        <td><a href={props.url} target="_blank" rel="noreferrer">{props.title}</a></td>
        <td>{ConvertUTCTimeToLocalTime(props.start).toDateString()}</td>
        <td>{secondsToDhms(props.duration)}</td>
        <td><button /*onClick={handleSave}*/ type="button" className="btn btn-primary btn-sm">Save</button></td>
      </tr>
    </>
  );
};