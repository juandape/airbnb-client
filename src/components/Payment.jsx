import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';


const Payment = ({ className, invoice, price, name }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const handleNavigate = () => {
    navigate('/confirmationPay');
  };
  // let params = useParams();
  // var handler = window.ePayco.checkout.configure({
  //   key: import.meta.env.VITE_APP_EPAYCO_PUBLIC_KEY,
  //   test: true,
  // });

  const handleClick = async () => {
    try {
      const card = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      const payload = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: price * 10,
          paymentMethod,
        }),
      };

      const BASE_URL = import.meta.env.VITE_APP_AIRBACK;
      const response = await fetch(`${BASE_URL}/payments`, payload);
      const data = await response.json();
      console.log(
        '🚀 ~ file: Checkoutform.jsx:46 ~ handleSubmit ~ data:',
        data
      );

      elements.getElement(CardElement).clear();

      if (response.status === 200) {
        Swal.fire({
          icon: 'info',
          html: '<h2>Payment Successful !</h2>' +
          `<div>${name}</div>` +
          `<h5>Your invoice number is ${invoice}</h5>`,
        });
        navigate('/');
      }
      if (error === 'card_declined') {
        return Swal.fire('payment failed', 'Please check your card details');
      }
    } catch (error) {
      console.log(error);
    }

    // handler.open({
    //   //Parametros compra (obligatorio)
    //   name: name,
    //   description: name,
    //   currency: 'cop',
    //   amount: price,
    //   tax_base: '0',
    //   tax: '0',
    //   country: 'co',
    //   lang: 'en',

    //   //Onpage="false" - Standard="true"
    //   external: 'false',

    //   //Atributos opcionales
    //   extra1: `${params.id}`,
    //   extra2: 'extra2',
    //   extra3: 'extra3',
    //   response: '',
    //   acepted: `${window.location.href}/confirmationPay`,

    //   //Atributos cliente
    //   name_billing: '',
    //   address_billing: 'Calle falsa 1233',
    //   type_doc_billing: 'cc',
    //   mobilephone_billing: '3101234567',
    //   number_doc_billing: '1234567896',

    //   //atributo deshabilitación metodo de pago
    //   methodsDisable: ['SP'],
    // });
  };

  return (
    <div className='reserve'>
      <div>
        <CardElement />
      </div>

      <button className={className} onClick={handleClick}>
        <span className='reserveIt'>Pagar</span>
      </button>
    </div>
  );
};

export default Payment;
