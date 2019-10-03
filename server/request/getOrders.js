const Request = require( './_request' );

const getOrders = async ( { order } ) => {
  const orders = new Request( `https://api.nevatrip.ru/orders/${ order }`, { token: process.env.TOKEN } );
  const response = await orders.request();

  return response;
};

module.exports = getOrders;
