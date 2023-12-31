import '../styles/components/CardHomeHost.scss';
import { Modal } from '@mantine/core';
import { useState } from 'react';
import ModalCardHome from './ModalCardHome';
import ModalComment from './ModalComment';

const CardHomeClient = ({
  name,
  date,
  img,
  huespedes,
  llegada,
  salida,
  codigo,
  price,
  location,
  HomeId,
}) => {
  const [opened, setOpened] = useState(false);
  const [openedComment, setOpenedComment] = useState(false);
  const llegadaShow = new Date(llegada);
  const salidaShow = new Date(salida);

  return (
    <div className='CardHomeHost'>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow='inside'
        styles={{
          modal: {
            width: 550,
            borderRadius: 20,
          },
        }}
      >
        <ModalCardHome
          name={name}
          date={date}
          img={img}
          huespedes={huespedes}
          llegada={llegada}
          salida={salida}
          codigo={codigo}
          price={price}
        />
      </Modal>
      <Modal
        opened={openedComment}
        onClose={() => setOpenedComment(false)}
        overflow='inside'
        styles={{
          modal: {
            width: 550,
            borderRadius: 20,
          },
        }}
      >
        <ModalComment
          id={HomeId}
          set={setOpenedComment}
          state={openedComment}
        />
      </Modal>
      <button onClick={() => setOpened(true)}>
        <div className='CardHomeHost__row'>
          <div className='CardHomeHost__column'>
            <span>{name}</span>
            <span>{`${llegadaShow.toDateString().slice(4, -4)} - ${salidaShow
              .toDateString()
              .slice(4, -4)}`}</span>
            <span className='CardHomeHost__column__ligth'>{`Villa en ${location}`}</span>
          </div>
          <div className='CardHomeHost__row__img'>
            <img src={img} alt='profile logo'></img>
          </div>
        </div>
      </button>
      <hr className='CardHomeHost__span'></hr>
      <button
        onClick={() => setOpenedComment(true)}
        className='CardHomeHost__message'
      >
        Calificar
      </button>
    </div>
  );
};

export default CardHomeClient;
