const Request = require( './_request' );

const getOrders = async params => {
  const filter = {
    where: {
      'products.options.number': 121852,
    },
    fields: {
      sessionId: true,
      created: true,
      updated: true,
      products: true,
      user: true,
      id: true,
      status: true,
      source: true,
      payment: true,
      sum: true,
      isFullDiscount: true,
    },
    offset: 0,
    limit: 10,
    skip: 0,
    order: [ 'created' ],
    ...params,
  }

  const orders = new Request( 'https://api.nevatrip.ru/orders', { filter, token: process.env.TOKEN } );
  const response = await orders.request();

  return response;
};

module.exports = getOrders;
