block( 'email-unit' )
  .elem( 'center' )(
    tag()( 'center' ),
    addAttrs()( ( node, ctx ) => (
      {
        style: ctx.bgcolor ? `background:${ ctx.bgcolor };` : '',
        bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
      }
    ) ),
    def()( node => {
      node.emailStyleCenter = node.attrs.style;
      return applyNext()
    },
    ),
  );
