block( 'email-unit' ).mod( 'type', 'dotted-line' )(
  content()( ( node, ctx ) => [ {
    elem: 'tbody',
    content: {
      elem: 'tr',
      content: {
        elem: 'td',
        styleTd: ctx.styleTd,
        content: {
          block: 'image',
          alt: '- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ',
          url: 'https://nevatrip.ru/assets/img/email/separator_lg.png',
          attrs: {
            style: '-ms-interpolation-mode:bicubic;'
              + 'clear:both;'
              + 'display:block;'
              + 'height:auto;'
              + 'max-width:100%;'
              + 'outline:0;'
              + 'text-align:center;'
              + 'text-decoration:none;'
              + 'width:100%;',
          },
        },
        attrs: {
          height: ctx.height,
        },
      },
    },
  } ] ) );
