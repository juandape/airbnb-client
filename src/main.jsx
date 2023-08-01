import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
    </Provider>
);
