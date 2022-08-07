import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import './style.css'
import { db } from '../../config'
import { useHistory } from 'react-router'


export default function Add_your_clothes() {

    const [type, setType] = useState("")
    const [size, setsize] = useState("")
    const [gender, setgender] = useState("unisex")

    const handle_gender_Change = event => {
        console.log(event.target.value);
        setgender(event.target.value);
      };

    const handle_size_Change = event => {
        console.log(event.target.value);
        setsize(event.target.value);
      };

    const email = localStorage.getItem("email")
    let history = useHistory()

    const collection_ref = collection(db,"Donate_Clothes")
    const Sumbit =  async() =>{
        if (type !== "") {
            await addDoc(collection_ref, {type, size, gender, email})
            history.push("/")
        }
    }

    return (
        <div className="Add_your_clothes">
            <div className="Container">
                <h1>DONATE YOUR CLOTHES</h1>
                <h3>Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        <label id="cloth-type-label">
                            <h5 id="cloth-type-label-h5">Cloth Type : </h5>
                            <input type="text" placeholder="Cloth Which You Want To Donate (Shirt, Pants , etc)" name="cloth-type" id="cloth-type" onChange={(event)=>{setType(event.target.value)}} />
                        </label>
                        <div className="gender">
                            <h5>Gender :</h5>
                            <div className="gender-input">
                                <label className="gender-label">
                                    <input name="gender" id="gender" value="unisex" type="radio" checked={gender === 'unisex'} onChange={handle_gender_Change}/>
                                    <span>Unisex</span>
                                </label>
                                
                                <label className="gender-label">
                                    <input name="gender" id="gender2" value="women" type="radio" checked={gender === 'women'} onChange={handle_gender_Change}/>
                                    <span>Women</span>
                                </label>
                            </div>
                        </div>

                        <div className="size">
                            <h5>Size :</h5>
                            <div className="size-input">
                                <label className="gender-label">
                                    <input name="size" id="size" value="Extra Small" type="radio" checked={size === 'Extra Small'} onChange={handle_size_Change}/>
                                    <span>Extra Small</span>
                                </label>
                                
                                <label className="gender-label">
                                    <input name="size" id="size2" value="Small" type="radio" checked={size === 'Small'} onChange={handle_size_Change}/>
                                    <span>Small</span>
                                </label>
                                <label className="gender-label">
                                    <input name="size" id="size" value="Medium" type="radio" checked={size === 'Medium'} onChange={handle_size_Change}/>
                                    <span>Medium</span>
                                </label>
                                
                                <label className="gender-label">
                                    <input name="size" id="size2" value="Large" type="radio" checked={size === 'Large'} onChange={handle_size_Change}/>
                                    <span>Large</span>
                                </label>
                                <label className="gender-label">
                                    <input name="size" id="size" value="Extra Large" type="radio" checked={size === 'Extra Large'} onChange={handle_size_Change}/>
                                    <span>Extra Large</span>
                                </label>
                            </div>
                        </div>
                        <button id="submit-btn" onClick={Sumbit} class="btn waves-effect waves-light" name="action">Submit
                        </button>
                </div>
            </div>
        </div>
    )
}
