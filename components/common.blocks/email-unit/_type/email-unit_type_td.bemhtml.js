block( 'email-unit' ).mod( 'type', 'td' )(
  tag()( 'td' ),
  attrs()( ( node, ctx ) => ( {
    style: `width:${ ctx.width ? `${ ctx.width }px` : 'auto;' };`
      + `${ ctx.valign ? `vertical-align:${ ctx.valign };` : '' };`
      + `${ ctx.align ? `text-align:${ ctx.align };` : '' };`
      + `${ ctx.fontWeight ? `font-weight:${ ctx.fontWeight };` : 'inherit' };`,
    colspan: ctx.colspan ? ctx.colspan : '',
    rowspan: ctx.rowspan ? ctx.rowspan : '',
    width: ctx.width ? ctx.width : '',
    valign: ctx.valign ? ctx.valign : '',
    align: ctx.align ? ctx.align : '',
  } ) ),
  content()( ( node, ctx ) => [
    ctx.content,
  ] ) );
