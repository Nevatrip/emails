block( 'email-text' ).mod( 'style', 'invisible' )(
  addAttrs()(
    {
      style: 'color:transparent;'
        + 'font-size:0px;'
        + 'text-align:center;'
        + 'display:block;'
        + 'height:0;'
        + 'width:0;'
        + 'overflow:hidden;',
    },
  ),
  content()( ( node, ctx ) => ctx.content ),
);
