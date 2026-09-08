import {useEffect,useState} from "react";

import api from "../api";

function Home(){

    const [posts,setPosts] = useState([]);

    const [comment,setComment] = useState("");

    const [comments,setComments] = useState({});

    const [editId,setEditId] = useState(null);

    const [editTitle,setEditTitle] = useState("");

    const [editContent,setEditContent] = useState("");

    useEffect(()=>{

        getPosts();

    },[]);

    const getPosts = async()=>{

        const res = await api.get("/posts");

        setPosts(res.data);

        res.data.forEach((post)=>{

            getComments(post._id);

        });
    }

    const deletePost = async(id)=>{

        await api.delete(`/posts/${id}`);

        alert("Post Deleted");

        getPosts();
    }

    const addComment = async(id)=>{

        await api.post("/comments/add",{

            postId:id,

            text:comment

        });

        alert("Comment Added");

        getComments(id);

        setComment("");
    }

    const getComments = async(id)=>{

        const res = await api.get(`/comments/${id}`);

        setComments(prev => ({

            ...prev,

            [id]:res.data

        }));
    }

    const startEdit = (post)=>{

        setEditId(post._id);

        setEditTitle(post.title);

        setEditContent(post.content);
    }

    const updatePost = async(id)=>{

        await api.put(`/posts/${id}`,{

            title:editTitle,

            content:editContent

        });

        alert("Post Updated");

        setEditId(null);

        getPosts();
    }

    return(

        <div>

            <h1>All Blog Posts</h1>

            {

                posts.map((post)=>(

                    <div
                    className="card"
                    key={post._id}
                    >

                        {

                            editId === post._id ?

                            <div>

                                <input
                                value={editTitle}
                                onChange={(e)=>
                                setEditTitle(e.target.value)}
                                />

                                <textarea
                                value={editContent}
                                onChange={(e)=>
                                setEditContent(e.target.value)}
                                >
                                </textarea>

                                <button
                                onClick={()=>
                                updatePost(post._id)}
                                >
                                    Save
                                </button>

                            </div>

                            :

                            <div>

                                <h2>{post.title}</h2>

                                <p>{post.content}</p>

                            </div>

                        }

                        <button
                        onClick={()=>
                        deletePost(post._id)}
                        >
                            Delete
                        </button>

                        <button
                        onClick={()=>
                        startEdit(post)}
                        >
                            Edit
                        </button>

                        <hr/>

                        <h3>Add Comment</h3>

                        <input
                        placeholder="Write comment"
                        value={comment}
                        onChange={(e)=>
                        setComment(e.target.value)}
                        />

                        <button
                        onClick={()=>
                        addComment(post._id)}
                        >
                            Add Comment
                        </button>

                        <h3>Comments</h3>

                        {

                            comments[post._id]?.map((c)=>(

                                <div
                                className="comment"
                                key={c._id}
                                >
                                    {c.text}
                                </div>

                            ))

                        }

                    </div>

                ))

            }

        </div>
    );
}

export default Home;
