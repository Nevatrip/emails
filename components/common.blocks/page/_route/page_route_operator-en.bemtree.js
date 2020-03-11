block( 'page' )
  .mod( 'route', 'operator-en' )( {
    route: [
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'operator-en' },
      },
    ],
  } );
