import './createSubthread.css'


const CreateSubthread = () => {

    return (
        <form className="create-subthread create-subthread-unblur">
            <div className="create-subthread-title create-subthread-unblur" >
                <h1 id="create-subthread">Create a Subthread</h1>
            </div>
            
            <div className="create-subthread-main create-subthread-unblur">
                <div className="create-subthread-fields create-subthread-unblur">
                    <h2 className="create-subthread-unblur">Create The Subthread</h2>
                    <div className="create-subthread-title create-subthread-unblur">
                        <label htmlFor="title" className="create-subthread-unblur">Subthread Title:</label>
                        <input type="text" className="create-subthread-unblur"/>
                    </div>
                    <div className="create-subthread-body create-subthread-unblur">
                    <label htmlFor="body" className="create-subthread-unblur">Subthread Description:</label>
                        <textarea className="create-subthread-unblur"></textarea>
                    </div>
                </div>
                <div className="submit-buttons create-subthread-unblur">
                    <button className="submit create-subthread-unblur">Create Subthread</button>
                    <button className="cancel create-subthread-unblur">Cancel</button>
                </div>
            </div> 
        </form>
    )
}

export {CreateSubthread}