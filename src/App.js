
import './App.css';
import Addstd from './components/Addstd';
import Table from './components/Table';
import { BrowserRouter,Routes,Route, useParams} from 'react-router-dom';
import UpdateStudent from './components/UpdateStudent';


function App() {
  return (
    <div className="container m-2">
      <h3 className='h3 text-dark text-start'>Student Management System</h3>
      <BrowserRouter>
      <Routes>
        <Route exact path ="/" element={<Table />}></Route>
        <Route exact path ="/students" element={<Table />}></Route>
        <Route exact path ="/addstd/" element={<Addstd />}></Route>
        {/* <Route exact path ={"/students/:id"} element={<UpdateStudent />}></Route> */}
        <Route exact path ="/update/:id" element={<UpdateStudent />}></Route>
        
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;









