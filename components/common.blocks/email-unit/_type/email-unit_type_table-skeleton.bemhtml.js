block( 'email-unit' ).mod( 'type', 'skeleton' )(
  content()( ( node, ctx ) => [
    {
      elem: 'tbody',
      content: ctx.content,
    },
  ] ) );
