import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane ends Bungalow.Whatcroft Mali Lane, RoadMach CW9 25G</p>
        <p className='p__cormorant'>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am </p>
      </div>
      <button className='custom__button' style={{marginTop:"2rem"}}>Visit Us</button>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="FindUs" />
    </div>

  </div>
);

export default FindUs;
