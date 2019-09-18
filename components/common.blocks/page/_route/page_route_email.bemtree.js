block( 'page' )
  .mod( 'route', 'email' )( {
    route: [
      {
        block: 'email',
        elem: 'preamble',
      },
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'email' },
      },
      {
        block: 'email',
        elem: 'ban-adaptability',
      },
      {
        block: 'email',
        elem: 'common-styles',
      },
    ],
  } );
