import './sidebar.css'

import bannerImage from "./static/Caspar David Friedrich/Landschaft mit Gebirgssee, Morgen.jpeg"

import { useEffect } from 'react'

const Sidebar = () => {
    const showPostForm = () => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")

        const postForm = document.getElementsByClassName('create-post')[0]
        postForm.style.visibility = "visible"
    }

    const showThreadForm = () => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")

        const threadForm = document.getElementsByClassName('create-thread')[0]
        threadForm.style.visibility = "visible"
    }

    useEffect(() => {
        // This make the buttons to create post and thread only appears when the user is logged in
        let createPostButton = document.getElementsByClassName('create-post-button')[0]
        let createThreadButton = document.getElementsByClassName('create-thread-button')[0]
        if (window.localStorage.length !== 0) {
            createPostButton.style.visibility = 'visible'
            createThreadButton.style.visibility = 'visible'           
        } else {
            createPostButton.style.visibility = 'hidden'
            createThreadButton.style.visibility = 'hidden' 
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="mini-banner">
                <img src={bannerImage} alt=""/>
            </div>
            <div className="thread-name">
                <h2>Home</h2>
                <p>This is the Home thread!</p>
            </div>
            <div className="sidebar-options">
                <div className="line"></div>
                <div className="create-post-option option">
                    <button onClick={showPostForm} className="create-post-button">Create Post</button>
                </div>
                <div className="create-community-option option">
                    <button onClick={showThreadForm} className="create-thread-button">Create Thread</button>
                </div>
            </div>
        </div>
    )
}

export {Sidebar}