import "./thread.css"

import {Posts} from "../posts/posts"
import {Sidebar} from "../sidebar/sidebar"


const Thread = (props) => {
    return (
        <main>
            <div className="post-display">
                <Posts thread={props.thread}/>
            </div>
            <Sidebar thread={props.thread}/>
        </main>
    )
}



export {Thread};