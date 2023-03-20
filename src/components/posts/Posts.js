import './Posts.css'

import upvote from "./static/upvote.svg";
import downvote from "./static/downvote.svg";
import comment from "./static/Comment.png"

import CloseIcon from "./static/CloseIcon.svg"

import postService from '../../services/postService';

import { useEffect, useState } from 'react';



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

    const Post = ({ id, post }) => {

        const deletePost = () => {
            postService.deletePost(post.id)
                .then(() => {
                    //Refresh page after deleting a post
                    window.location.reload()
                })
        }

        //Make sure the delete post button is only shown for the psot belonging to the user
        useEffect(() => {
            const deletePostButton = document.getElementById('delete-post-' + id)

            const userToken = window.localStorage
            if (userToken.length === 0) { //If the user is not logged in
                deletePostButton.style.visibility = 'hidden'
            } else {
                const username = JSON.parse(userToken.loggedChatroomUser).username

                if (username !== post.username) {
                    deletePostButton.style.visibility = 'hidden'
                } else {

                }


            }


        })

        return (
            <div className="post">
                <div className="delete-post" id={'delete-post-' + id}>
                    <button className="delete-button" onClick={deletePost}>
                        <img src={CloseIcon} alt="close icon" />
                    </button>
                </div>

                <div className="like-bar">
                    {/* <img src={upvote} alt="" className="up arrow" />
                    <p>{post.postUpvote}</p>
                    <img src={downvote} alt="" className="down arrow" /> */}
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
                    {/* <div className="post-options">
                        <img src={comment} alt="" />
                        <p>{post.postComments.length} Comments</p>
                    </div> */}
                </div>
            </div>
        )
    }

    return (
        <div className="posts">
            {postList.map((post, index) => {
                return (
                    <Post
                        key={index}
                        id={post.id}
                        post={post} />
                )
            })}
        </div>
    )
}

export { Posts }