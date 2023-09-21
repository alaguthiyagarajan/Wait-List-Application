import { useState, useEffect } from "react"; 
import axios from "axios";

function Register( props ){
    // When users get mail id contains of Unique Url and click the url then web shows Referal name and Referal mailId
    //And Type Canditate deatils which candiatate want to connect to purchase the coupon code
    
    let [name, setName] = useState("");
    let [mail, setMail] = useState("");
    
    useEffect(() => {
        if(name.trim().length > 4) {
            let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(mail.trim().match(mailformat)){
                if(document.getElementById("submitBtnInRegistPage").hasAttribute("disabled")){
                    document.getElementById("submitBtnInRegistPage").removeAttribute("disabled");
                }
            }
            else if(!document.getElementById("submitBtnInRegistPage").hasAttribute("disabled")){
                document.getElementById("submitBtnInRegistPage").setAttribute("disabled", "");
            }
        }
        else if(!document.getElementById("submitBtnInRegistPage").hasAttribute("disabled")){
            document.getElementById("submitBtnInRegistPage").setAttribute("disabled", "");
        }
    },[name, mail])

    let formSubmited = (e) => {
        e.preventDefault();
        alert("form submited");
        axios.post("http://localhost:3001/createuser",{name, mail})
        .then(res => {
            console.log(res)
            axios.post("http://localhost:3001/applyrefer",{id:props.refer._id})
            .then(res1 => {
                props.changeRefer({id:res.data.message.insertedId,rank:res.data.rank})
                props.pageChange( 2 );
            })
            .catch(err => console.log(err))
        }).catch(err => console.log(err))
    }

    let form =
        <div className = "d-flex justify-content-center align-items-center vh-100">
            <form onSubmit = {formSubmited} className = "w-50 px-3 py-4 rounded border border-dark border-1" style = {{boxShadow:"0px 0px 10px 5px black"}} >
                <div className = "text-center fs-3 fw-bold">Registration Page</div>
                <div className = "form-group my-3">
                    <label className = "form-label">Referer Name</label>
                    <input disabled className = "form-control border border-dark" value = {props.refer.name} type = "name" placeholder = "name"/>
                </div>
                <div className = "form-group my-3">
                    <label className = "form-label">Referer Mail id</label>
                    <input disabled className = "form-control border border-dark" value = {props.refer.mail} type = "mail" placeholder = "sample@gmail.com"/>
                </div>
                <div className = "form-group my-2">
                    <label className = "form-label">Candidate Name</label>
                    <input 
                        className="form-control border border-dark" 
                        value = {name} 
                        onChange = {(e) => {
                            setName(e.target.value)
                        }} 
                        type = "text" 
                        placeholder = "Enter Candidate Name"/>
                </div>
                <div className = "form-group my-3">
                    <label className = "form-label">Candidate Mail Id</label>
                    <input className = "form-control border border-dark" value = {mail} onChange = {(e) => {setMail(e.target.value)}} type = "mail" placeholder = "sample@gmail.com"/>
                </div>
                <div className = "form-group justify-content-center d-flex">
                    <input type = "submit" id = "submitBtnInRegistPage" disabled className = "btn btn-success px-5 py-2 " value = "Register"/>
                </div>
            </form>
        </div>


    return(form);
}

export default Register;
