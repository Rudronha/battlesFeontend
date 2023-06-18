import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from './components/common/footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/team' element={<Team/>} />
      <Route exact path='/contact' element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
