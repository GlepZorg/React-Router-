import './App.css'
import {Routes, Route, Link} from 'react-router-dom';
import Red from './component/Red';
import Blue from './component/Blue';
import Home from './component/Home';

function App() {
  

  return (
    <>
      <div id="container">
      <div id="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/blue"}>Blue</Link>
        <Link to={"/red"}>Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element = {<Home></Home>} />
          <Route path='/blue' element={<Blue></Blue>} />
          <Route path='/red' element={<Red></Red>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
