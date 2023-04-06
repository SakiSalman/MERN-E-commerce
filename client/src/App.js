import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layouts/Layout';
import Home from './Pages/Home/Home';
import 'boxicons/css/boxicons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/FAQ/Faq';
import Signup from './Pages/Auth/SignUp/Signup';
import Signin from './Pages/Auth/SignIn/Signin';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/shop' element={ <Shop></Shop>}/>
        <Route path='/blog' element={ <Blog></Blog>}/>
        <Route path='/contact' element={ <Contact></Contact>}/>
        <Route path='/faq' element={ <Faq></Faq>}/>
        <Route path='/sign-up' element={ <Signup></Signup>}/>
        <Route path='/sign-in' element={<Signin></Signin>}/>
      </Routes>
     
    </div>
  );
}

export default App;
