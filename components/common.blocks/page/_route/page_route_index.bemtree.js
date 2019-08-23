block( 'page' )
  .mod( 'route', 'index' )( {
    route: [
      {
        block: 'email-text',
        mods: { tag: 'span', style: 'invisible' },
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
            }, //spacer
            {
              block: 'email-unit',
              mods: { type: 'container' },
              width: '570',
              horizonMargin: 'auto',
              content: {
                block: 'email-unit',
                mods: { type: 'row' },
                content: [
                  {
                    block: 'email-unit',
                    elem: 'td',
                    width: '125',
                    verticalAlign: 'middle',
                    content: {
                      block: 'link',
                      url: 'https://nevatrip.ru/',
                      title: 'NevaTrip.ru',
                      target: '_blank',
                      content: {
                        block: 'image',
                        alt: 'NevaTrip',
                        width: '125',
                        url: 'https://nevatrip.ru/assets/img/email/nt.png',
                      },
                    },
                  }, //лого
                  {
                    block: 'email-unit',
                    elem: 'td',
                    verticalAlign: 'middle',
                    content: {
                      html: '&nbsp;',
                    },
                  }, //space
                  {
                    block: 'email-unit',
                    elem: 'td',
                    width: '125',
                    verticalAlign: 'middle',
                    content: {
                      block: 'email-unit',
                      mods: { type: 'button' },
                      color: '#ffffff',
                      border: '3px solid #fff',
                      fontWeight: '15px',
                      lineHeight: '15px',
                      fontSize: '15px',
                      padding: '9px 3px 8px',
                      bgColor: 'transparent',
                      url: '#',
                      content: {
                        html: '<b>Печать</b>&nbsp;/&nbsp;Print',
                      },
                    },

                  }, //печать
                ],
              },
            }, //шапка
            {
              block: 'email-unit',
              mods: { type: 'spacer' },
              height: '4',
            }, //spacer
            {
              block: 'email-unit',
              mods: { type: 'container' },
              bgcolor: '#FFFFFF',
              width: '570',
              horizonMargin: 'auto',
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'spacer' },
                  height: '8',
                }, //spacer
                {
                  block: 'email-unit',
                  mods: { type: 'container' },
                  width: '540',
                  horizonMargin: 'auto',
                  content: [
                    {
                      block: 'email-text',
                      mods: { tag: 'p' },
                      color: '#a5a5a5',
                      fontSize: '23px',
                      fontWeight: '400',
                      letterSpacing: '.5px',
                      lineHeight: '26px',
                      align: 'center',
                      textTransform: 'lowercase',
                      content: [
                        {
                          block: 'email-text',
                          mods: { tag: 'b' },
                          content: 'Посадочный билет',
                        },
                        ' / ',
                        {
                          block: 'email-text',
                          mods: { tag: 'span', style: 'translation' },
                          content: 'Your E-ticket',
                        },
                      ],
                    }, //посадочный билет
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '8',
                    }, //spacer
                    {
                      block: 'email-text',
                      mods: { tag: 'h1' },
                      color: '#252929',
                      fontSize: '50px !important',
                      fontWeight: '700 !important',
                      letterSpacing: '.8px !important',
                      lineHeight: '50px !important',
                      align: 'center',
                      textTransform: 'uppercase !important',
                      content: {
                        block: 'email-text',
                        mods: { tag: 'font', style: 'inherit' },
                        color: '#252929',
                        fontSize: '50px !important',
                        fontWeight: '700 !important',
                        letterSpacing: '.8px !important',
                        lineHeight: '50px !important',
                        textTransform: 'uppercase !important',
                        content: 'NT000000',
                      },
                    }, // номер билета todo: если 2 номера то другой стиль
                    {
                      block: 'email-text',
                      mods: { tag: 'h2' },
                      color: '#252929',
                      fontSize: '30px !important',
                      fontWeight: '400 !important',
                      lineHeight: '32px !important',
                      align: 'center',
                      content: [
                        {
                          block: 'email-text',
                          color: 'red',
                          mix: {
                            block: 'link',
                            url: 'https://nevatrip.ru/',
                            title: 'Заголовок',
                            target: '_blank',

                          },
                          content: 'Заголовок',
                        },
                        {
                          tag: 'br',
                        },
                        {
                          block: 'link',
                          url: 'https://en.nevatrip.ru/',
                          title: 'Title',
                          target: '_blank',
                          mix: { block: 'email-text', mods: { style: 'translation' } },
                          content: 'Title',
                        },
                      ],
                    }, // название экскурсии
                  ],
                }, //содержимое
              ],
            }, //белый фон
          ],
        },
      },
    ],
  } );
