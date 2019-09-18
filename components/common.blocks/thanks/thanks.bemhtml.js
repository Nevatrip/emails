block( 'thanks' )(
  content()( ( node, ctx ) => [
    {
      elem: 'wrapper',
      content: [
        {
          elem: 'body',
          content: [
            {
              elem: 'email',
              content: ctx.content,
            },
            {
              elem: 'content',
              content: [
                {
                  elem: 'capt',
                  tag: 'p',
                  content: [
                    'Спасибо за покупку!',
                    {
                      block: 'text-en',
                      content: 'Thank you for order!',
                    },
                  ],
                },
                {
                  elem: 'postcapt',
                  tag: 'p',
                  content: [
                    'Ваш посадочный билет',
                    {
                      block: 'text-en',
                      content: 'Your boarding ticket',
                    },
                  ],
                },
                {
                  elem: 'num',
                  tag: 'p',
                  content: `NT${ ctx.number }`,
                },
                {
                  elem: 'p',
                  tag: 'p',
                  content: [
                    'Информация о Вашем заказе также отправлена на указанный Вами адрес -',
                    {
                      block: 'text-en',
                      content: 'Information about your order has also been sent to your email address -',
                    },
                    ctx.email,
                    {
                      tag: 'br',
                    },
                    '(Не пришло - проверьте спам).',
                    {
                      block: 'text-en',
                      content: '(Check spam box if you don\'t see the mail).',
                    },
                  ],
                },
                {
                  elem: 'p',
                  tag: 'p',
                  content: [
                    'Билет распечатывать не обязательно.',
                    {
                      block: 'text-en',
                      content: 'You don\'t need to print the ticket, just show it from mobile phone.',
                    },
                  ],
                },
                {
                  elem: 'promo',
                  content: [
                    {
                      elem: 'promo-capt',
                      tag: 'h4',
                      content: {
                        html: 'Ваш промокод на&nbsp;скидку&nbsp;5% на&nbsp;другую прогулку!',
                      },
                    },
                    {
                      elem: 'promo-content',
                      content: [
                        {
                          elem: 'promo-btn',
                          tag: 'p',
                          content: {
                            block: 'link',
                            url: 'https://nevatrip.ru/skidki-i-akcii',
                            target: '_blank',
                            mix: { block: 'thanks', elem: 'promo-btn-span' },
                            content: 'Спасибо',
                          },
                        },
                        {
                          elem: 'promo-txt',
                          tag: 'p',
                          content: [
                            {
                              html: 'Для использования скидки по&nbsp;промокоду'
                                + 'просто введите &laquo;СПАСИБО&raquo; (без кавычек) в'
                                + 'форме оплаты при оформлении бронирования'
                                + 'на&nbsp;сайте ',
                            },
                            {
                              block: 'link',
                              url: 'https://nevatrip.ru/',
                              content: 'nevatrip.ru',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ] )
);
