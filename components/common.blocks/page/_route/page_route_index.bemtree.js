block( 'page' )
  .mod( 'route', 'index' )( {
    route: [
      {
        block: 'email-preamble',
        content: 'преамбула',
      },
      {
        block: 'email-unit',
        mods: { type: 'container' },
        bgcolor: '#F3F3F3',
        content: {
          block: 'email-unit',
          mods: { type: 'container' },
          bgcolor: '#6999CC',
          width: '600',
          content: [
            {
              block: 'email-unit',
              mods: { type: 'spacer' },
              height: '4',
            },
            {
              block: 'email-unit', //шапка
              mods: { type: 'container' },
              width: '570',
              horizonMargin: 'auto',
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'row' },
                  width: '570',
                  content: [
                    {
                      elem: 'td',
                      width: '125',
                      verticalAlign: 'middle',
                      content: '1',
                    },
                    {
                      elem: 'td',
                      verticalAlign: 'middle',
                      content: '2',
                    },
                    {
                      elem: 'td',
                      width: '125',
                      verticalAlign: 'middle',
                      content: '3',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
  } );
