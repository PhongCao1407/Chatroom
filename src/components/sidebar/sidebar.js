import './sidebar.css'

import bannerImage from "./static/Caspar David Friedrich/Landschaft mit Gebirgssee, Morgen.jpeg"

const Sidebar = () => {
    const showPostForm = () => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")

        const postForm = document.getElementsByClassName('create-post')[0]
        postForm.style.visibility = "visible"
    }

    const showSubthreadForm = () => {
        const App = document.getElementsByClassName('App')[0]
        App.classList.add("AppBlur")

        const subthreadForm = document.getElementsByClassName('create-subthread')[0]
        subthreadForm.style.visibility = "visible"
    }

    return (
        <div className="sidebar">
            <div className="mini-banner">
                <img src={bannerImage} alt=""/>
            </div>
            <div className="subthread-name">
                <h2>Home</h2>
                <p>This is the Home subthread!</p>
            </div>
            <div className="sidebar-options">
                <div className="line"></div>
                <div className="create-post-option option">
                    <button onClick={showPostForm}>Create Post</button>
                </div>
                <div className="create-community-option option">
                    <button onClick={showSubthreadForm}>Create Subthread</button>
                </div>
            </div>
        </div>
    )
}

export {Sidebar}