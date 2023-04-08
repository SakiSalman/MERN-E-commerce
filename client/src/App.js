import './App.css';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Panel from './Pages/AdminPanel/Panel';
import ProductTab from './Components/Admin/ProductTab';

function App() {
  return (
    <div className="App">
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />

      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/admin' element={<Panel></Panel>}>
              <Route path='product' element={<ProductTab></ProductTab>}/>
        </Route>
        <Route path='/shop' element={ <Shop></Shop>}/>
        <Route path='/blog' element={ <Blog></Blog>}/>
        <Route path='/contact' element={ <Contact></Contact>}/>
        <Route path='/faq' element={ <Faq></Faq>}/>
        <Route path='/sign-up' element={ <Signup></Signup>}/>
        <Route path='/sign-in' element={<Signin></Signin>}/>
        <Route path='*' element={'Not Found'}/>
      </Routes>
     
    </div>
  );
}

export default App;
