import React, {useState} from "react"
import { useParams, useNavigate} from "react-router-dom"
import { postMessage } from "../ajax-requests"



function Message({posts, token}){
    const navigate= useNavigate();
    const {postId} = useParams();
    const [post]= posts.filter((post) => post._id === postId)
    const [message, setMessage]= useState("")

    async function handleSubmit(event){
        event.preventDefault();
        const thismessage = {message}
        try{
            const result = await postMessage(postId, thismessage, token)
            if(result.success){
                navigate(`/post/${postId}`)

            }else{
                console.log("There was an error when sending your message", result.error)
            }

        }catch(err){
            console.error("There was an error sending your message", err)
        }
    }


    return(
        
        <div>
            <h2>Message Post</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Message:</label>
                <textarea 
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                />
                {!token && <p id="please-login">Please Login to send messages</p>}
                <button type="submit" disabled={!token}>Send Message</button>
            </form>
        </div>
        
    )
}

export default Message;