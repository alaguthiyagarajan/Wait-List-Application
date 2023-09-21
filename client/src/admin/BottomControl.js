import { useState } from "react";
//Create Edit Button Functions
function BottomControl( props ) {
    let [createbutton, setCreateButton] = useState("Create");
    let [editbutton, setEditButton] = useState("Edit");
    let pageChange = () => {
        let p = (props.page) ? 0:1;
        props . createUser(p);
        setCreateButton((props.page) ? "Create":"Back" );
    }

    let enableEdit = () => {
        let p = (props.edit ===0) ? 1:0;
        props.EnableEdit(p);
        setEditButton((props.edit) ? "Edit":"Back");
    }

    let btn=
        <>
            <div className="row py-2 position-fixed bottom-0 w-100 px-2 bg-primary border-bottom-0 border-start-0 border-end-0 border border-dark border-4">
                <button id = "CreateBtn" onClick = {pageChange} className = "col me-1 border-2 btn btn-dark"> {createbutton} </button>
                <button id = "EditBtn" onClick={enableEdit} className = "col ms-1 border-2 btn btn-dark">{ editbutton} </button>
            </div>
        </>

    return( btn );
}

export default BottomControl;