import "./thread.css"
import userImage from "./static/User.png";
import upvote from "./static/upvote.svg";
import downvote from "./static/downvote.svg";
import bannerImage from "./static/Caspar David Friedrich/Landschaft mit Gebirgssee, Morgen.jpeg"
import comment from "./static/Comment.png"

import testService from "../../services/testService";

import {Posts} from "../posts/posts"
import {Sidebar} from "../sidebar/sidebar"
import { CreatePost } from "../createPost/createPost";
import { LoginForm } from "../login/Login";

const Thread = () => {
    return (
        <main>
            <LoginForm/>
            {/* <CreatePost/> */}
            <div className="post-display">
                <div className="create-post-bar">
                    <img src={userImage} alt="" srcSet=""/>
                    <input type="text" placeholder="Create Post.." className="create-post-input"/>
                </div>
                <Posts/>
            </div>
            <Sidebar/>
        </main>
    )
}



export {Thread};