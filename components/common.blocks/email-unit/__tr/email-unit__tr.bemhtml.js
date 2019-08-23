block( 'email-unit' ).elem( 'tr' )(
  tag()( 'tr' ),
  addAttrs()( ( node, ctx ) => {
    const bgcolorStyle = ctx.bgcolor ? `background:${ ctx.bgcolor };` : '';

    return {
      style: ( ctx.styleTr || '' ) + bgcolorStyle,
      bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    }
  } ),
);
