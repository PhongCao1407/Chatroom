import './createPost.css'

import { Dropdown } from '../dropdown/Dropdown'

import postService from '../../services/postService'

import { useEffect, useState } from 'react'

const CreatePost = () => {
    const [threadName, setThreadName] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        postService.createNewPost(
            {postTitle: postTitle, postBody: postBody, thread: threadName}
        ).then(() => {
            // The page is only reloaded after the post has been created
            window.location.reload()
        })   
    }

    const cancelPostCreate = (e) => {
        e.preventDefault()

        const App = document.getElementsByClassName('App')[0]
        App.classList.remove("AppBlur")

        const postForm = document.getElementsByClassName('create-post')[0]
        postForm.style.visibility = "hidden"
    }

    return (
        <form className="create-post create-post-unblur"
            onSubmit={handleSubmit}>
            <div className="create-post-title create-post-unblur" >
                <h1 id="create-post">Create a Post</h1>
            </div>

            <div className="create-post-main create-post-unblur">
                <div className="create-post-thread create-post-unblur">
                    <label htmlFor="thread create-post-unblur">Please Choose A Thread</label>
                    <Dropdown
                        isSearchable
                        placeHolder="Select The Thread.."
                        onChange={(value) => setThreadName(value.label)}
                        className="create-post-unblur"
                    />
                </div>
                <div className="create-post-fields create-post-unblur">
                    <h2 className="create-post-unblur">Create The Post</h2>
                    <div className="create-post-title create-post-unblur">
                        <label htmlFor="title" className="create-post-unblur">Post Title:</label>
                        <input type="text" className="create-post-unblur" onChange={(e) => setPostTitle(e.target.value)}/>
                    </div>
                    <div className="create-post-body create-post-unblur">
                        <label htmlFor="body" className="create-post-unblur">Post Body:</label>
                        <textarea className="create-post-unblur" onChange={(e) => setPostBody(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="submit-buttons create-post-unblur">
                    <button className="submit create-post-unblur">Create Post</button>
                    <button className="cancel create-post-unblur" onClick={cancelPostCreate}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export { CreatePost }