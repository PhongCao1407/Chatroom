import "./homePage.css";
import userImage from "./static/User.png";
import upvote from "./static/upvote.svg";
import downvote from "./static/downvote.svg";
import bannerImage from "./static/Caspar David Friedrich/Landschaft mit Gebirgssee, Morgen.jpeg"
import comment from "./static/Comment.png"

import testService from "../../services/testService";


const HomePage = () => {
    return (
        <main>
            <div className="posts">
                <div className="create-post">
                    <img src={userImage} alt="" srcSet=""/>
                    <input type="text" placeholder="Create Post.." className="create-post-input"/>
                </div>
                <div className="user-posts">
                    <div className="post">
                        <div className="like-bar">
                            <img src={upvote} alt="" className="up arrow"/>
                            <p>0</p>
                            <img src={downvote} alt="" className="down arrow"/>
                        </div>
                        <div className="post-display">
                            <div className="post-info">
                                <p className="post-subthread-name">c/Home</p>
                                <p className="post-username">u/User123456</p>
                            </div>
                            <div className="post-title">
                                <h2>Lorem</h2>
                            </div>
                            <div className="main-post-display">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nibh ut nisl sagittis, 
                                vel condimentum mi molestie. Integer vitae volutpat eros, vitae cursus tellus. Phasellus maximus pretium malesuada.
                            </div>
                            <div className="post-options">
                                <img src={comment} alt=""/>
                                <p>0 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        <button onClick={() => {testService.testCreatePostButton()}}>Create Post</button>
                    </div>
                    <div className="create-community-option option">
                        <button>Create Subthread</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export {HomePage};