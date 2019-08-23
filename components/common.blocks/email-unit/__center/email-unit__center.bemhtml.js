block( 'email-unit' )
  .elem( 'center' )(
    tag()( 'center' ),
    addAttrs()( ( node, ctx ) => {
      const bgcolorStyle = ctx.bgcolor ? `background:${ ctx.bgcolor };` : '';

      return {
        style: ( ctx.styleCenter || '' ) + bgcolorStyle,
        bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
      }
    } ),
  );
