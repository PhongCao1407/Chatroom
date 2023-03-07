import "./thread.css"

import {Posts} from "../posts/posts"
import {Sidebar} from "../sidebar/sidebar"


const Thread = () => {
    return (
        <main>
            <div className="post-display">
                <Posts/>
            </div>
            <Sidebar/>
        </main>
    )
}



export {Thread};