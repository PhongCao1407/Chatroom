import "./homePage.css";
import userImage from "./static/User.png";
import upvote from "./static/upvote.png";
import downvote from "./static/downvote.png";
import bannerImage from "./static/Caspar David Friedrich/Landschaft mit Gebirgssee, Morgen.jpeg"
import comment from "./static/Comment.png"
//Landschaft mit Gebirgssee, Morgen.jpeg 


const HomePage = () => {
    return (
        <main>
            <div class="posts">
                <div class="create-post">
                    <img src={userImage} alt="" srcset=""/>
                    <input type="text" placeholder="Create Post.." class="create-post-input"/>
                </div>
                <div class="user-posts">
                    <div class="post">
                        <div class="like-bar">
                            <img src={upvote} alt="" class="up arrow"/>
                            <p>0</p>
                            <img src={downvote} alt="" class="down arrow"/>
                        </div>
                        <div class="post-display">
                            <div class="post-info">
                                <p class="post-subthread-name">c/Home</p>
                                <p class="post-username">u/User123456</p>
                            </div>
                            <div class="post-title">
                                <h2>Lorem</h2>
                            </div>
                            <div class="main-post-display">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nibh ut nisl sagittis, 
                                vel condimentum mi molestie. Integer vitae volutpat eros, vitae cursus tellus. Phasellus maximus pretium malesuada.
                            </div>
                            <div class="post-options">
                                <img src={comment} alt=""/>
                                <p>0 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebar">
                <div class="mini-banner">
                    <img src={bannerImage} alt=""/>
                </div>
                <div class="subthread-name">
                    <h2>Home</h2>
                    <p>This is the Home subthread!</p>
                </div>
                <div class="sidebar-options">
                    <div class="line"></div>
                    <div class="create-post-option option">
                        <button>Create Post</button>
                    </div>
                    <div class="create-community-option option">
                        <button>Create Subthread</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export {HomePage};