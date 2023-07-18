import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import '../styles/components/Filtercarousel.scss';
import ButtonFilter from './ButtonFilter';
import Impresionantes from '../../public/filterbar/Impresionantes.jpg';
import Minicasas from '../../public/filterbar/Minicasas.jpg';
import Parquesnacionales from '../../public/filterbar/Parquesnacionales.jpg';
import Artico from '../../public/filterbar/Artico.jpg';
import cabanas from '../../public/filterbar/cabanas.jpg';
import Islas from '../../public/filterbar/Islas.jpg';
import Diseno from '../../public/filterbar/Diseno.jpg';
import campamentos from '../../public/filterbar/campamentos.jpg';
import casasalpinas from '../../public/filterbar/casasalpinas.jpg';
import piscinas from '../../public/filterbar/piscinas.jpg';
import surf from '../../public/filterbar/surf.jpg';

const data = [
  {
    description: 'Impresionantes',
    image: Impresionantes,
  },
  {
    description: 'Minicasas',
    image: Minicasas,
  },
  {
    description: 'Parques nacionales',
    image: Parquesnacionales,
  },
  {
    description: 'Artico',
    image: Artico,
  },
  {
    description: 'Cabanas',
    image: cabanas,
  },
  {
    description: 'Islas',
    image: Islas,
  },
  {
    description: 'Diseno',
    image: Diseno,
  },
  {
    description: 'Campamentos',
    image: campamentos,
  },
  {
    description: 'Casas alpinas',
    image: casasalpinas,
  },
  {
    description: 'Piscinas',
    image: piscinas,
  },
  {
    description: 'Surf',
    image: surf,
  },
  {
    description: 'Impresionantes',
    image: Impresionantes,
  },
  {
    description: 'Minicasas',
    image: Minicasas,
  },
  {
    description: 'Parques nacionales',
    image: Parquesnacionales,
  },
  {
    description: 'Impresionantes',
    image: Impresionantes,
  },
  {
    description: 'Cabanas',
    image: cabanas,
  },
  {
    description: 'Islas',
    image: Islas,
  },
  {
    description: 'Diseno',
    image: Diseno,
  },
  {
    description: 'Campamentos',
    image: campamentos,
  },
  {
    description: 'Casas alpinas',
    image: casasalpinas,
  },
  {
    description: 'Piscinas',
    image: piscinas,
  },
  {
    description: 'Surf',
    image: surf,
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
