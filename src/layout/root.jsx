import { Outlet, useNavigation } from 'react-router-dom';
import React from 'react';

function Root() {
  const navigation = useNavigation();

  return (
    <>
      <main>
          <Outlet />
      </main>
    </>
  );
}

export default Root;