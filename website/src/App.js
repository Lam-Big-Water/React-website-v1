import React,{Fragment} from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Servicers from './components/pages/Servicers';
import SignUp from './components/pages/SignUp';

export default function App() {
  return (
    <Fragment>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Servicers" element={<Servicers/>}/>
					<Route path="/Product" element={<Product/>}/>
					<Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
    </Fragment>
  )
}
