block( 'email-link' )(
  tag()( 'a' ),
  attrs()( ( node, ctx ) => ( {
    style: 'Margin:0;Margin-bottom:0;font-family:Arial,sans-serif;margin:0 !important;margin-bottom:0;padding: 0;'
      + `${ ctx.align ? `text-align:${ ctx.align };` : '' }`
      + `${ ctx.color ? `color:${ ctx.color };` : '' }`
      + `${ ctx.fontSize ? `font-size:${ ctx.fontSize };` : '' }`
      + `${ ctx.fontWeight ? `font-weight:${ ctx.fontWeight };` : '' }`
      + `${ ctx.letterSpacing ? `letter-spacing:${ ctx.letterSpacing };` : '' }`
      + `${ ctx.lineHeight ? `line-height:${ ctx.lineHeight };` : '' }`
      + `${ ctx.textTransform ? `text-transform:${ ctx.textTransform };` : '' }`,
    align: ctx.align ? ctx.align : '',
    href: ctx.url ? ctx.url : '',
    title: ctx.title ? ctx.title : '',
    target: ctx.target ? ctx.target : '',
  } ) ),
);
