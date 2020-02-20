block( 'page' )
  .mod( 'route', 'notification' )( {
    route: [
      {
        block: 'email',
        elem: 'preamble',
      },
      {
        block: 'email',
        elem: 'content',
        elemMods: { view: 'notification' },
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
