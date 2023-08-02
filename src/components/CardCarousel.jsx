import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../styles/components/CardCarousel.scss';

// const data = [
//   {
//     id: 1,
//     image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690512553/casas/a1_k7qgok.webp',
//   },
//   {
//     id: 2,
//     image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690512553/casas/a2_wud5dw.webp',
//   },
//   {
//     id: 3,
//     image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690512553/casas/a3_k9poyp.webp',
//   },
//   {
//     id: 4,
//     image: 'https://res.cloudinary.com/dahm4ko9b/image/upload/v1690512553/casas/a4_rxdb8u.webp',
//   },

// ];

function CardCarousel(props) {
  const navigate = useNavigate();
  const data = props.imagesCard;

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Carousel
      className='carousel__main'
      slidesToScroll={1}
      withControls={mobile ? false : true}
      breakpoints={[{ maxWidth: 'sm', slideGap: '15px' }]}
      withIndicators
      styles={{
        control: {
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        },
        indicator: {
          width: 6,
          height: 6,
          borderRadius: '50%',
        },
      }}
    >
      {data.map((item) => {
        <Carousel.Slide>
          <button
            className='carousel__list__button__heart'
            onClick={() => navigate(`/rent/${props.linkto}`)}
          >
            {item}
          <img src={item} />
          </button>
          </Carousel.Slide>;
      })}
    </Carousel>
  );
}

export default CardCarousel;
