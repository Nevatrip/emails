block( 'page' )
  .mod( 'route', 'operator' )( {
    route: [
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'operator' },
      },
    ],
  } );
