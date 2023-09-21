//Candiate Updation
import { useEffect, useState } from "react";
import axios from "axios";

function UpdateUser(props){

    let [name, setName] = useState("");
    let [mail, setMail] = useState("");

    useEffect(() => {
        if(name.trim().length > 4){
            //Mail Validation
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(mail.trim().match( mailformat )){
                if(document.getElementById ("submitBtnInUpdatePage").hasAttribute ("disabled")){
                    document.getElementById ("submitBtnInUpdatePage").removeAttribute ("disabled");
                }
            }
            else if(!document.getElementById ("submitBtnInUpdatePage").hasAttribute ("disabled")){
                document.getElementById ("submitBtnInUpdatePage").setAttribute ("disabled","");
            }
        }
        else if(!document.getElementById ("submitBtnInUpdatePage").hasAttribute ("disabled")){
            document.getElementById ("submitBtnInUpdatePage").setAttribute ("disabled","");
        }
    },[name, mail])

    useEffect(() => {
        axios.post("http://localhost:3001/findUser",{id:props.id})
        .then(res => {
            setName(res.data.name);
            setMail(res.data.mail);
        })
        .catch(err => console.log(err))
    },[props.id]);

    let formSubmited = (e) => {
        e.preventDefault();
        alert("form submited");
        axios.post("http://localhost:3001/updateuser", {name, mail, id:props.id})
        .then(res=>{
            document.getElementById("CreateBtn").click();
        })
        .catch(err => console.log(err))
    }
    //Update Deatils
    let change=
        <div className = "d-flex justify-content-center align-items-center vh-100">
            <form onSubmit = {formSubmited} className = "w-50 px-3 py-4 rounded border border-dark border-1" style = {{boxShadow : "0px 0px 10px 5px black"}} >
                <div className = "text-center fs-3 fw-bold"> Update Candidate Detail </div>
                <div className = "form-group my-2">
                    
                    <label className = "form-label">Candidate Name</label>
                    <input className = "form-control border border-dark" value = {name} onChange = {(e) => {setName(e.target.value)}} type = "text" placeholder = "Enter Candidate Name"/>
                </div>
                <div className = "form-group my-3">
                    <label className = "form-label">Candidate Mail Id</label>
                    <input className = "form-control border border-dark" value = {mail} onChange = {(e) => {setMail(e.target.value)}} type = "text" placeholder = "sample@gmail.com"/>
                </div>
                <div className = "form-group d-flex">
                    <input type = "submit" disabled id = "submitBtnInUpdatePage" className = "btn btn-success p-2 w-100 me-1" value = "Update"/>
                    <button onClick = {() => {props.back( 0 )}} className = "ms-1 btn btn-outline-primary w-100">Back</button>
                </div> 
            </form>
        </div>;

    return(change);
}

export default UpdateUser;