import { Carousel } from '@mantine/carousel';
import React from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import '../styles/components/Filtercarousel.scss';
import ButtonFilter from './ButtonFilter';

const data = [
  {
    description: 'Impresionantes',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Impresionantes_kvrahu.png',
  },
  {
    description: 'Minicasas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Minicasas_r6lrpm.png',
  },
  {
    description: 'Parques nacionales',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Parquesnacionales_epjxtn.png',
  },
  {
    description: 'Artico',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510591/filterbar/Artico_czzun2.png',
  },
  {
    description: 'Cabanas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/cabanas_vwlblr.png',
  },
  {
    description: 'Islas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Islas_tk2klq.png',
  },
  {
    description: 'Diseno',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Diseno_gagpif.png',
  },
  {
    description: 'Campamentos',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/campamentos_eau8ta.png',
  },
  {
    description: 'Casas alpinas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510591/filterbar/casasalpinas_fb2zj5.png',
  },
  {
    description: 'Piscinas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/piscinas_bci1ka.png',
  },
  {
    description: 'Surf',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/surf_fn2h1w.png',
  },
  {
    description: 'Impresionantes',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Impresionantes_kvrahu.png',
  },
  {
    description: 'Minicasas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Minicasas_r6lrpm.png',
  },
  {
    description: 'Parques nacionales',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Parquesnacionales_epjxtn.png',
  },
  {
    description: 'Artico',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510591/filterbar/Artico_czzun2.png',
  },
  {
    description: 'Cabanas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/cabanas_vwlblr.png',
  },
  {
    description: 'Islas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Islas_tk2klq.png',
  },
  {
    description: 'Diseno',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/Diseno_gagpif.png',
  },
  {
    description: 'Campamentos',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/campamentos_eau8ta.png',
  },
  {
    description: 'Casas alpinas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510591/filterbar/casasalpinas_fb2zj5.png',
  },
  {
    description: 'Piscinas',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/piscinas_bci1ka.png',
  },
  {
    description: 'Surf',
    image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690510592/filterbar/surf_fn2h1w.png',
  },

];

function FilterCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <div className='container__carousel'>
      <Carousel
        slideSize='max-content'
        slideGap='30px'
        align='start'
        slidesToScroll={3}
        className='filter__carousel'
        withControls={mobile ? false : true}
        dragFree
        breakpoints={[{ maxWidth: 'sm', slideGap: '15px' }]}
        styles={{
          control: {
            '&[data-inactive]': {
              opacity: 0,
              cursor: 'default',
            },
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <Carousel.Slide key={index} className='filter__carousel__item'>
              <img src={item.image} alt={item.description}></img>
              <span>{item.description}</span>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <ButtonFilter />
    </div>
  );
}

export default FilterCarousel;
