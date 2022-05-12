import React from 'react'
import { Carousel } from 'react-bootstrap';
import './Home.css'

function Home() {
  return (
    <>
      <Carousel>

        <Carousel.Item>
          <div className='img-container1'> </div>
          <Carousel.Caption>
            <h3>TWISTER XT AVAILABLE </h3>
            <p>THE NEWEST IN PERFORMANCE FOR FREESKATING</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <div className='img-container2'> </div>
          <Carousel.Caption>
            <h3>AUTUMN 2022 COLLECTION</h3>
            <p>CHECK OUT URBAN CLOTHING FOR THIS SEASON.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
        <div className='img-container3'> </div>
          <Carousel.Caption>
            <h3>UPGRADE TO HYDROGEN PRO</h3>
            <p>FOR YOU SPEED WHEELS NEEDS.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

      
    </>
  )
}

export { Home }