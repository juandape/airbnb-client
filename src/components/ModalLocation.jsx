import '../styles/components/ModalLocation.scss';
import map1 from '../../public/image/map1.png';
import map2 from '../../public/image/map2.png';
import map3 from '../../public/image/map3.png';
import map4 from '../../public/image/map4.png';
import map5 from '../../public/image/map5.png';
import map6 from '../../public/image/map6.png';

const ModalLocation = () => {
  return (
    <>
      <div className='containerLocation'>
        <p>Búsqueda por región</p>
        <div className='item'>
          <button>
            <img
              src={map1}
              alt='map1'
              width='120px'
              height='120px'
            />{' '}
            Búsqueda flexible
          </button>
        </div>
        <div className='item'>
          <button>
            <img
              src={map2}
              alt='map2'
              width='120px'
              height='120px'
            />
            Europa
          </button>
        </div>
        <div className='item'>
          <button>
            <img
              src={map3}
              alt='map3'
              width='120px'
              height='120px'
            />
            México
          </button>
        </div>

        <div className='item'>
          <button>
            <img
              src={map4}
              alt='map4'
              width='120px'
              height='120px'
            />
            Estados Unidos
          </button>
        </div>
        <div className='item'>
          <button>
            <img
              src={map5}
              alt='map5'
              width='120px'
              height='120px'
            />
            España
          </button>
        </div>
        <div className='item'>
          <button>
            <img
              src={map6}
              alt='map6'
              width='120px'
              height='120px'
            />
            Caribeña
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalLocation;
