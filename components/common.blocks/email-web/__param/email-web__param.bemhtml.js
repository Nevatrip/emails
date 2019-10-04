block( 'email-web' ).elem( 'param' )(
  content()( ( node, ctx ) =>
    [
      {
        elem: 'param-h',
        content: [
          {
            tag: 'b',
            content: ctx.title,
          },
          {
            html: ' / ',
          },
          {
            block: 'text-en',
            mods: { inline: 'yes' },
            content: ctx.titleEn,
          },
        ],
      },
      {
        elem: 'param-p',
        content: {
          tag: 'b',
          content: [
            ctx.content,
            ctx.contentEn && {
              block: 'text-en',
              content: ctx.contentEn,
            },
          ],
        },
      },
    ]
  )
);
