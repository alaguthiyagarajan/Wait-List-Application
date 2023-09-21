import { Link, useNavigate } from "react-router-dom";
//import ReactDOM from "react-dom/client";
import "./loginform.css"
import { useState } from "react";
function LoginForm(){
    let [name,setName]=useState("");
    let [pass,setPass]=useState("");
    let navigate=useNavigate();

    let login=()=>{
        if(name.trim()=="admin" && pass.trim()=="admin"){
            alert("login success");
            navigate("/admin");
        }
        else{
            alert("Username or password Invalid");
        }
    };
return (
    <div className="container-fluid w-100 vh-100 justify-content-center align-items-center d-flex">
    <div className="cover " >
        <h1 className="" style = {{ fontSize : "4rem" }}> LOGIN </h1>
        <input type = "text" style = {{ fontSize : "1rem", padding : "15px" }} placeholder = " USERNAME " value={name} onChange={(e)=>{setName(e.target.value)}} id="name"/>
        <input type = "password" style = {{ fontSize : "1rem", padding : "15px" }} placeholder = "PASSWORD"id="password" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
        <button className = "login-btn text-dark"  onClick={login}>Login</button>
    </div>

    </div>
    )
}

export default LoginForm;

           

          
            