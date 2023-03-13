import './createPost.css'

import { Dropdown } from '../dropdown/Dropdown'

const CreatePost = () => {

    return (
        <form className="create-post create-post-unblur">
            <div className="create-post-title create-post-unblur" >
                <h1 id="create-post">Create a Post</h1>
            </div>

            <div className="create-post-main create-post-unblur">
                <div className="create-post-thread create-post-unblur">
                    <label htmlFor="thread create-post-unblur">Please Choose A Thread</label>
                    <Dropdown
                        isSearchable
                        placeHolder="Select The Thread.."
                        onChange={(value) => console.log(value)}
                        className="create-post-unblur"
                    />
                </div>
                <div className="create-post-fields create-post-unblur">
                    <h2 className="create-post-unblur">Create The Post</h2>
                    <div className="create-post-title create-post-unblur">
                        <label htmlFor="title" className="create-post-unblur">Post Title:</label>
                        <input type="text" className="create-post-unblur" />
                    </div>
                    <div className="create-post-body create-post-unblur">
                        <label htmlFor="body" className="create-post-unblur">Post Body:</label>
                        <textarea className="create-post-unblur"></textarea>
                    </div>
                </div>
                <div className="submit-buttons create-post-unblur">
                    <button className="submit create-post-unblur">Create Post</button>
                    <button className="cancel create-post-unblur">Cancel</button>
                </div>
            </div>
        </form>
    )
}

export { CreatePost }