block( 'page' ).elem( 'orders' )( {
  content: ( node, { orders = [] } ) => ( {
    block: 'table',
    mods: { view: 'orders' },
    content: orders.map( ( order, index ) => ( {
      elem: 'row',
      elemMods: { status: order.status },
      content: [
        { elem: 'cell', content: index + 1 },
        {
          elem: 'cell',
          content: [
            order.user.fullName,
            { tag: 'br' },
            {
              block: 'link',

              // url: `/?where[user.email]=${ order.user.email }&offset=0&limit=100&skip=0`,
              content: order.user.email,
            },
            { tag: 'br' },
            order.user.phone,
          ],
        },
        {
          elem: 'cell',
          content: order.products.map( ( { product, options } ) => {
            let subSum = 0;
            const [ {
              direction,
              tickets,
              number,
              event,
            } ] = options;
            const _direction = product.directions.find( directionItem => directionItem._key === direction );
            const _tickets = _direction.tickets.map(
              ( { _key, name, price } ) => {
                const count = tickets[ _key ] || 0;
                const cost = price * count;

                subSum += cost;

                return !!count && {
                  elem: 'item',
                  attrs: {
                    style: 'display: flex',
                    title: `${ price } ₽ × ${ count } = ${ cost } ₽`,
                  },
                  content: [
                    { elem: 'term', content: `${ count } × ${ name }` },
                    // eslint-disable-next-line no-irregular-whitespace
                    { elem: 'definition', content: ` ${ price > 0 ? `по ${ price } ₽ ` : '' }` },
                  ],
                }
              }
            );

            return [
              {
                attrs: { style: 'display: flex' },
                content: [
                  {
                    tag: 'fieldset',
                    content: [
                      {
                        tag: 'legend',
                        content: {
                          block: 'link',
                          title: product.title.ru.name,
                          content: product.title.ru.name.length > 40 ? `${ product.title.ru.name.substring( 0, 40 ) }…` : product.title.ru.name,

                          // url: `/?where[products.productId]=${ product._id }&offset=0&limit=100&skip=0`,
                        },
                      },
                      'Отправление: ',
                      {
                        block: 'link',

                        // url: `/?where[products.options.date]=${ options.date }&offset=0&limit=100&skip=0`,
                        content: {
                          block: 'text',
                          mods: { format: 'date' },
                          date: event.start,
                          format: 'DD.MM [в] HH:mm',
                        },
                      },
                      { tag: 'br' },
                      `Направление: ${ _direction.title.length > 40 ? `${ _direction.title.substring( 0, 40 ) }…` : _direction.title }`,
                    ],
                  },
                  {
                    tag: 'fieldset',
                    attrs: { style: 'flex: 1' },
                    content: [
                      { tag: 'legend', content: `Билеты: ${ subSum } ₽` },
                      {
                        block: 'list',
                        mods: { type: 'description' },
                        content: _tickets,
                      },
                    ],
                  },
                  {
                    tag: 'fieldset',
                    content: [
                      { tag: 'legend', content: 'Посадочный' },
                      {
                        content: number && `НТ${ number }`,
                      },
                    ],
                  },
                ],
              },
            ]
          } ),
        },
        {
          elem: 'cell',
          content: [
            'Создан: ',
            {
              block: 'text',
              mods: { format: 'date' },
              date: order.created,
              format: 'DD.MM HH:mm',
            },
            { tag: 'br' },
            order.updated
              ? [
                'Обновлён: ',
                {
                  block: 'text',
                  mods: { format: 'date' },
                  date: order.updated,
                  format: 'DD.MM HH:mm',
                },
              ]
              : 'Ещё не менялся',
          ],
        },
        {
          elem: 'cell',
          content: [
            {
              content: `Сумма: ${ order.payment.Model.Amount } ₽`,
            },
            {
              block: 'link',
              url: `/order/${ order.id }`,
              content: order.payment.Model.InternalId,
            },
          ],
        },
      ],
    } ) ),
  } ),
} )
