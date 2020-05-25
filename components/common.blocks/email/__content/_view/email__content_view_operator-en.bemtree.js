/* Функция возвращает время в нужном формате. */
const renderTime = date => {
  if ( !date ) return;
  return date.toLocaleTimeString( 'ru', { hour: '2-digit', minute: '2-digit' } );
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
        ${ new Intl.DateTimeFormat( optionsWithoutYear ).format( date ) }
        to
        ${ new Intl.DateTimeFormat( options ).format( nextDay ) }`;
  } else if ( hours < 4 || hours === '0' ) {
    const prevDay = newDay.setDate( date.getDate() - 1 );

    return `On the night from
        ${ new Intl.DateTimeFormat( optionsWithoutYear ).format( prevDay ) }
        to
        ${ new Intl.DateTimeFormat( options ).format( date ) }`;
  }
  return new Intl.DateTimeFormat( options ).format( date );
};

block( 'email' ).elem( 'content' ).elemMod( 'view', 'operator-en' )( {
  content: node => {
    const order = node.data.api || {};
    const username = ( ( order || {} ).user || {} ).fullName;

    const [
      {
        product: {
          directions = [],
          title: {
            en: {
              name: nameEn = '',
            } = {},
          } = {},
          partner: {
            partnerContract: partnerNumber = '',
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
          allDay = false,
          timeOffset,
        },
      },
    ] = options;

    const date = new Date( start );

    date.setMinutes( date.getMinutes() + date.getTimezoneOffset() - timeOffset );

    const dateRu = renderDate( date );
    const clock = renderTime( date );

    const _direction = directions.find( ( { _key } ) => _key === direction._key );

    const {
      title: {
        en: directionTitle,
      },
      point: {
        title: {
          en: pierNameEn,
        },
        coords: {
          lat,
          lng,
        },
      },
    } = _direction;

    const pierUrl = `https://maps.google.com?saddr=Current+Location&daddr=${ lat },${ lng }`;

    const ticketsInOrder = _direction.tickets.map( item => ( {
      count: tickets[ item._key ] || 0,
      name: ( item.title || {} ).en || item.ticket.map( ( { title } ) => title.en ).join( ' + ' ),
    } ) );

    const totalTickets = ticketsInOrder.reduce( ( sum, { count } ) => sum += count, 0 )

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
                    target: 'blank',
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
                  content: 'Transaction number: ',
                },
                {
                  block: 'email-unit',
                  mods: { type: 'td' },
                  content: `PT${ number }`,
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
