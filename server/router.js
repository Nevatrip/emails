const UniversalRouter = require( 'universal-router' );
const generateUrls = require( 'universal-router/generateUrls' );

const home = require( './routes/home' );
const error = require( './routes/error' );
const email = require( './routes/email' );
const print = require( './routes/print' );
const web = require( './routes/web' );
const operator = require( './routes/operator' );
const notification = require( './routes/notification' );

const router = new UniversalRouter(
  {
    path: '',
    name: 'root',
    children: [
      {
        path: '',
        name: 'index',
        load: async () => await home,
      },
      {
        path: '/email',
        name: 'email',
        load: async () => await email,
      },
      {
        path: '/print',
        name: 'print',
        load: async () => await print,
      },
      {
        path: '/web',
        name: 'web',
        load: async () => await web,
      },
      {
        path: '/operator',
        name: 'operator',
        load: async () => await operator,
      },
      {
        path: '/notification',
        name: 'notification',
        load: async () => await notification,
      },
      {
        path: '(.*)',
        name: '404',
        load: async () => await error,
      },
    ],

    async action ( { next } ) {
      const route = await next() || {};

      return route;
    },
  },
  {
    resolveRoute ( context, params ) {
      params.urlTo = generateUrls( context.router );

      if ( typeof context.route.load === 'function' ) {
        return context.route.load().then( action => action( context, params ) );
      }
      if ( typeof context.route.action === 'function' ) {
        return context.route.action( context, params );
      }
      return undefined;
    },
  },
);

module.exports = router;
