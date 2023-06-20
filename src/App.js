import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Contact from "./components/contact/Contact"
import Footer from './components/common/footer/Footer';
import Main from './pages/Main';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
/*
<Header/>
 <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/team' element={<Team/>} />
      <Route exact path='/contact' element={<Contact/>} />
<Footer/>
 */