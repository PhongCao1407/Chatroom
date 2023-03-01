import './createPost.css'

import { useEffect } from 'react'

const CreatePost = () => {
    useEffect(() => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")
    })

    return (
        <form className="createPost createPostUnBlur">
            <div className="createPostTitle createPostUnBlur" >
                <h1 id="createPost">Create a Post</h1>
            </div>
            
            <div className="createPostMain createPostUnBlur">
                <div className="createPostSubthread createPostUnBlur">
                    <label htmlFor="subthread createPostUnBlur">Please Choose A Subthread</label>
                    <select name="subthread createPostUnBlur">
                        <option value="test createPostUnBlur">Subthread..</option>
                        
                    </select>
                </div>
                <div className="createPostFields createPostUnBlur">
                    <h2 className="createPostUnBlur">Create The Post</h2>
                    <div className="createPostTitle createPostUnBlur">
                        <label htmlFor="title" className="createPostUnBlur">Post Title:</label>
                        <input type="text" className="createPostUnBlur"/>
                    </div>
                    <div className="createPostBody createPostUnBlur">
                    <label htmlFor="body" className="createPostUnBlur">Post Body:</label>
                        <textarea className="createPostUnBlur"></textarea>
                    </div>
                </div>
                <div className="submitButtons createPostUnBlur">
                    <button className="submit createPostUnBlur">Create Post</button>
                    <button className="cancel createPostUnBlur">Cancel</button>
                </div>
            </div> 
        </form>
    )
}

export {CreatePost}