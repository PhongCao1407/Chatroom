import "./Thread.css"

import {Posts} from "../posts/Posts"
import {Sidebar} from "../sidebar/Sidebar"


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