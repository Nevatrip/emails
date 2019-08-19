block( 'email-unit' )
  .mod( 'type', 'spacer' )(
    tag()( 'table' ),
    def()( ( node, ctx ) => {
      ctx.styleTd = ctx.height
        ? `height:${ ctx.height }px;line-height:${ ctx.height }px;`
        : ';';
      return applyNext()
    } ),
    content()( ( node, ctx ) => [ {
      elem: 'tbody',
      content: {
        elem: 'tr',
        content: {
          elem: 'td',
          styleTd: ctx.styleTd,
          content: {
            html: '&nbsp;',
          },
          attrs: {
            height: ctx.height,
            style: ctx.styleTd,
          },
        },
      },
    } ] ) );
