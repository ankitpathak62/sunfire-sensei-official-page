import './App.css';
import React, { } from 'react';
import Navbar from './components/Navbar/Navbar';
import CenteredNavbar from './components/CenteredNavbar/CenteredNavbar';
import Intro from './components/Intro/Intro';
import CopyrightFooter from './components/CopyrightFooter/CopyrightFooter';
import ContactUs from './components/ContactUs/ContactUs';
import ImagePage from './components/ImagePage/ImagePage';
import NoteList from './components/NoteList/NoteList';
import NavBar from './components/Navbar/Navbar';
import NavBar1 from './components/Litenav/Litenav';


function App() {
  return (

    <div>
      {/* <Navbar></Navbar> */}
      <NavBar></NavBar>
      {/* <NavBar1></NavBar1> */}
      <CenteredNavbar></CenteredNavbar>
      <div className="peti"> 
        <Intro></Intro>
        <ImagePage></ImagePage>
      </div>
      

      <ContactUs></ContactUs>
      <hr />

      <NoteList></NoteList>


      <CopyrightFooter></CopyrightFooter>

      <div></div>



    </div>

  )
}





export default App;
