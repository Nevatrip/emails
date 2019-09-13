block( 'email-text' ).mod( 'style', 'translation-param' )(
  addAttrs()(
    {
      style: 'color:#486482;'
        + 'font-size:21.6px;'
        + 'font-weight:400',
    },
  ),
  content()( ( node, ctx ) => ctx.content ),
);
