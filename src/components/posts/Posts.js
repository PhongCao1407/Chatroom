import './Posts.css'

import upvote from "./static/upvote.svg";
import downvote from "./static/downvote.svg";
import comment from "./static/Comment.png"

import postService from '../../services/postService';

import { useEffect, useState } from 'react';

const Post = ({post}) => {

    return (
        <div className="post">
            <div className="like-bar">
                <img src={upvote} alt="" className="up arrow" />
                <p>{post.postUpvote}</p>
                <img src={downvote} alt="" className="down arrow" />
            </div>
            <div className="post-display">
                <div className="post-info">
                    <p className="post-thread-name">{'c/' + post.threadName}</p>
                    <p className="post-username">{'u/' + post.username}</p>
                </div>
                <div className="post-title">
                    <h2>{post.postTitle}</h2>
                </div>
                <div className="main-post-display">
                    {post.postBody}
                </div>
                <div className="post-options">
                    <img src={comment} alt="" />
                    <p>{post.postComments.length} Comments</p>
                </div>
            </div>
        </div>
    )
}

const Posts = (props) => {
    const [postList, setPostList] = useState([])

    const getAllPosts = () => {
        postService.getAllPosts()
            .then(posts => {
                setPostList(posts)
            })
    }

    const getThreadPosts = () => {
        postService.getAllPostsFromThread(props.thread)
            .then(posts => {
                setPostList(posts)
            })
    }

    useEffect(() => {
        if (props.thread === 'Home') {
            getAllPosts()
        } else {
            getThreadPosts()
        }
    }, [props.thread])

    return (
        <div className="posts">
            {postList.map((post, index) => {
                return (
                    <Post 
                        key={post.threadName + index}
                        post={post}/>
                )
            })}
        </div>
    )
}

export { Posts }
