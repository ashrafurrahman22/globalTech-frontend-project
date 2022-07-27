import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shred/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shred/Header/Navbar';
import Services from './Pages/Services/Services';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Error from './Pages/ErrorPage/Error';

function App() {
  return (
    <div style={{backgroundColor:"#000655", color:"white"}}>

      <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/services' element={<Services></Services>} ></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='*' element={<Error></Error>} ></Route>
        </Routes>

        <Footer></Footer>

    </div>
  );
}

export default App;
