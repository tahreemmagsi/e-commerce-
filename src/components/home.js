
import React from 'react';
import { Slide,Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "../images/bannerImgOne.webp"
import img2 from"../images/bannerImgTwo.webp"
import img3 from "../images/bannerImgThree.webp"
import { Link } from 'react-router-dom';
import Featureproduct from './featureproduct';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
    { src: img1 },
    { src: img2 },
    { src: img3 }
  ];
function Home(){
    return (
      <>
      <div className="slide-container h-full">
        <Fade>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
             <Link to="/shop"> 
              <div className='max-sm:w-auto' style={{ ...divStyle, backgroundImage: `url(${slideImage.src})` }}></div>
            </Link>
            </div>
          ))} 
        </Fade>
      </div>
      <Featureproduct/>
      </>
      
    )
}

export default Home