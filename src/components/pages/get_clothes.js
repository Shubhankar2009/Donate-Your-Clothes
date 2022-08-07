import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../config'

export default function Get_clothes() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"Donate_Clothes")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="get_clothes_page">
            {list.map((post) =>{
                return <div className="post">
                    <p className="title">{post.type}</p>
                    <p>It is a {post.gender} {post.type}</p>
                    <p>Size : {post.size}</p>
                    <button class="waves-effect waves-light btn" onClick={()=>{alert(`Owner's email is ${post.email}`)}}>Contact Owner</button>
                </div>
            })}
        </div>
    )
}
