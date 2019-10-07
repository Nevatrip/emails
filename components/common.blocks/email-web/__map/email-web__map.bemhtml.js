block( 'email-web' ).elem( 'map' )(
  content()( ( node, ctx ) => [
    {
      block: 'link',

      //url: ctx.link,
      attrs: {
        width: '540',
        style: 'display:block',
      },
      content: {
        block: 'image',
        url: ctx.image,
        alt: 'Открыть на яндекс карте/Open map on Yandex',
      },
    },
    {
      tag: 'center',
      content: [
        {
          block: 'link',
          url: ctx.link,
          attrs: {
            style: 'font-size:19px;text-decoration:underline!important;color:#6999cc!important;margin:0;line-height:23px;text-align: center;',
          },
          content: [
            {
              tag: 'b',
              content: 'Открыть на яндекс карте',
            },
            {
              tag: 'br',
            },
            {
              tag: 'font',
              attrs: {
                style: 'color:#486482;font-size:15.2px;line-height:18.4px',
              },
              content: 'Open map on Yandex',
            },
          ],
        },
      ],
    },
  ] )
);
