block( 'email-unit' ).mod( 'type', 'row' )(
  content()( ( node, ctx ) => [
    {
      elem: 'tbody',
      content: {
        elem: 'tr',
        content: ctx.content,
      },
    },
  ] ) );
