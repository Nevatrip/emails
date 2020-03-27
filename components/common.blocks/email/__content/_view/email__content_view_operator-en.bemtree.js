block( 'email' ).elem( 'content' ).elemMod( 'view', 'operator-en' )( {
  content: node => {
    const order = node.data.api || {};
    const username = ( ( order || {} ).user || {} ).fullName;

    const [
      {
        product: {
          directions,
          title: {
            en: {
              name: nameEn = '',
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
        event: {
          start,
          allDay = false,
        },
        schedule = [],
      },
    ] = options;

    const ticketsInOrder = [];
    let pierNameEn = '';
    let pierUrl = '';
    let directionTitle = '';
    let totalTickets = 0;

    const browserTimeOffsetTs = ( new Date() ).getTimezoneOffset() * 60;// смещение часового пояса относительно часового пояса UTC в секундаз для текущей локали
    const tourTimeOffsetTs = -2*3600;
    const currentTimeOffsetTs = browserTimeOffsetTs - tourTimeOffsetTs;

    directions.forEach( ( { _key, tickets: _tickets, point: _point, title: _title } ) => {
      if ( direction === _key ) {
        pierNameEn = _point.title.en;
        pierUrl = `https://yandex.ru/maps/2/saint-petersburg/?ll=${ _point.coords.lng }%2C${ _point.coords.lat }&mode=whatshere&whatshere%5Bpoint%5D=${ _point.coords.lng }%2C${ _point.coords.lat }&whatshere%5Bzoom%5D=17&z=17`;
        directionTitle = _title;

        _tickets.forEach( _ticket => {
          if ( tickets.hasOwnProperty( _ticket._key ) ) {
            ticketsInOrder.push( {
              name: `${ _ticket.category.name.current === 'standart' ? '' : `${ _ticket.category.title.en }` }${ _ticket.ticket[ 0 ].title.en }`,
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

    const getClock = _start => {
      const dateTs = ( new Date( _start ) ).getTime() / 1000 + currentTimeOffsetTs; // получить timestamp даты прогулки
      const hour = `0${ ( new Date( dateTs * 1000 ) ).getHours() }`.substr( -2 );// двузначное число часов старта прогулки
      const minutes = `0${ ( new Date( dateTs * 1000 ) ).getMinutes() }`.substr( -2 );// двузначное число часов старта прогулки

      // if ( hour > 21 ) {
      //   dateRu = `В ночь с ${ convertTsToDay( dateTs ) } на ${ convertTsToDay( dateTs + 86400 ) }`;
      // } else if ( hour < 4 ) {
      //   dateRu = dateRu = `В ночь с ${ convertTsToDay( dateTs - 86400 ) } на ${ convertTsToDay( dateTs ) }`;
      // } else {
        dateRu = convertTsToDay( dateTs );
      // }

      return `${ hour }:${ minutes }`
    }

    const clock = allDay
      ? schedule.map( event => getClock( event.start ) ).join( ', ' )
      : getClock( start );

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
          content: 'Request for booking tickets',
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
            partnerNumber && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Contract number: ',
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
                  content: 'Company name: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: 'PrahaTrip',
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
                  content: 'Phone: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: '+420 232 134 178',
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
                  content: 'E-mail: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: 'info@prahatrip.cz',
                },
              ],
            },
          ],
        },
        {
          block: 'heading',
          mods: { size: 'l' },
          content: 'Please book tickets:',
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
            dateRu && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Date: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: dateRu,
                },
              ],
            },
            clock && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Time: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: allDay ? `full-day ticket (${ clock })` : clock,
                },
              ],
            },
            pierNameEn && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Departure: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: {
                    block: 'link',
                    url: pierUrl,
                    content: pierNameEn,
                  },
                },
              ],
            },
            nameEn && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Name: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: nameEn,
                },
              ],
            },
            directionTitle && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Direction: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: directionTitle,
                },
              ],
            },
            number && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Order number: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: number,
                },
              ],
            },
            username && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Customer\'s name: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: username,
                },
              ],
            },
            totalTickets && {
              block: 'email-unit',
              mods: { type: 'tr' },
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  width: '200',
                  fontWeight: 'bold',
                  content: 'Number of tourists: ',
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
          content: 'Ticket categories:',
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
                    mods: { type: 'param-ticket-en' },
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
