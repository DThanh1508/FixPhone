// import './App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./components/header.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Content from './components/content';
import About from './components/about';
// import Header from './components/header';
// import Content from './components/content';
// import Footer from './components/footer';
// import Products from './props/props';
// import Contentt from './component-props/content/content';
// import Product from './component-state/product';
// import Product from './component-state/product';
// import Form1 from './component-form/vd1';
// import Vd3 from './component-form/vd3';
// import Score from './component-form/vd2';
// import Vd4 from './component-form/vd4';
// import ShopCafe from './component-form/vd5-shopCafe';
// import Menu from './component-form/vd5-shopCafe';
// import Product from './component-state/product';
// import {Create} from './component-state/product';
// import Product1 from './component-MistermTest/news';
// import Product2 from './component-MistermTest/news';

class Pro extends Component{
  render(){
    return (
      <>
        <header>
          <a to="#" className="logo">
            <img src="https://1.bp.blogspot.com/-FSJpfNUfiwQ/YVmBlwUDTuI/AAAAAAAABA8/UJWwUNLmi8A-dbv_FAwXhnnOh93BsJiAgCLcBGAsYHQ/s320/logo2.png" />
            <h1>Shop-TUTUTU</h1>
          </a>
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <img
              src="https://1.bp.blogspot.com/-TQ6sqw09POE/YVmBmHDNLtI/AAAAAAAABBE/h2kA7cyP42gurgfw1OttA8o6-9IFWvm7wCLcBGAsYHQ/s0/menu1.png"
              className="img1"
            />
            <img
              src="https://1.bp.blogspot.com/-7FrNzRkSTfA/YVmBmBWPd1I/AAAAAAAABBA/7ddyu0cIswgmBH3FCqUAuOnCU6Rq5bgbgCLcBGAsYHQ/s0/menu2.png"
              className="img2"
            />
          </label>
          <div className="links">
            <div>
              <Link to="/">Home</Link>
              <Link to="/Admin">Admin</Link>
              <Link to="/Content">Content</Link>
              <Link to="/About">About</Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/About" element={<About />} />
        </Routes>
        {/* <Header /> */}
        {/* <Product1/> */}
        {/* <Product2/> */}
        {/* <Content /> */}
        {/* <Contentt /> */}
        {/* <Create /> */}
        {/* <Product /> */}
        {/* <Form1 /> */}
        {/* <Vd3 /> */}
        {/* <Score /> */}
        {/* <Vd4 /> */}
        {/* <ShopCafe /> */}
        {/* <Menu /> */}
      </>
    );
  }
}

export default Pro;
// const TinhTong = () => {
//   let a = 16;
//   let b = 1;
//   let total = a+b;
//   return (
//     <div className="App">
//       <header className="App-header" id="total">
//         <h1>{a} + {b} = {total}</h1>
//       </header>
//     </div>
//     );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello Tuuuuuuuuuuuuuuuuu</h1>
//       </header>
//     </div>
//   );
// }

// function Tu(){
//   const show =
//   <div className="App">
//       <header className="App-header">
//         <h1>Hello</h1>
//       </header>
//     </div>;
//   return show;
// }