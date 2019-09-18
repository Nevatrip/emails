block( 'page' )
  .mod( 'route', 'web' )( {
    route: [
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'web' },
      },
    ],
  } );
