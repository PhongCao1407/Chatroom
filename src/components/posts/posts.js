import './posts.css'

import upvote from "./static/upvote.svg";
import downvote from "./static/downvote.svg";
import comment from "./static/Comment.png"

const Post = () => {
    return (
        <div className="post">
            <div className="like-bar">
                <img src={upvote} alt="" className="up arrow" />
                <p>0</p>
                <img src={downvote} alt="" className="down arrow" />
            </div>
            <div className="post-display">
                <div className="post-info">
                    <p className="post-thread-name">c/Home</p>
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
                    <img src={comment} alt="" />
                    <p>0 Comments</p>
                </div>
            </div>
        </div>
    )
}

const Posts = () => {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export { Posts }