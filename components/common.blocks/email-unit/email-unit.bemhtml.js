block( 'email-unit' )(
  tag()( 'table' ),
  attrs()( ( node, ctx ) => ( {
    style: `;Margin:0${ ctx.horizonMargin ? ` ${ ctx.horizonMargin }` : '' };`
        + `margin:0${ ctx.horizonMargin ? ` ${ ctx.horizonMargin }` : '' };`
        + 'padding:0;'
        + 'font-family:Arial,sans-serif;'
        + 'padding:0;'
        + 'max-width:100%;'
        + `width:${ ctx.width ? `${ ctx.width }px` : '100%;' };`
        + `${ ctx.bgcolor ? `background:${ ctx.bgcolor };` : '' }`
        + `${ ctx.border ? `border:${ ctx.border };` : '' }`,
    bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    width: ctx.width ? ctx.width : '',
    cellpadding: ctx.cellpadding ? ctx.cellpadding : 0,
    cellspacing: ctx.cellspacing ? ctx.cellspacing : 0,
    border: 0,
  } ) ),
);
