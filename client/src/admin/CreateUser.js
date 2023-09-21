import { useEffect, useState } from "react";
import axios from "axios";

function CreateUser() {

    let [name, setName] = useState("");
    let [mail, setMail] = useState("");
    //Mail Validation
    useEffect(() => {
        if(name.trim().length > 4) {
            //console.log("stage 1")

            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(mail.trim().match(mailformat)){
           if(document.getElementById("submitBtnInCreatePage").hasAttribute("disabled")){
                    document.getElementById("submitBtnInCreatePage").removeAttribute("disabled");
                }
            }
            else if(!document.getElementById("submitBtnInCreatePage").hasAttribute("disabled")){
                document.getElementById("submitBtnInCreatePage").setAttribute("disabled","");
            }
        }
        else if(!document.getElementById("submitBtnInCreatePage").hasAttribute("disabled")){
            document.getElementById("submitBtnInCreatePage").setAttribute("disabled","");
        }
    },[name,mail])
    
    let formSubmited = (e) => {
        e.preventDefault();
        alert("form submited");
        axios.post("http://localhost:3001/createuser",{name,mail})
        .then(res => {
            document.getElementById("CreateBtn").click();
        })
        .catch(err=>console.log(err))
    }
    //Create Functions of New Candidate Registartion
    let change=
        <div className = "d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={ formSubmited}  className = "w-50 px-3 py-4 rounded border border-dark border-1" style={{boxShadow:"0px 0px 10px 5px black"}} >
                <div className = "text-center fs-3 fw-bold"> New Candidate Registration </div>
                <div className = "form-group my-2">
                    <label className="form-label"> Candidate Name </label>
                    <input 
                        className = "form-control border border-dark" 
                        value = {name} 
                        onChange = {(e) => {
                            setName(e.target.value)
                        }} 
                        type = "text" 
                        placeholder = "Enter Candidate Name"/>
                </div>
                <div className = "form-group my-3">
                    <label className = "form-label">Candidate Mail Id</label>
                    <input className = "form-control border border-dark" value = { mail } onChange = {(e) =>{setMail(e.target.value)}} type = "mail" placeholder = "sample@gmail.com"/>
                </div>
                <div className = "form-group justify-content-center d-flex">
                    <input type = "submit" id = "submitBtnInCreatePage" disabled className = "btn btn-success p-2 " value = "Create User"/>
                </div>
            </form>
        </div>

    return(change);
}

export default CreateUser;
