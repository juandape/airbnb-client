import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Root from '../layout/root'
import Home from '../pages/Home';
import HeaderHost from '../components/HeaderHost';
import Modal from '../pages/Modal';
import RentElement from '../pages/RentElement';
import HomeHost from '../pages/HomeHost';
import HostingListing from '../pages/HostingListing';
import HostForm from '../pages/HostForm';
import HostingListingEditing from '../pages/HostingListingEditing';
import ClientTrips from '../pages/ClientTrips';
import HostingReservations from '../pages/HostingReservations';
import ConfirmationPay from '../pages/ConfirmationPay';

const router = createBrowserRouter([
  {
  path: '/',
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hosting',
        element: <HeaderHost />,
        children: [
          {
            index: true,
            element: <HomeHost />,
          },
          {
            path: 'listing',
            element: <HostingListing />
          },
          {
            path: 'reservs',
            element: <HostingReservations />
          },
          {
            path: 'editing',
            children: [
              {
                path: ':id',
                element: <HostingListingEditing />
              }

            ],
          },
        ],

      },
      {
        path: 'trips',
        element: <ClientTrips />
      },
      {
        path: 'becomehost',
        element: <HostForm />
      },
      {
        path: 'rent',
        children: [
          {
            path: ':id',
            element: <RentElement />
          },
          {
            path: ':id/confirmationPay',
            element: <ConfirmationPay />
          },
        ],
      },
      {
        path: 'modal',
        element: <Modal />
      },

    ]
  }
]);

export default router;
