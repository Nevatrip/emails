block( 'email-unit' ).mod( 'type', 'param' )(
  attrs()( () => ( {
    style: 'border-collapse: collapse; border-spacing: 0; display: inline-block; padding: 0; text-align: left; vertical-align: top; width: auto;',
    cellpadding: 0,
    cellspacing: 0,
    border: 0,
  } ) ),
  content()( ( node, ctx ) => [ {
    elem: 'tbody',
    content: {
      elem: 'tr',
      attrs: {
        style: 'padding: 0; text-align: left; vertical-align: top;',
      },
      content: {
        elem: 'td',
        attrs: {
          style: 'Margin: 0; border-collapse: collapse !important; color: #252929; font-family: Arial,sans-serif; font-size: 15px; font-weight: 400; line-height: 19px; margin: 0; padding: 0; text-align: left; vertical-align: top; word-wrap: break-word;',
        },
        content: [
          {
            block: 'email-unit',
            mods: { type: 'spacer' },
            height: '7',
          }, // spacer
          {
            block: 'email-text',
            mods: { tag: 'p' },
            color: '#514c46',
            fontSize: '22px !important',
            fontWeight: '400 !important',
            lineHeight: '22px !important',
            align: 'left',
            padding: '0 20px 0 0',
            content: [
              {
                tag: 'b',
                content: ctx.title,
              },
              ctx.titleEn && {
                html: '&nbsp;/&nbsp;',
              },
              ctx.titleEn && {
                tag: 'font',
                attrs: {
                  style: 'color:#486482;font-size:17.6px',
                },
                content: ctx.titleEn,
              },
            ],
          },
          {
            block: 'email-text',
            mods: { tag: 'p' },
            color: '#514c46',
            fontSize: '27px !important',
            fontWeight: '700 !important',
            lineHeight: '33px !important',
            align: 'left',
            padding: '0 20px 0 0',
            content: [
              ctx.content,
              ctx.contentEn && {
                tag: 'br',
              },
              ctx.contentEn && {
                tag: 'font',
                attrs: {
                  style: 'color:#486482;font-size:21.6px;font-weight:400',
                },
                content: ctx.contentEn,
              },
            ],
          },
          {
            block: 'email-unit',
            mods: { type: 'spacer' },
            height: '3',
          }, // spacer
        ],
      },
    },
  } ] ) );
