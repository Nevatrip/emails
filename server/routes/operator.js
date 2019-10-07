const getOrders = require( '../request/getOrders' );

const action = async ( context, params ) => ( {
  page: 'operator',
  params,
  api: await getOrders( context.query ),
} );

module.exports = action;
