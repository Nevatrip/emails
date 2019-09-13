block( 'page' )
  .mod( 'route', 'index' )( {
    route: [
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: '/email',
        content: 'EMAIL',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: '/print',
        content: 'PRINT',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: '/web',
        content: 'WEB',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
    ],
  } );
