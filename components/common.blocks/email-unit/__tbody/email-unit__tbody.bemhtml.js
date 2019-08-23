block( 'email-unit' ).elem( 'tbody' )(
  tag()( 'tbody' ),
  addAttrs()( ( node, ctx ) => {
    const bgcolorStyle = ctx.bgcolor ? `background:${ ctx.bgcolor };` : '';

    return {
      style: ( ctx.styleTbody || '' ) + bgcolorStyle,
      bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    }
  } ),
);
