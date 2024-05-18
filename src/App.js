

import './App.css';
import Navbar from './component/Navbar';

import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import Design from './component/Design';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Design/>
    <Navbar/>
    <div className="layout">
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/> 
     </div>
    </>
  );
}

export default App;
