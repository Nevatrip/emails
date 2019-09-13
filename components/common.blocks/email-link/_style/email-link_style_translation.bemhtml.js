block( 'email-link' ).mod( 'style', 'translation' )(
  addAttrs()(
    {
      style: 'color:#486482;'
        + 'display:inline-block;'
        + 'font-size:.8em;',
    },
  ),
  content()( ( node, ctx ) => ctx.content ),
);
