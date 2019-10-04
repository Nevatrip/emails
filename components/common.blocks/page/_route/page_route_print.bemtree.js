block( 'page' )
  .mod( 'route', 'print' )( {
    route: [
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'print' },
      },
    ],
  } );
