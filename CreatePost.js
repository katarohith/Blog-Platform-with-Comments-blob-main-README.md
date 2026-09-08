import {useState} from "react";

import api from "../api";

function CreatePost(){

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    const createPost = async()=>{

        await api.post("/posts/create",{

            title,
            content

        });

        alert("Post Created");
    }

    return(

        <div>

            <h1>Create Blog</h1>

            <input
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
            />

            <br/><br/>

            <textarea
            placeholder="Content"
            onChange={(e)=>setContent(e.target.value)}
            >
            </textarea>

            <br/><br/>

            <button onClick={createPost}>
                Create Post
            </button>

        </div>
    );
}

export default CreatePost;
