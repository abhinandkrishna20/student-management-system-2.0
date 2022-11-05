var Confirmbox = ()=>{
    return(
        <div className="container text-center text-light">
            <div className="row">
                <div className="col-md-4 offset-8">
        <div className='card bg-secondary'>
            <div className='card-body text-center'>
                <h1><i className='fa fa-trash'></i></h1>
                <h3>Are you sure to want Delete it</h3>
            </div>
            <div className='card-footer bg-dark'>
            <div className='row'>
                <div className="">
                <button className="btn col-md-6 btn-decoration-none text-light">Yes</button>
                <button className="btn col-md-6 btn-decoration-none  text-light">No</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Confirmbox;
