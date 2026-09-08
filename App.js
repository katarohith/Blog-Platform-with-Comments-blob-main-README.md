import {BrowserRouter,Routes,Route,Link}
from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePost from "./pages/CreatePost";

function App(){

  const user = localStorage.getItem("user");

  return(

    <BrowserRouter>

      <div className="navbar">

        <Link to="/">Home</Link>

        <Link to="/register">Register</Link>

        <Link to="/login">Login</Link>

        <Link to="/create">Create Post</Link>

        {

          user &&

          <span
          style={{
            color:"white",
            marginLeft:"20px",
            marginRight:"20px"
          }}
          >
            Welcome {user}
          </span>

        }

        {

          user &&

          <button
          onClick={()=>{
            localStorage.removeItem("user");
            window.location.reload();
          }}
          >
            Logout
          </button>

        }

      </div>

      <div className="container">

        <Routes>

          <Route
          path="/"
          element={<Home/>}
          />

          <Route
          path="/register"
          element={<Register/>}
          />

          <Route
          path="/login"
          element={<Login/>}
          />

          <Route
          path="/create"
          element={<CreatePost/>}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
