import React,{useEffect} from 'react'

import '../../styles/Footer/Footer.scss';
/* import video2 from '../../assets/video2.mp4'; */
import video2 from '../../assets/olas.jpg'; 
import { FiChevronRight, FiSend , FiYoutube, FiInstagram} from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {FaTwitter} from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css' 


const Footer = () => {
  useEffect(() =>{
    Aos.init({duration:2000})
},[]);  


  return (
    <section className='footer'>
      <div className='videoDiv'>
       {/*  <video src={video2} loop autoPlay muted type="video/mp4"></video> */}
        <img src={video2} alt=""/>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className='inputDiv flex'>
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
             SEND <FiSend className='icon'/> 
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href="#" className='logo flex'>
               <MdOutlineTravelExplore className='icon'/>Travel
              </a>
            </div>
            <div data-aos="fade-up" className='footerParagraph'>
              Lorem ipsum dolor sit amet, consectetur adopisicing elit. Ullam inventore
              eos fuga hic cum voluptatem minima, tempore non odio provident nobis ipsam at, doloremque sed nobisipsam at
              doloremque sed cupiditate ipsum in, atque soluta?
            </div>

            <div data-aos="fade-up" className='footerSocials flex'>
                <FaTwitter className='icon'/>
                <FiYoutube className='icon'/>
               <FiInstagram className='icon'/> 
              
            </div>

          </div>

          <div className='footerLinks grid'>

          {/* Group one */}
            <div data-aos="fade-up" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon'/> 
                Services
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> 
                Insurance
              </li>
              
              <li className='footerList flex'>
              <FiChevronRight className='icon'/> 
                Tourism
              </li>
              
              <li className='footerList flex'>
                 <FiChevronRight className='icon'/> 
                Payment
              </li>
            </div>


            {/* Group two */}
            <div data-aos="fade-up" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                 <FiChevronRight className='icon'/> 
                Bookings
              </li>
              
              <li className='footerList flex'>
                 <FiChevronRight className='icon'/> 
                Rentcars
              </li>
              
              <li className='footerList flex'>
                 <FiChevronRight className='icon'/> 
                HostelWorld
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/> 
                Trivago
              </li>
              
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>

            
           

          </div>

          <div  className='footerDiv flex'>
            <small>Design by Said Castillo</small>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Footer