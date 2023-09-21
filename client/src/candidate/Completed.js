function Completed( props ){
    
    return (
        <div className = "vh-100 d-flex justify-content-center align-items-center" style = {{ flexDirection:"column"}} >
            <div className = "border border-2 border-dark rounded w-50 text-center py-4 bg-light" style = {{boxShadow:"0px 0px 17px 5px white"}}>
                <h1 className = "fw-bold">{ props.refer.rank }</h1>
                <h5 className = " my-3">Registered Successfully </h5>
            </div>
            <div className = "border border-3 mt-3 border-warning py-3 px-5" >
                <code >http://localhost:3000/candidate/{props.refer.id} </code>
            </div>
        </div>
    );
}

export default Completed;