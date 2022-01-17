// components
import{Route,Routes} from 'react-router'
import {Home} from "../Home/Home"
import Header from "../header/header";
import Artist from '../artists/Artist';
import Folk from '../folk/Folk';
import First from "../first/First";
import Input from '../input/Input';
import Zayavka from '../zayavka/Zayavka';
import Fm from '../fm/Fm';
import About from '../about/About';
import Bilet from '../bilet/Bilet';


// lib

// css
import "./app.scss";


const App = () => {
  return <div className="appContainer">
  
    <Input />
    <Header />
    <Routes>
    <Route path="/folk" element={<Folk/>} />
      <Route path="/artist" element={<Artist/>} />
      <Route path="/home" element={<First/>} />
      <Route path='/about' element={<About />} />
      <Route path='/zayavka' element={<Zayavka />} />
      <Route path='/fm' element={<Fm />} />
      <Route path="/bilet" element={<Bilet/>} />
    </Routes>
  </div>;
};

export default App;
