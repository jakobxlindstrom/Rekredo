import React from 'react';
import { useSelector } from 'react-redux';
import MyOrders from './Components/MyOrders';
import MyProps from './Components/MyProps';

const Summary = () => {
  const accountType = useSelector((state) => state.user.accountType);

  return (
    <>
      {accountType === 'Personal' && <MyProps />}
      {accountType === 'Business' && <MyOrders />}
    </>
  );
};

export default Summary;
