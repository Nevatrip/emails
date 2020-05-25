block( 'page' )
  .mod( 'route', 'notification' )( {
    route: [
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'notification' },
      },
      {
        block: 'email',
        elem: 'common-styles',
      },
    ],
  } );
