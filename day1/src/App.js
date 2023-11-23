import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';
import Navbar from './component/Navbar';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/*' element={<Nopage/>}/>


      </Routes>
    </Router>
    </div>
   
  );
}
export default App;

