import React,{Fragment} from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import About from './components/pages/About';
import Book from './components/pages/Book';
import Footer from './components/Footer/Footer';
export default function App() {

  return (
    <Fragment>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
					<Route path="/Product" element={<Product/>}/>
					<Route path="/Book" element={<Book/>}/>
        </Routes>
      <Footer/>
    </Fragment>
  )
}
