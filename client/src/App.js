import './App.css';
import Navbar from './Components/Navbar';
import CodeForInterview from './Components/CodeForInterview';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CodeForInterview />}/>
          <Route path="/all" element={ <AllUsers />}/>
          <Route path="/add" element={<AddUser />}/>
          <Route path="/edit/:id" element={<EditUser />}/>
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
