import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';


 const CarouselBox = () => {
     return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="https://weproject.media/upload/medialibrary/358/3583e72be40b35f08783e1b896823e0a.JPG"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-40"
            src="https://i.ytimg.com/vi/m7i_IgMobSQ/maxresdefault.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="https://sun9-35.userapi.com/UcwjAUnHlbxvGThIPoSo7n-Dog2QAJh9yENs4Q/dRyXkBzz6qU.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
    
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
     )
 }
 
 export default CarouselBox