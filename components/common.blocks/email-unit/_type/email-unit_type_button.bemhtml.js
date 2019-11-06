block( 'email-unit' ).mod( 'type', 'button' )(
  def()( ( node, ctx ) => {
    ctx.styleTbody = 'padding:0;text-align:left;vertical-align:top;';
    ctx.styleTr = 'padding:0;text-align:left;vertical-align:top;';
    ctx.styleTd = 'Margin:0;background: 0 0;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word;border-collapse:collapse !important;font-family:Arial,sans-serif;'
      + `border:${ ctx.border ? ` ${ ctx.border }` : 'none' };`
      + `color:${ ctx.color ? ` ${ ctx.color }` : 'inherit' };`
      + `font-size:${ ctx.fontSize ? ` ${ ctx.fontSize }` : 'inherit' };`
      + `font-weight:${ ctx.fontWeight ? ` ${ ctx.fontWeight }` : 'inherit' };`
      + `line-height:${ ctx.lineHeight ? ` ${ ctx.lineHeight }` : 'inherit' };`
    ctx.styleCenter = 'min-width:0;width: 100%;';
    ctx.styleLink = 'Margin:0;margin:0;border:0 solid transparent;border-radius:0;color:#fff;display:inline-block;font-family:Arial,sans-serif;text-align:center;text-decoration:none;'
      + `font-size:${ ctx.fontSize ? ` ${ ctx.fontSize }` : 'inherit' };`
      + `font-weight:${ ctx.fontWeight ? ` ${ ctx.fontWeight }` : 'inherit' };`
      + `line-height:${ ctx.lineHeight ? ` ${ ctx.lineHeight }` : 'inherit' };`
      + `padding:${ ctx.padding ? ` ${ ctx.padding }` : '0' };`

    return applyNext()
  } ),
  attrs()( ( node, ctx ) => ( {
    style: `;Margin:0${ ctx.horizonMargin ? ` ${ ctx.horizonMargin }` : '' };`
      + `margin:0${ ctx.horizonMargin ? ` ${ ctx.horizonMargin }` : '' };`
      + 'border-collapse:collapse;'
      + 'border-spacing:0;'
      + 'text-align:left;'
      + 'vertical-align:top;'
      + 'padding:0;'
      + 'font-family:Arial,sans-serif;'
      + 'padding:0;'
      + 'max-width:100%;'
      + `width:${ ctx.width ? `${ ctx.width }px` : '100%;' };`
      + `${ ctx.bgcolor ? `background:${ ctx.bgcolor };` : '' }`,
    bgcolor: ctx.bgcolor ? ctx.bgcolor : '',
    width: ctx.width ? ctx.width : '',
    cellpadding: 0,
    cellspacing: 0,
    valign: 'top',
    border: 0,
  } ) ),
  content()( ( node, ctx ) => [
    {
      elem: 'tbody',
      styleTbody: ctx.styleTbody,
      content: {
        elem: 'tr',
        styleTr: ctx.styleTr,
        content: {
          elem: 'td',
          styleTd: ctx.styleTd,
          content: {
            elem: 'center',
            styleCenter: ctx.styleCenter,
            content: {
              block: 'link',
              content: ctx.content,
              url: ctx.url,
              attrs: {
                style: ctx.styleLink,
              },
            },
          },
        },
      },
    },
  ] ) );
