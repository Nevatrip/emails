block( 'email' ).elem( 'content' ).elemMod( 'view', 'operator' )( {
  content: node => {
    const order = node.data.api || {};

    const username = order.user.fullName;

    const [
      {
        product: {
          directions,
          title: {
            ru: {
              name: nameRu = '',
            } = {},
          } = '',
          partner: {
            partnerContract: partnerNumber = '',
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
        event: { start },
      },
    ] = options;

    const ticketsInOrder = [];
    let pierNameRu = '';
    let pierUrl = '';
    let directionTitle = '';
    let totalTickets = 0;

    const browserTimeOffsetTs = ( new Date() ).getTimezoneOffset() * 60;// смещение часового пояса относительно часового пояса UTC в секундаз для текущей локали
    const tourTimeOffsetTs = -3*3600;
    const currentTimeOffsetTs = browserTimeOffsetTs - tourTimeOffsetTs;

    directions.forEach( ( { _key, tickets: _tickets, point: _point, title: _title } ) => {
      if ( direction === _key ) {
        pierNameRu = _point.title.ru;
        pierUrl = `https://yandex.ru/maps/2/saint-petersburg/?ll=${ _point.coords.lng }%2C${ _point.coords.lat }&mode=whatshere&whatshere%5Bpoint%5D=${ _point.coords.lng }%2C${ _point.coords.lat }&whatshere%5Bzoom%5D=17&z=17`;
        directionTitle = _title;

        _tickets.forEach( _ticket => {
          if ( tickets.hasOwnProperty( _ticket._key ) ) {
            ticketsInOrder.push( {
              name: `${ _ticket.category.name.current === 'standart' ? '' : `${ _ticket.category.title }` }${ _ticket.name }`,
              count: tickets[ _ticket._key ] || 0,
            } );
            totalTickets += tickets[ _ticket._key ];
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

    const dateTs = ( new Date( start ) ).getTime() / 1000 + currentTimeOffsetTs; // получить timestamp даты прогулки
    const hour = `0${ ( new Date( dateTs * 1000 ) ).getHours() }`.substr( -2 );// двузначное число часов старта прогулки
    const minutes = `0${ ( new Date( dateTs * 1000 ) ).getMinutes() }`.substr( -2 );// двузначное число часов старта прогулки
    const clock = `${ hour }:${ minutes }`;

    if ( hour > 21 ) {
      dateRu = `В ночь с ${ convertTsToDay( dateTs ) } на ${ convertTsToDay( dateTs + 86400 ) }`;
    } else if ( hour < 4 ) {
      dateRu = dateRu = `В ночь с ${ convertTsToDay( dateTs - 86400 ) } на ${ convertTsToDay( dateTs ) }`;
    } else {
      dateRu = convertTsToDay( dateTs );
    }

    return [ {
      block: 'email-unit',
      mods: { type: 'container' },
      align: 'center',
      valign: 'top',
      width: '100%',
      bgcolor: '#F3F3F3',
      content: [
        {
          block: 'heading',
          mods: { size: 'l' },
          content: 'Заявка на бронирование билетов',
        },
        {
          block: 'email-unit',
          mods: { type: 'table-skeleton' },
          width: '622',
          bgcolor: '#FFFFFF',
          border: '1px solid #dadada',
          cellpadding: '5',
          cellspacing: '5',
          content: [
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: '№ Договора: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: partnerNumber,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Название компании: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: 'Про Событие-Неватрип',
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Контактный телефон: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: '8 812 244-98-24',
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Контактный E-mail: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: 'order@nevatrip.ru',
                },
              ],
            },
          ],
        },
        {
          block: 'heading',
          mods: { size: 'l' },
          content: 'Просим Вас забронировать билеты на прогулку:',
        },
        {
          block: 'email-unit',
          mods: { type: 'table-skeleton' },
          width: '622',
          bgcolor: '#FFFFFF',
          border: '1px solid #dadada',
          cellpadding: '5',
          cellspacing: '5',
          content: [
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Дата: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: dateRu,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Время: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: clock,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Причал отправления: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: {
                    block: 'link',
                    url: pierUrl,
                    content: pierNameRu,
                  },
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Название рейса: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: nameRu,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Направление: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: directionTitle,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: '№ Ваучера: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: number,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'ФИО Клиента: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: username,
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Количество туристов: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: totalTickets,
                },
              ],
            },
          ],
        },
        {
          block: 'heading',
          mods: { size: 'l' },
          content: 'Из них:',
        },
        {
          block: 'email-unit',
          mods: { type: 'table-skeleton' },
          width: '622',
          bgcolor: '#FFFFFF',
          border: '1px solid #dadada',
          cellpadding: '5',
          cellspacing: '5',
          content: [
            {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  colspan: 2,
                  content: ticketsInOrder.map( item => item && {
                    block: 'email-unit',
                    mods: { type: 'param-ticket' },
                    name: item.name,
                    quantity: item.count,
                  }, ),
                },
              ],
            },
          ],
        },
      ],
    } ]
  },
} );
