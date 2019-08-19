block( 'email-unit' ).elem( 'td' )(
  tag()( 'td' ),
  addAttrs()( ( node, ctx ) => (
    {
      style: node.attrs.style + ( ctx.styleTd || '' ),
      bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    }
  ) ),
);
