import {useState} from "react";

import api from "../api";

function Login(){

    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const login = async()=>{

        const res = await api.post("/users/login",{

            email,
            password

        });

        if(res.data === "Login Success"){

            localStorage.setItem("user",email);

            alert("Login Success");

        }
        else{

            alert(res.data);
        }
    }

    return(

        <div className="card">

            <h1>Login</h1>

            <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />

            <br/><br/>

            <input
            type="password"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />

            <br/><br/>

            <button onClick={login}>
                Login
            </button>

        </div>
    );
}

export default Login;
