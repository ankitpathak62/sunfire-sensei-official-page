import './App.css';
import React, { } from 'react'; 
import Navbar from './components/Navbar/Navbar';
import CenteredNavbar from './components/CenteredNavbar/CenteredNavbar';
import Intro from './components/Intro/Intro';
import CopyrightFooter from './components/CopyrightFooter/CopyrightFooter';
import ContactUs from './components/ContactUs/ContactUs';
import JoinUsButton from './components/JoinUsButton/JoinUsButton';

function App() {
  return (
   
<div>
  <Navbar></Navbar>
  <CenteredNavbar></CenteredNavbar>
  <Intro></Intro>
  <JoinUsButton></JoinUsButton>
  <hr />
  <ContactUs></ContactUs>
  <CopyrightFooter></CopyrightFooter>

  <div></div>



</div>

)}

// // export default Navbar;



export default App;
