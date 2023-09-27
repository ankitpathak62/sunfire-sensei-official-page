import './App.css';
import React, { } from 'react';
import Navbar from './components/Navbar/Navbar';
import CenteredNavbar from './components/CenteredNavbar/CenteredNavbar';
import Intro from './components/Intro/Intro';
import CopyrightFooter from './components/CopyrightFooter/CopyrightFooter';
import ContactUs from './components/ContactUs/ContactUs';
import ImagePage from './components/ImagePage/ImagePage';

function App() {
  return (

    <div>
      <Navbar></Navbar>
      <CenteredNavbar></CenteredNavbar>
      <div className="peti">
        <Intro></Intro>
        <ImagePage></ImagePage>
        </div>
      <hr />
      <ContactUs></ContactUs>
      <CopyrightFooter></CopyrightFooter>

      <div></div>



    </div>

  )
}

// // export default Navbar;



export default App;
