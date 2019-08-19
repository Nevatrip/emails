block( 'email-unit' )(
  content()( ( node, ctx ) => [
    {
      elem: 'tbody',
      content: {
        elem: 'tr',
        content: {
          elem: 'td',
          content: ctx.content,
        },
      },
    },
  ] ) );
