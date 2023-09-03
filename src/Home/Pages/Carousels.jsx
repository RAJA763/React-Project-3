import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import items from '../../Datas/Home & PlaceToVisit/CarouselData';

const Carousels = () => {
    return (
    <div className='body'>
    <Carousel>
        {items.map((item) => (
            <Carousel.Item key={item.id} className='carousel-img'>    
                <img 
                    src={item.imgsrc} 
                    alt={item.name}
                    className='w-100'
                    style={{height:'560px'}} 
                    />
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
  )
}

export default Carousels;