block( 'email-unit' ).elem( 'tr' )(
  tag()( 'tr' ),
  addAttrs()( ( node, ctx ) => (
    {
      style: ctx.bgcolor ? `background:${ ctx.bgcolor };` : '',
      bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    }
  ) ),
  def()( node => {
    node.emailStyleTr = node.attrs.style;
    return applyNext()
  },
  ),
);
