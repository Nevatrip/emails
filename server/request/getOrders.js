const Request = require( './_request' );

const getOrders = async ( { order } ) => {
  const orders = new Request( `${ process.env.API }/orders/${ order }`, { token: process.env.TOKEN } );

  const response = await orders.request();

  return response;
};

module.exports = getOrders;
