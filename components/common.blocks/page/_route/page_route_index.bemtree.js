block( 'page' )
  .mod( 'route', 'index' )( {
    route: [
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: `/email?order=${ process.env.ORDER_ID }`,
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
        url: `/print?order=${ process.env.ORDER_ID }`,
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
        url: `/web?order=${ process.env.ORDER_ID }`,
        content: 'WEB',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: `/operator?order=${ process.env.ORDER_ID }`,
        content: 'OPERATOR',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: `/notification?order=${ process.env.ORDER_ID }`,
        content: 'NOTIFICATION',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
      {
        block: 'link',
        url: `/operator-en?order=${ process.env.ORDER_ID }`,
        content: 'OPERATOR-EN',
      },
      {
        tag: 'br',
      },
      {
        tag: 'br',
      },
    ],
  } );
