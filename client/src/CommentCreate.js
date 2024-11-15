import { useState } from "react";
import axios from "axios";

const CommentCreate = ({postId}) =>{
    const [content, setContent] = useState('');

    //handling submit
    const handleSubmit = async (e)=>{
        e.preventDefault();

        await axios.post(`http://posts.com/posts/${postId}/comments`, {
            content,
          });
          
        setContent('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="comment">New Comment</label>
                    <input className="form-control" value={content} onChange={e=>setContent(e.target.value)} />
                </div>
                <br />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default CommentCreate;