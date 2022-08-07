import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { db } from '../../config'
import "./style.css"

export default function MyDonations() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"Donate_Clothes")
    let email = localStorage.getItem("email")
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    });

    const deletePost = async (id) =>{
        const postDoc = doc(db, "Donate_Clothes", id)
        await deleteDoc(postDoc)
    }

    return (
        <div className="my_donations">
            {list.map((post) =>{
                if (email == post.email) {
                    return <div className="post">
                        <p className="title">{post.type}</p>
                        <p>It is a {post.gender} {post.type}</p>
                        <p>Size : {post.size}</p>
                        <Button variant = "danger" onClick={()=>{
                            deletePost(post.id)
                        }}>Delete</Button>
                        
                    </div>
                }
            })}
        </div>
    )
}

