import React,{useEffect} from 'react'

import '../styles/Main/Main.scss';
 import {ImLocation} from 'react-icons/im'
import {BsClipboardCheck} from 'react-icons/bs'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css' 


const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle:'Huatulco',
    location: 'Oaxaca',
    fees: '$400',
    description: 'Huatulco is a center fully planned by the National Fund for Tourism Promotion (FONATUR), and is located on the Mexican Pacific coast. It is made up of thirty-six beaches with crystalline waters, many of them virgin, distributed in nine bays.',
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Acapulco',
    location: 'Guerrero',
    fees: '$600',
    description: 'Is a Mexican city and port located in the state of Guerrero, on the southern coast of the country, 405 km from Mexico City. It is the largest city in the state, also constituting the only metropolitan area in the state.',
  },
  {
    id:3,
    imgSrc:img3,
    destTitle: 'Cancun',
    location: 'Quintana Roo',
    fees: '$1000',
    description:'The main attraction in Cancun are its majestic beaches. The region is made up of 17 kilometers of white sand and sparkling turquoise water. Its coastline is made up of an infinite and spectacular marine life' ,
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Puerto Vallarta',
    location: 'Jalisco',
    fees: '$700',
    description: 'The enchanting beaches of Puerto Vallarta offer you 360 days of sunshine a year; you can visit them in any season.',
  },
  {
    id:5,
    imgSrc:img5,
    destTitle: 'Veracruz',
    location: 'Veracruz',
    fees: '$400',
    description: 'It is one of the beaches in Veracruz with soft, fine sand and calm waves.',
  },
  {
    id:6,
    imgSrc: img6,
    destTitle: 'Merida',
    location: 'Yucatan',
    fees: '$400',
    description: 'Mérida is characterized by its colonial architecture, in a sober style, where there are buildings with high ceilings and large windows (predominantly in the current Historic Center);',
  } 
]

const Main = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
},[]);  

  return (
    <section className='main container section'>

        <div className='secTitle'>
          <h3 data-aos="fade-right" className='title'>Most visited destinations</h3>
        </div>

        <div className='secContent grid'>
            {
              Data.map(({id, imgSrc, destTitle, location, fees, description}) => {
                    return (
                      <div data-aos="fade-up" key={id} className='singleDestination'>
                        <div className='imgDiv'>
                          <img src={imgSrc} alt={destTitle}/>
                        </div>

                        <div className='cardInfo'>
                          <h4 className='destTitle'>{destTitle}</h4>
                          <span className='state flex'>
                            <ImLocation className='icon' /> 
                            <span className='name'>{location}</span>
                          </span>

                          <div className='fees flex'>
                            <div className='price'>
                              <h5>{fees}</h5>
                            </div>
                          </div>

                          <div className='desc'>
                            <p>{description}</p>
                          </div>

                          <button className='btn flex'>
                            DETAILS <BsClipboardCheck className='icon' /> 
                          </button>
                        </div>
                      </div>
                    )
              })
            }
        </div>

    </section>
  )
}

export default Main