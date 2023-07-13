import React, { useState } from 'react';
import { Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators,  CarouselCaption,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Carousel.css";


const items = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/bunker-store-2dbd4.appspot.com/o/biker-montando-motocicleta-antigua-aventura-blanco-negro-generada-ai.jpg?alt=media&token=1e45d53b-d77a-4a60-ac28-f91e19303a8c',
    altText: '',
    caption: 'Camisetas',
    key: 1,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/bunker-store-2dbd4.appspot.com/o/pilas-vaqueros-ropa-madera.jpg?alt=media&token=d665cf52-e08c-4a8c-b190-89b577037e40',
    altText: '',
    caption: 'Pantalones',
    key: 2,
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/bunker-store-2dbd4.appspot.com/o/gorras-punto-vista-superior.jpg?alt=media&token=421535c2-b550-45c4-94a7-ef9e31df9293',
    altText: '',
    caption: 'Gorros de invierno',
    key: 3,
  },
];

function Carrousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='carousel'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="imageCarousel" src={item.src} alt={item.altText}/>
        <CarouselCaption
          captionText={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel 
      className='carousel carousel-fade'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carrousel;