/* Функция возвращает время в нужном формате. */
const renderTime = date => {
  if ( !date ) return;
  return date.toLocaleTimeString( 'en', { hour: '2-digit', minute: '2-digit' } );
};

/* Функция возвращает дату в нужном формате. */
const renderDate = date => {
  if ( !date ) return;

  const hours = date.getHours();
  const optionsWithoutYear = { day: 'numeric', month: 'long' };
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newDay = new Date( date );

  /* Если выбранное время находится в промежутке с 21 вечера до 4 часов ночи, то выводится дата в формате "в ночь с... на...". */
  if ( hours > 21 ) {
    const nextDay = newDay.setDate( date.getDate() + 1 );

    return `On the night from
        ${ new Intl.DateTimeFormat( 'en-US', optionsWithoutYear ).format( date ) }
        to
        ${ new Intl.DateTimeFormat( 'en-US', options ).format( nextDay ) }`;
  } else if ( hours < 4 || hours === '0' ) {
    const prevDay = newDay.setDate( date.getDate() - 1 );

    return `On the night from
        ${ new Intl.DateTimeFormat( 'en-US', optionsWithoutYear ).format( prevDay ) }
        to
        ${ new Intl.DateTimeFormat( 'en-US', options ).format( date ) }`;
  }
  return new Intl.DateTimeFormat( 'en-US', options ).format( date );
};


block( 'email' ).elem( 'content' ).elemMod( 'view', 'notification' )( {
  content: node => {
    const order = node.data.api || {};

    const [
      {
        product: {
          directions = [],
          title: {
            en: {
              name: nameEn = '',
            } = {},
          } = {},
        },
        options,
      },
    ] = order.products;

    const [
      {
        number,
        direction,
        tickets,
        event: {
          start,
          timeOffset,
        },
      },
    ] = options;

    const date = new Date( start );

    date.setMinutes( date.getMinutes() + date.getTimezoneOffset() - timeOffset );

    const dateEn = renderDate( date );
    const clock = renderTime( date );

    const _direction = directions.find( ( { _key } ) => _key === direction._key );

    const pierNameEn = _direction.point.title.en;

    const ticketsInOrder = _direction.tickets.map( item => ( {
      count: tickets[ item._key ] || 0,
      name: ( item.title || {} ).en || item.ticket.map( ( { title } ) => title.en ).join( ' + ' ),
    } ) )

    return [ {
      block: 'email-unit',
      mods: { type: 'container' },
      align: 'center',
      bgcolor: '#F3F3F3',
      content: {
        block: 'email-unit',
        mods: { type: 'container' },
        align: 'center',
        bgcolor: '#6999CC',
        width: '600',
        content: [
          {
            block: 'email-unit',
            mods: { type: 'spacer' },
            height: '10',
          }, //spacer
          {
            block: 'email-unit',
            mods: { type: 'container' },
            align: 'center',
            width: '570',
            horizonMargin: 'auto',
            content: {
              block: 'email-unit',
              mods: { type: 'row' },
              content: [
                {
                  block: 'email-unit',
                  elem: 'td',
                  verticalAlign: 'middle',
                  content: {
                    html: '&nbsp;',
                  },
                }, //space
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
            align: 'center',
            bgcolor: '#FFFFFF',
            width: '570',
            horizonMargin: 'auto',
            content: [
              {
                block: 'email-unit',
                mods: { type: 'spacer' },
                height: '8',
              }, // spacer
              {
                block: 'email-unit',
                mods: { type: 'container' },
                width: '540',
                align: 'center',
                horizonMargin: 'auto',
                content: [
                  {
                    block: 'email-unit',
                    mods: { type: 'spacer' },
                    height: '1',
                  }, // spacer
                  {
                    block: 'email-text',
                    mods: {
                      tag: 'p',
                    },
                    color: '#000000',
                    fontSize: '30px',
                    fontWeight: '400',
                    lineHeight: '32px',
                    align: 'center',
                    content: [
                      {
                        block: 'email-text',
                        mods: {
                          tag: 'font',
                        },
                        color: '#486482',
                        fontSize: '24px',
                        lineHeight: '25.6px',
                        content: 'Thank you for your order!',
                      },
                    ],
                  },
                  {
                    block: 'email-unit',
                    mods: { type: 'spacer' },
                    height: '10',
                  }, // spacer
                  {
                    block: 'email-text',
                    mods: {
                      tag: 'p',
                    },
                    color: '#999999',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '22px',
                    align: 'center',
                    content: [
                      {
                        block: 'email-text',
                        mods: {
                          tag: 'font',
                        },
                        color: '#486482',
                        content: [
                          nameEn && `${ nameEn }`,
                          nameEn && { tag: 'br' },
                          dateEn && `Date: ${ dateEn }`,
                          dateEn && { tag: 'br' },
                          clock && `Time: ${ clock }`,
                          clock && { tag: 'br' },
                          pierNameEn && `Place of departure: ${ pierNameEn }`,
                          pierNameEn && { tag: 'br' },
                          ticketsInOrder && 'Tickets: ',
                          ticketsInOrder && ticketsInOrder.map( item => item.count > 0 && [
                            `${ item.nameEn || item.name } — ${ item.count }; `,
                          ]
                          ),
                          { tag: 'br' },
                          'E-ticket will be send to your email within 1 hour.',
                          { tag: 'br' },
                          number && `Transaction number: PT${ number }`,
                          number && { tag: 'br' },
                          'Kind regards, PrahaTrip team',
                          { tag: 'br' },
                        ],
                      },
                    ],
                  },
                  {
                    block: 'email-unit',
                    mods: { type: 'spacer' },
                    height: '19',
                  }, // spacer
                ],
              }, // содержимое: промокод спасибо
            ],
          }, // белый фон
          {
            block: 'email-unit',
            mods: { type: 'spacer' },
            height: '5',
          }, //spacer
          {
            block: 'email-text',
            mods: {
              tag: 'p',
            },
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '19px',
            align: 'center',
            content: [
              {
                tag: 'b',
                content: 'e-mail: ',
              },
              {
                block: 'link',
                url: 'info@prahatrip.cz',
                attrs: {
                  style: 'Margin: 0; color: #FFFFFF; font-family: Arial,sans-serif; font-weight: 400; '
                    + 'line-height: 20px; margin: 0; padding: 0; text-align: left; text-decoration: none;',
                },
                content: {
                  block: 'email-text',
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  mods: {
                    tag: 'font',
                  },
                  content: 'info@prahatrip.cz',
                },
              },
              {
                tag: 'br',
              },
              {
                block: 'email-text',
                color: '#FFFFFF',
                fontSize: '11.2',
                mods: {
                  tag: 'font',
                },
                content: [
                  {
                    block: 'link',
                    url: 'https://prahatrip.cz/',
                    attrs: {
                      style: 'Margin: 0; color: #FFFFFF; font-family: Arial,sans-serif; font-weight: 400; '
                        + 'line-height: 20px; margin: 0; padding: 0; text-align: left; text-decoration: none;',
                    },
                    content: {
                      block: 'email-text',
                      color: '#FFFFFF',
                      textDecoration: 'underline',
                      mods: {
                        tag: 'font',
                      },
                      content: 'prahatrip.cz',
                    },
                  },
                ],
              },
            ],
          },
          {
            block: 'email-unit',
            mods: { type: 'spacer' },
            height: '10',
          }, //spacer
        ],
      },
    } ]
  },
} );
