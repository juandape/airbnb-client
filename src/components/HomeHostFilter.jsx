import '../styles/components/HomeHostFilter.scss';
import { useState } from 'react';
import HomeHostFilterButton from './HomeHostFilterButton';
import { useDispatch, useSelector } from 'react-redux';
import { reserveShow } from '../store/hostReservationSlice';

const HomeHostFilter = () => {
  const agendadas = useSelector(
    (state) => state.hostReservation.agended.length
  );
  console.log(agendadas)
  const pasadas = useSelector(
    (state) => state.hostReservation.passed.length
  );
  const dispatch = useDispatch();
  const text = ['Agendadas - En curso', 'Anteriores'];

  const [selected, setSelected] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
  });

  const handleClick = (index) => {
    let keys = Object.keys(selected);
    keys.map((item) => {
      return setSelected((prev) => {
        return { ...prev, [item]: item === index ? true : false };
      });
    });
    if (index === '0') {
      dispatch({ type: reserveShow, payload: 'agended' });
    }
    if (index === '1') {
      dispatch({ type: reserveShow, payload: 'passed' });
    }
  };

  return (
    <div className='HomeHostFilter'>
      {text.map((item, index) => {
        return (
          <button key={index} onClick={() => handleClick(`${index}`)}>
            <HomeHostFilterButton
              select={selected[index] ? 'HomeHostFilterButton--open' : ''}
            >{`${item} (${
              index === 0 ? agendadas : pasadas
            })`}</HomeHostFilterButton>
          </button>
        );
      })}
    </div>
  );
};

export default HomeHostFilter;
