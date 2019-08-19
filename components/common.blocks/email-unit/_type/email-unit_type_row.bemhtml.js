block( 'email-unit' )
  .mod( 'type', 'row' )(
    tag()( 'table' ),
    content()( ( node, ctx ) => [ {
      elem: 'tbody',
      content: {
        elem: 'tr',
        content: ctx.content,
      },
    } ] ) );
