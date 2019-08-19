block( 'email-unit' ).mod( 'type', 'container' )(
  content()( ( node, ctx ) => [
    {
      elem: 'tbody',
      bgcolor: ctx.bgcolor,
      content: {
        elem: 'tr',
        bgcolor: ctx.bgcolor,
        content: {
          elem: 'td',
          bgcolor: ctx.bgcolor,
          content: {
            elem: 'center',
            bgcolor: ctx.bgcolor,
            content: ctx.content,
          },
        },
      },
    },
  ] ) );
