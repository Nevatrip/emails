block( 'email-text' ).mod( 'style', 'simultaneous-interpretation' )(
  addAttrs()(
    {
      style: 'color:#486482;'
        + 'display:inline-block;'
        + 'font-size:.8em;',
    },
  ),

  // content()( ( node, ctx ) => {
  //   const content = ctx.content;
  //   (?<=en{)([\s\S]+?)(?=})
  //   en{english text}
  // } ),
);
