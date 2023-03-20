import './CreateThread.css'

import threadService from '../../services/threadService'

import { useEffect, useState } from 'react'


const CreateThread = () => {
    const [threadName, setThreadName] = useState('')
    const [threadDescription, setThreadDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        threadService.createNewThread(
            {threadName: threadName, threadDescription: threadDescription}
        ).then(() => {
            // The page is only reloaded after the thread has been created
            window.location.reload()
        })   
    }

    const cancelThreadCreate = (e) => {
        e.preventDefault()

        const App = document.getElementsByClassName('App')[0]
        App.classList.remove("AppBlur")

        const threadForm = document.getElementsByClassName('create-thread')[0]
        threadForm.style.visibility = "hidden"
    }

    return (
        <form className="create-thread create-thread-unblur"
            onSubmit={handleSubmit}>
            <div className="create-thread-title create-thread-unblur" >
                <h1 id="create-thread">Create a Thread</h1>
            </div>
            
            <div className="create-thread-main create-thread-unblur">
                <div className="create-thread-fields create-thread-unblur">
                    <h2 className="create-thread-unblur">Create The Thread</h2>
                    <div className="create-thread-title create-thread-unblur">
                        <label htmlFor="title" className="create-thread-unblur">Thread Name:</label>
                        <input type="text" className="create-thread-unblur"
                            onChange={(e) => setThreadName(e.target.value)}/>
                    </div>
                    <div className="create-thread-body create-thread-unblur">
                    <label htmlFor="body" className="create-thread-unblur">Thread Description:</label>
                        <textarea className="create-thread-unblur"
                            onChange={(e) => setThreadDescription(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="submit-buttons create-thread-unblur">
                    <button className="submit create-thread-unblur">Create Thread</button>
                    <button className="cancel create-thread-unblur" onClick={cancelThreadCreate}>Cancel</button>
                </div>
            </div> 
        </form>
    )
}

export {CreateThread}