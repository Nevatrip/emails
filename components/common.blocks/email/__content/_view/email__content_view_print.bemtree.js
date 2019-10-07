block( 'email' ).elem( 'content' ).elemMod( 'view', 'print' )( {
  content: node => {
    const order = node.data.api || {};

    //const userEmail = order.user.email;

    const [
      {
        product: {
          directions,
          title: {
            ru: { name: nameRu },
            en: { name: nameEn },
          },
        },
        options,
      },
    ] = order.products;

    const [
      {
        direction,
        number,
        tickets,
        event: { start },
      },
    ] = options;

    const ticketsInOrder = [];
    let pierNameRu = '';
    let pierNameEn = '';
    let pierUrl = '';
    let pierPhoto = '';

    const browserTimeOffsetTs = ( new Date() ).getTimezoneOffset() * 60;// смещение часового пояса относительно часового пояса UTC в секундаз для текущей локали
    const tourTimeOffsetTs = -3*3600;
    const currentTimeOffsetTs = browserTimeOffsetTs - tourTimeOffsetTs

    directions.forEach( ( { _key, tickets: _tickets, point: _point } ) => {
      if ( direction === _key ) {
        pierNameRu = _point.title.ru;
        pierNameEn = _point.title.en;
        pierUrl = `https://yandex.ru/maps/2/saint-petersburg/?ll=${ _point.coords.lng }%2C${ _point.coords.lat }&mode=whatshere&whatshere%5Bpoint%5D=${ _point.coords.lng }%2C${ _point.coords.lat }&whatshere%5Bzoom%5D=17&z=17`;
        pierPhoto = node._urlFor( _point.image.asset._ref ).url();

        _tickets.forEach( _ticket => {
          if ( tickets.hasOwnProperty( _ticket._key ) && tickets[ _ticket._key ] ) {
            ticketsInOrder.push( {
              name: `${ _ticket.category.name.current === 'standart' ? '' : `${ _ticket.category.title }` }${ _ticket.name }`,
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

    let dateRu;
    let dateEn;

    const dateTs = ( new Date( start ) ).getTime() / 1000 + currentTimeOffsetTs; // получить timestamp даты прогулки
    const hour = `0${ ( new Date( dateTs * 1000 ) ).getHours() }`.substr( -2 );// двузначное число часов старта прогулки
    const minutes = `0${ ( new Date( dateTs * 1000 ) ).getMinutes() }`.substr( -2 );// двузначное число часов старта прогулки
    const clock = `${ hour }:${ minutes }`;

    if ( hour > 21 ) {
      dateRu = `В ночь с ${ convertTsToDay( dateTs ) } на ${ convertTsToDay( dateTs + 86400 ) }`;
      dateEn = `On the night from ${ convertTsToDay( dateTs, 'en' ) } to ${ convertTsToDay( dateTs + 86400, 'en' ) }`;
    } else if ( hour < 4 ) {
      dateRu = dateRu = `В ночь с ${ convertTsToDay( dateTs - 86400 ) } на ${ convertTsToDay( dateTs ) }`;
      dateEn = dateEn = `On the night from ${ convertTsToDay( dateTs - 86400, 'en' ) } to ${ convertTsToDay( dateTs, 'en' ) }`;
    } else {
      dateRu = convertTsToDay( dateTs );
      dateEn = convertTsToDay( dateTs, 'en' );
    }

    return [
      {
        block: 'email-web',
        content: [
          {
            elem: 'header',
            content: [
              {
                block: 'link',
                mix: { block: 'email-web', elem: 'logo' },
                target: '_blank',
                url: 'https://nevatrip.ru/',
                content: {
                  block: 'image',
                  mix: { block: 'email-web', elem: 'logo-img' },
                  alt: 'NevaTrip',
                  url: 'https://nevatrip.ru/assets/img/email/nt.png',
                },
              },
              {
                block: 'link',
                mix: { block: 'email-web', elem: 'print' },
                url: '#',
                content: [
                  {
                    tag: 'b',
                    content: 'Печать',
                  },
                  {
                    html: '&nbsp;/&nbsp;Print',
                  },
                ],
              },
            ],
          },
          {
            elem: 'precaption',
            content: [
              {
                tag: 'b',
                content: 'Посадочный билет',
              },
              {
                html: '&nbsp;/&nbsp;',
              },
              {
                block: 'text-en',
                mods: { inline: 'yes' },
                content: 'Your E-ticket',
              },
            ],
          },
          {
            elem: 'h1',
            tag: 'h1',
            content: `NT${ number }`,
          },
          {
            elem: 'h2',
            tag: 'h2',
            content: [
              {
                block: 'link',
                url: 'https://nevatrip.ru/',
                title: 'Посмотреть на сайте',
                target: '_blank',
                content: {
                  tag: 'b',
                  content: nameRu,
                },
              },
              nameEn && {
                block: 'link',
                mix: { block: 'text_en' },
                url: 'https://en.nevatrip.ru/',
                title: 'Check on the web site',
                target: '_blank',
                content: nameEn,
              },
            ],
          },
          {
            elem: 'separator',
          },
          {
            elem: 'info',
            content: [
              {
                elem: 'info-mark',
                content: {
                  block: 'image',
                  alt: '!',
                  url: 'https://nevatrip.ru/assets/img/email/exclamation-mark_lg.png',
                },
              },
              {
                elem: 'info-text',
                content: [
                  {
                    tag: 'b',
                    content: {
                      html: 'Билет распечатывать не&nbsp;обязательно, зарегистрируйтесь на&nbsp;рейс '
                        + 'перед посадкой, сообщив &#8470; электронного билета кассиру, '
                        + 'и&nbsp;получите посадочный билет. Вам необходимо подойти за&nbsp;15-20 '
                        + 'минут до&nbsp;отправления рейса (в&nbsp;выходные для метеоров&nbsp;&mdash; заранее)',
                    },
                  },
                  {
                    block: 'text-en',
                    content: {
                      html: 'You do not have to print the ticket, just show or say this e-ticket '
                        + '#HT to the Administrator on the pier, and get a boarding ticket. '
                        + 'You need to come 15-20 minutes before the departure.',
                    },
                  },
                ],
              },
            ],
          },
          {
            elem: 'separator',
          },
          {
            elem: 'params',
            content: [
              {
                elem: 'param',
                title: 'дата',
                titleEn: 'date',
                content: dateRu,
                contentEn: dateEn,
              }, // дата
              {
                elem: 'param',
                title: 'время',
                titleEn: 'time',

                //одно направление, фиксированное время
                content: clock,

                // открытое время
                // content: [
                //   {
                //     html: 'в течение дня',
                //   },
                //   {
                //     tag: 'br',
                //   },
                //   {
                //     block: 'email-text',
                //     mods: { tag: 'font', style: 'translation-param' },
                //     content: 'during the day',
                //   },
                // ],

                // фиксированное время туда-обратно
                // content: [
                //   {
                //     html: 'туда ',
                //   },
                //   {
                //     block: 'email-text',
                //     mods: { tag: 'font', style: 'translation-param' },
                //     content: '(departure) ',
                //   },
                //   {
                //     html: '14:00',
                //   },
                //   {
                //     html: ',',
                //   },
                //   {
                //     tag: 'br',
                //   },
                //   {
                //     html: 'обратно ',
                //   },
                //   {
                //     block: 'email-text',
                //     mods: { tag: 'font', style: 'translation-param' },
                //     content: '(return) ',
                //   },
                //   {
                //     html: '18:00',
                //   },
                // ],
              }, // время
              {
                elem: 'param',
                title: 'причал',
                titleEn: 'place of departure',
                content: pierNameRu,
                contentEn: pierNameEn,
              }, // причал
              // {
              //   elem: 'param',
              //   title: 'места',
              //   titleEn: 'seats',
              //   content: 'M15, M16',
              // }, // места
              // {
              //   elem: 'param',
              //   title: 'направление',
              //   titleEn: 'direction',
              //   content: 'СПБ — ПТФ',
              //   contentEn: 'SPB – PTF',
              // }, // направление
              // {
              //   elem: 'param',
              //   title: 'продолжительность',
              //   titleEn: 'duration',
              //   content: '3 часа',
              //   contentEn: '3 hours',
              // }, // продолжительность
              // {
              //   elem: 'param',
              //   title: 'дополнительно',
              //   titleEn: 'additional',
              //   content: 'Аудиогид по Петербургу',
              // }, // дополнительно
              {
                elem: 'param',
                title: 'билеты',
                titleEn: 'tickets',
                content: ticketsInOrder.map( item => item.count && {
                  elem: 'param-ticket',
                  name: item.name,
                  quantity: item.count,

                  //nameEn: item.nameEn,
                }, ),
              }, // билеты
            ],
          },
          {
            elem: 'support',
            content: [
              {
                tag: 'b',
                content: 'Служба поддержки',
              },
              {
                html: ' / ',
              },
              {
                block: 'text-en',
                mods: { inline: 'yes' },
                content: 'Support service ',
              },
              {
                html: '(09:00 &mdash; 01:00): ',
              },
              {
                block: 'link',
                mix: { block: 'email-web', elem: 'tel' },
                url: 'tel:88122449824',
                content: {
                  html: '8&nbsp;(812)&nbsp;244-98-24',
                },
              },
            ],
          },
          pierPhoto && {
            block: 'email-map',
            image: pierPhoto,
            link: pierUrl,
          },
        ],
      },
    ]
  },
} );
