block( 'email-unit' ).elem( 'td' )(
  tag()( 'td' ),
  addAttrs()( ( node, ctx ) => {
    const widthStyle = ctx.width ? `width:${ ctx.width }px;` : '';
    const bgcolorStyle = ctx.bgcolor ? `background:${ ctx.bgcolor };` : '';
    const verticalAlignStyle = ctx.verticalAlign ? `vertical-align:${ ctx.verticalAlign };` : '';

    return {
      style: ( ctx.styleTd || '' ) + widthStyle + bgcolorStyle + verticalAlignStyle,
      bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
      width: ctx.width ? ctx.width : '',
      valign: ctx.verticalAlign ? ctx.verticalAlign : '',
    }
  } ),
);
