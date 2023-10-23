// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css'; // Create a CSS file for styling

const ContactUs = () => {
  return (
    <div className="contactus" id='contact'>
      <h1>Contact Us</h1>
      <div className="contact-container">
        <h2>Feel free to contact me!</h2>
        <div className="box">
       
        <div className="profile-picture"> 
        <a href="https://ankitpathak62themomentjourney.on.drv.tw/Ankit%20Portfolio/portfolio.html" target='_blank'><img
          src="founder.jpg" // Replace with your profile picture URL
          alt="Profile"
          className="circular-image"
          /></a>
          </div>
      </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAYFBMVEUAd7f///8AcLQAbLIAdbayzuOev9uOttcAcrW81edyps74+/1inMpMjMGsx+AAbrPm7/ZEjsIUfro7hL0AabGpwt3x9/troMuHsdQAZrDc6fMrfrrO3+1/qdBUkcTG2+tpNZ5gAAADcUlEQVRoge2b0baqIBCGEUbDdIelW03T3v8tD+ayMgdR1wbWOvlfdCPxNSDDzBDEeygKm/OFmNfl3IRRjyQPbsApB7BABpCkIBrIScssQF9ibdKTk5RbBRPC06QjR61tsES3kSQHdoe6Fws8Etm3uBOPSEidkGlIGkc2N+RsYxlPBWdycUS24TFXSno5IcVtjwgwGv/6of8bC2GTDdlP6A0Kz5k1MAffe5dvy+yHOx+pqq2s+SlY7ma1BasBqgnY824Wwga5iWA6COPkOkLJeW0aLHCTpdGmt7RrriAnhocbagXYy1Oz7xgvVGQvNkwuleSjWW/ikNwoyYVZMpxV4Kg17MWEipwQw+QsVJBD0/kAjxVkw4tKit1Q8N18PtDlWsj7ZdiDPSSwJX00v0lKscMEXFpKN1kxHvAotpbnchK+2JFPLOZ8INLDLcmjPLkdUquhfsemdZqmtd0U40kHK4Wq/0DAOadUfmwZLy7Yu8T7uw2cqR9ylpG2KQ9BEJRNe8nYulUBvDiNVbzWM0D5+XB4B4HVjZ+/u4LcP17YCtP5OJPsdBr2CyDTDeXUG8ZaH4mYc/9nseNF98mhjEMxp9495GT6ewdPtDQTpViWMWQYDOtfxoYiVmUInd3xMrO3kIU6cOxbLEJvIF81YNlkyZ6znlyoE5NXmwUxzXpyOTPHg5akZevJeMb9obt+qteTl0mfHZkiV1qjTZH1iZkx8l1XSzRG9nRxhjlyqRluc2RdUridnCfVvarUbiXSTPRWclKmPMsykTZY+fIhzcHFRvKJ0r5foHSaHvXSOJNt5MP1rQt2xBv9zjuTTWT/OuojO6Gtwr8nJ/RjBjN0F6nmt8ot5ONnl3jhNpmPwTeQk4l3ghQ1et6LbSAj58jZ9EhCar6ytYGMFOnwhvMLej0ZK9JRNCicD4nWk2+IP8bL1fPnvuvJJ2SZQouR41kntiH2RJYp/GAv91+TMXdsifyNNu/knWyWvK+q7yDv82yTvI/2d5D3ef4O8j7PNsn7aO/kFWQ02x8uEQissIhWAmqs8jpfMwC4T77x/AcNkGmHd9QQrCKmqQESEGU4Vpk9fyvw4POh4pyXFeGkm3mwFKcjjU++6czDcS9iaUvrcvc/fXd3E9zdx3B3B8XdvRt3d40c3q9yd6fM4T06h3cHPSf3Jf8BgA0/M+S7FpMAAAAASUVORK5CYII=" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdamYF9PEEHVZIrDdouW8abgviI3EmSTpL6N6x6ay0mA&s" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEX/////AAD/VVX/8fH/lJT/7u7/p6f/+/v/9/f/9PT/V1f/t7f/Hx//xMT/n5//eXn/6en/09P/zMz/mZn/UVH/W1v/Z2f/3t7/rKz/SEj/Kir/jIz/sLD/goL/b2//YGD/MjL/FRX/Pz+NjtXjAAADhUlEQVR4nO2a65KiMBBGQSDhDgEVFBDw/R9ywRl3rk59nUh2aqvPP6uUOoWk86Vpx2EYhmEYhmEYhmEYhmEY5r9CyjCKvCAoy6ZplKqyLOn7Vog8z+vav1HXywch2r5PsqxSavliWQaBF0WhlM90iRqVJa2o/W4oLsdxf7pO53SeXYB5Ts/T9bQfj5di6PxatEmmmsjUqOyH8TqliAFGOl3HoS8NjMTpeTYfOQk9Lyn2Wymt7IXGQxYUWyqtFAHVqdlt7eS6u4bmFB22d3LdA20h+jacXNenOFVPLAI/kVa4U7j5Q36nCGEpdbYldVawVGfLyXU7WOpqT+qKOjX2nFwXrVWJTakElLJUpF5AS9XFptQF25c9K1vMndiDpMrNUtR3nLBg1VisCEtNwJafmmxKTVhNr6xtMitnbE+mRITJeFGAQSEjSMWlMPyz0wySSmb8krtlXRSE739lxkp6T5NaVsbRRKuHpFrCFW9SjtcalLYWkhJkqaXgdtoBWkBSuYbU8h8Os55UDUlRQsKblBMmeidqKCZIShjevf+lJ3TKbofEBDnoSi3loaNrDYgU6Xz1ScqRVUyVgk5ZESXjfZZaHy1iebggZ3dDqaU8+KSdB5M6Gko5UlEucUSkvNFUaiHD08OI5GFSRH8k5Xg5ml8PiFRAWT8PpdbygF0iRhp6AaWH95MUWFp29qTwJYhJUbawR1KEfXBv507JirRWrEgRN0BMymz1RT3xLAutPqM6FWbkUAXVKZOKrgZ6KoYquv7eF+Q6QR3a+3RTQqh5pNkyulS6vXdISit5lhoP0ytQ8tTI6KUwaGlBGV2Sj1ikAv4FH2p6Eg+jyrBvmyNOpGN7XOamLTbs2E5pBZ2N3zODrSBK08wcsGn2Kxuxv7Jl7ZFP3iaAbxzkb3w341BKujED5kRqehqDlall27AphQ4BlDal4OmgTceBPrJHnWy+r8VHAJS1jSbFhyVIidgIKAu/QgkKJoAR4QVSJDYAisJ/IbVetIEaLu9oLOzKMXH8bckKui+AUOYBywcfkAmlqUBmTPTmdr3E6JXnD8zHROM23QmrvIhPU/okuTmdTnGRV/jQ28Mbdptozv1uWCeaDzt4ovk+z3xY55mHzs9v88wGt+gbpAzX2W/vNvutqnX0O+nb9uvod9v2yTr6Xam3ye8nj34zDMMwDMMwDMMwDMMwDPPv+QMTHkYRpMl+ywAAAABJRU5ErkJggg==" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

