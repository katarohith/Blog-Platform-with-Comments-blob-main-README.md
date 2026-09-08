import {useState} from "react";

import api from "../api";

function Register(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const register = async()=>{

        await api.post("/users/register",{

            name,
            email,
            password

        });

        alert("Registered Successfully");
    }

    return(

        <div>

            <h1>Register</h1>

            <input
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
            />

            <br/><br/>

            <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />

            <br/><br/>

            <input
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <br/><br/>

            <button onClick={register}>
                Register
            </button>

        </div>
    );
}

export default Register;
