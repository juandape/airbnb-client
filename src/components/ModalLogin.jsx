import '../styles/components/ModalLogin.scss';
import ButtonImg from './ButtonImg';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { flipMenu } from '../store/headerSlice';
import Swal from 'sweetalert2';

const BASE_URL = import.meta.env.VITE_APP_AIRBACK;
const url = `${BASE_URL}/api/user/signin`;

const ModalLogin = ({ setExpired }) => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userEmail === '' && userPassword === '') {
      alert('Por favor llene el formulario antes de continuar');
    } else {
      try {
        const user = {
          email: userEmail,
          password: userPassword,
        };
        const { data } = await axios.post(url, user);
        console.log(data);

        Swal.fire({
          icon: 'success',
          title: 'Login exitoso',
          text: 'Bienvenido de nuevo a AirbnbClone',
        });

        localStorage.setItem('token', data.data.token);
        localStorage.setItem('rol', data.data.rol);
        //  cookies.set('tokenCookie', data.data.token);
        localStorage.setItem('email', data.data.email);
        localStorage.setItem('img', data.data.profileimg);
        dispatch(flipMenu(''));
        setExpired(false);
      } catch (err) {
        //console.log(err.response.status);
        err.response.status === 400
          ? Swal.fire('Usuario o Contraseña errada.')
          : Swal.fire('Ups! ocurrió algo en el login');
      }
    }
  };

  return (
    <>
      <div className='containerLogin'>
        <form onSubmit={handleSubmit}>
          <p>Iniciar sesión o registrate</p>
          <hr />
          <h1>Te damos la bienvenida a Airbnb</h1>
          <div className='wrapper'>
            <span htmlFor='email'>Correo electrónico</span>
            <input
              className='loginEmail'
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              id='email'
              type='email'
              placeholder='Correo electrónico'
            ></input>
          </div>
          <div className='wrapper'>
            <span htmlFor='password'>Contraseña</span>
            <input
              className='loginEmail'
              value={userPassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              id='password'
              type='password'
              placeholder=''
            ></input>
          </div>
          <button className='aceptarButton'> Continúa </button>
          <div className='ButtonsLogin'>
            <ButtonImg
              clase={'buttonLoginType facebook'}
              texto={'Continúa con Facebook'}
            />
            <ButtonImg
              clase={'buttonLoginType google'}
              texto={'Continúa con Google'}
            />
            <ButtonImg
              clase={'buttonLoginType apple'}
              texto={'Continúa con Apple'}
            />
            <ButtonImg
              clase={'buttonLoginType telefono'}
              texto={'Continúa con un teléfono'}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ModalLogin;
