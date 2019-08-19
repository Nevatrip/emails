block( 'email-unit' ).elem( 'tbody' )(
  tag()( 'tbody' ),
  addAttrs()( ( node, ctx ) => (
    {
      style: ctx.bgcolor ? `background:${ ctx.bgcolor };` : '',
      bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    }
  ) ),
  def()( node => {
    node.emailStyleTbody = node.attrs.style;
    return applyNext()
  },
  ),
);
