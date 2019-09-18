block( 'page' )
  .mod( 'route', 'print' )( {
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
