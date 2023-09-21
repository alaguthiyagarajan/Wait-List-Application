//Nav bar
function TopDisplay(){
    let display = <div style = {{backgroundColor : "#0d4fb1"}} className = "py-2 row position-fixed top-0 w-100 ps-2 border-top-0 border-start-0 border-end-0 border border-dark border-4">
                    <div className = "text-dark fs-5" style = {{fontWeight:"bolder"}}>Admin Panel</div>
                </div>

    return( display );
}

export default TopDisplay;