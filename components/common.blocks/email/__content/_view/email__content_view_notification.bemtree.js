block( 'email' ).elem( 'content' ).elemMod( 'view', 'notification' )( {
  content: node => {
    const order = node.data.api || {};

    const [
      {
        product: {
          directions,
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
        direction,
        number,
        tickets,
        event: {
          start,
          allDay = false,
        },
        schedule = [],
      },
    ] = options;

    const ticketsInOrder = [];
    let pierNameEn = '';

    const browserTimeOffsetTs = ( new Date() ).getTimezoneOffset() * 60;// смещение часового пояса относительно часового пояса UTC в секундаз для текущей локали
    const tourTimeOffsetTs = -3*3600;
    const currentTimeOffsetTs = browserTimeOffsetTs - tourTimeOffsetTs;

    directions.forEach( ( { _key, tickets: _tickets, point: _point } ) => {
      if ( direction === _key ) {
        pierNameEn = ( ( _point || {} ).title || {} ).en
        _tickets.forEach( _ticket => {
          if ( tickets.hasOwnProperty( _ticket._key ) && tickets[ _ticket._key ] ) {
            ticketsInOrder.push( {
              name: `${ _ticket.category.name.current === 'standart' ? '' : `${ _ticket.category.title.en }` }${ _ticket.ticket[ 0 ].title.en }`,
              count: tickets[ _ticket._key ],
            } )
          }
        } )
      }
    } );

    function convertTsToDay ( unixtimestamp, lang ) {
      const monthsArr = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ];
      const date = new Date( unixtimestamp*1000 + currentTimeOffsetTs );
      const year = date.getFullYear();
      const month = monthsArr[ date.getMonth() ];
      const day = date.getDate();
      let zero = '';

      if ( day<10 ) {
        zero = '0'
      }
      return lang === 'en'
        ? `${ month }/${ zero }${ day }/${ year }`
        : `${ zero }${ day }.${ month }.${ year }`;
    }//dd.mm.yyyy/mm.dd.yyyy из timestamp

    let dateEn;

    const getClock = _start => {
      const dateTs = ( new Date( _start ) ).getTime() / 1000 + currentTimeOffsetTs; // получить timestamp даты прогулки
      const hour = `0${ ( new Date( dateTs * 1000 ) ).getHours() }`.substr( -2 );// двузначное число часов старта прогулки
      const minutes = `0${ ( new Date( dateTs * 1000 ) ).getMinutes() }`.substr( -2 );// двузначное число часов старта прогулки

      if ( hour > 21 ) {
        dateEn = `On the night from ${ convertTsToDay( dateTs, 'en' ) } to ${ convertTsToDay( dateTs + 86400, 'en' ) }`;
      } else if ( hour < 4 ) {
        dateEn = dateEn = `On the night from ${ convertTsToDay( dateTs - 86400, 'en' ) } to ${ convertTsToDay( dateTs, 'en' ) }`;
      } else {
        dateEn = convertTsToDay( dateTs, 'en' );
      }

      return `${ hour }:${ minutes }`
    }

    const clock = allDay
      ? schedule.map( event => getClock( event.start ) ).join( ', ' )
      : getClock( start );

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
        width: '320',
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
            width: '290',
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
            width: '290',
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
                width: '290',
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
                          ticketsInOrder && ticketsInOrder.map( item => item.count && [
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
