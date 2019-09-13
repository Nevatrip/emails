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
          content: ctx.align==='center'
            ? {
              elem: 'center',
              bgcolor: ctx.bgcolor,
              content: ctx.content,
            }
            : ctx.content,
        },
      },
    },
  ] ) );
