block( 'page' )
  .mod( 'route', 'web' )( {
    route: [
      {
        block: 'email',
        elem: 'preamble',
      },
      {
        block: 'email',
        elem: 'content',
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
