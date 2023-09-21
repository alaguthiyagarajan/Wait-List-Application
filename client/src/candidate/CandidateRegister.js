import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from "axios";
import Register from './Register';
import Completed from './Completed';


function CandidateRegister(){

    let id=useParams();
    let navigation=useNavigate();

    let [page,setPage]=useState(0);
    let [refer,setRefer]=useState("");

    let changeRefer=(value)=>{
        setRefer(value)
    }

    useEffect(()=>{
        axios.post("http://localhost:3001/findUser", {id:id.id})
        .then((res) => {
            changeRefer(res . data);
            setPage( 1 );
        })
        .catch((err) => {
            console.log(err);
            navigation(" * ");
        })
    },[id, navigation]);

    let changePageValue = (val) => {
        setPage(val)
    }

    return (
        <div className = "container-fluid vh-100 overflow-auto" style = {{backgroundColor:"#dfdfdf"}}>
            {page === 1 && <Register page = {page} refer = {refer} changeRefer = {changeRefer} pageChange = {changePageValue}/>}
            {page === 2 && <Completed refer = {refer} />}
        </div>
    );
}


export default CandidateRegister;


