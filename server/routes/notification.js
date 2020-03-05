const getOrders = require( '../request/getOrders' );

const action = async ( context, params ) => {
  const api = await getOrders( context.query );

  if ( api ) {
    return {
      page: 'notification',
      params,
      api,
    }
  }

  return {
    page: 'error',
    params,
  }
};

module.exports = action;
