block( 'email-text' )(
  attrs()( ( node, ctx ) => ( {
    style: 'Margin:0;Margin-bottom:0;font-family:Arial,sans-serif;margin:0 !important;margin-bottom:0;padding: 0;'
      + `${ ctx.align ? `text-align:${ ctx.align };` : '' }`
      + `${ ctx.color ? `color:${ ctx.color };` : '' }`
      + `${ ctx.fontSize ? `font-size:${ ctx.fontSize };` : '' }`
      + `${ ctx.fontWeight ? `font-weight:${ ctx.fontWeight };` : '' }`
      + `${ ctx.letterSpacing ? `letter-spacing:${ ctx.letterSpacing };` : '' }`
      + `${ ctx.lineHeight ? `line-height:${ ctx.lineHeight };` : '' }`
      + `${ ctx.padding ? `padding:${ ctx.padding };` : '' }`
      + `${ ctx.textTransform ? `text-transform:${ ctx.textTransform };` : '' }`
      + `${ ctx.textDecoration ? `text-decoration:${ ctx.textDecoration };` : '' }`,
    align: ctx.align ? ctx.align : '',
  } ) ),
);
