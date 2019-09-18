const Request = require( './_request' );

const getOrders = async () => {
  const orders = new Request( `https://api.nevatrip.ru/orders/${ process.env.ORDER_ID }`, { token: process.env.TOKEN } );
  const response = await orders.request();

  return response;
};

module.exports = getOrders;
