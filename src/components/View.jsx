const View =()=>{
    const std1 = {
        name: 'Abhinand',
        id: 1,
        email: 'abhinand@gmail.com'
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <label >Student id</label>
                        <label >{std1.id}</label>
                    </div>
                    <div className="col-md-6">
                        <label >Student Name</label>
                        <label >{std1.name}</label>
                    </div>
                    <div className="col-md-6">
                        <label >Student E-mail</label>
                        <label >{std1.email}</label>
                    </div>

                </div>
            </div>
        </div>
    );

}
export default View;