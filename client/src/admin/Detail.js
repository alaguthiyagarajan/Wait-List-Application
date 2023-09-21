import { useEffect, useState } from "react";
import axios from "axios";

function Detail(props){
    //Updation Process(Delete)
    
    let [list, setList] = useState([]);
    let [temp, setTemp] = useState(0);
    let style = {backgroundColor : "#89b9ff", height : "4rem", margin : "5px", boxShadow : "3px 3px white"}

    useEffect(() => {
        axios.get("http://localhost:3001/")
        .then(res => {
            setList(res.data);
        })
        .catch(err => console.log( err ))
    },[temp]);

    let openUser = (id) => {
        props.updateUser(2);
        props.changeId(id)
    }

    let remove=(id) => {
        if(window.confirm("Do you want to delete!")){
            axios.post("http://localhost:3001/delete",{id})
            .then( res=> {
                setTemp(temp+1);
            })
            .catch(err=>console.log(err))
        }
    }

    let arr;

    //Default Display

    if(list.length === 0) {
        arr =
        <div style = {style} className = "d-flex border border-1 bg-danger fs-5 fw-bold border-dark rounded p-1 text-center">
            <span className = "w-100"> No One Registered !</span>
        </div>
    }
    else{ //Display Contents
        arr = list.map((arr) => {
            return (<div style = {style} className = "row border border-1 border-dark rounded p-2 text-center">
                <div className = "col text-start">
                    <div className = "text-dark" style = {{fontSize:"14px"}}>
                        Name
                    </div>
                    <span className = "fw-bold">
                        {arr.name}
                    </span>
                </div>
                <div className = "col">
                    <div className = "text-dark" style = {{fontSize:"14px"}}>
                        Mail Id
                    </div>
                    <span className = "fw-bold">
                        {arr.mail}
                    </span>
                </div>
                <div className = "col">
                    <div className = "text-dark" style = {{fontSize:"14px"}}>
                        Rank
                    </div>
                    <span className="fw-bold">
                        {arr.rank}
                    </span>
                </div>
                <div style = {(props.edit) ? {display:"block"}:{display:"none"}} className = "col-2 text-center" >
                    <div className = "text-dark" style = {{fontSize:"14px"}}>
                        Operations
                    </div>
                    <span className = "fw-bold justify-content-evenly d-flex">
                        <i onClick = {() => {openUser(arr._id)}} class = "bi bi-pen-fill"></i>
                        <i onClick={() => {remove(arr._id)}} class = "bi bi-trash3-fill"></i>
                    </span>
                </div>
            </div>)
        })
    }


    return(
      <>
        <div style = {{margin:"3rem 5px 5px 5px", padding:"10px", fontSize:"1.5rem", fontWeight:"bold", textShadow:"3px 3px white" }} className = "text-center">
            Registered Candidate Rank List
        </div>
        <div style = {{paddingBottom : "4rem"}}>
            { arr }
        </div>
      </>  
    );
}

export default Detail;
