import './sidebar.css'

import bannerImage from "./static/Caspar David Friedrich/Landschaft mit Gebirgssee, Morgen.jpeg"

const Sidebar = () => {
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
                    <button>Create Post</button>
                </div>
                <div className="create-community-option option">
                    <button>Create Subthread</button>
                </div>
            </div>
        </div>
    )
}

export {Sidebar}