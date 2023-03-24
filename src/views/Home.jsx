import React,{useEffect} from 'react'

import '../styles/Home/Home.scss';
 import {GrLocation} from 'react-icons/gr' 
import {HiFilter} from 'react-icons/hi';
/* import beach from '../assets/beach.mp4'; */
import beach from '../assets/agua.jpg';
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
/* import {MdOutlineList} from 'react-icons/md'  */
import {TbApps} from 'react-icons/tb' 

import Aos from 'aos'
import 'aos/dist/aos.css' 

const Home = () => {

useEffect(() =>{
      Aos.init({duration:2000})
  },[]);  
 
  return (
    <section className='home'>
      <div className='overlay'></div>
      {/* <video src={beach} muted autoPlay loop type="video/mp4"></video> */}
      <img src={beach} alt=""/>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span  data-aos="fade-up" className='smallText'>
            Our Packages
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>Search your Holiday in Mexico</h1>
        </div>
        
        <div  data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor="city">Search your destination: </label>
            <div className='input flex'>
              <input type="text" placeholder='Enter name here...'/>
               <GrLocation className="icon"/> 
            </div>
          </div>
          <div className='dateInput'>
            <label htmlFor="date">Search your date: </label>
            <div className='input flex'>
              <input type="date"/>
              
            </div>
          </div>
          <div className='priceInput'>
            <div className='label_total flex'>
              <label htmlFor="price">Max price:</label>
              <h3 className='total'>$1000</h3>
            </div>
            <div className='input flex'>
              <input type="range" max="100" min="300"/>
            </div>
          </div>
          <div className='searchOptions flex'>
           <HiFilter className='icon'/> 
              <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className='homeFooterIcons flex'>
          <div className='rightIcons'>
              <FiFacebook className='icon'/> 
              <BsInstagram className='icon'/>   
            
        
          </div>
          <div className='leftIcons'>
       {/*     <MdOutlineList className='icon'/>  */}
            <TbApps className='icon'/>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home