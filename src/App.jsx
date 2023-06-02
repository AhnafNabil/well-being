// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import './App.css';
// import Residencies from "./components/Residencies/Residencies";
// import Value from "./components/Value/Value";
// import Contact from "./components/Contact/Contact";
// import GetStarted from "./components/GetStarted/GetStarted";
// import Footer from "./components/Footer/Footer";
import Home from "./Home";
import Notfound from './components/Notfound';
import Header from './components/Header/Header';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Expert from "./components/Expert";
import Ourvalue from "./components/Ourvalue";
import Contactus from "./components/Contactus";
import Getstarted from './components/Getstarted';
import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
       <Route index element={<Home/>}></Route>
       <Route path="expert" element={<Expert/>}></Route>
       <Route path="ourvalue" element={<Ourvalue/>}></Route>
       <Route path="contactus" element={<Contactus/>}></Route>
       <Route path="getstarted" element={<Getstarted/>}></Route>
       <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
