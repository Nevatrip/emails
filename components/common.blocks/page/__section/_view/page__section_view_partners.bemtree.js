block( 'page' ).elem( 'section' ).elemMod( 'view', 'partners' )
  .content()( node => [
    {
      elem: 'layout',
      content: [
        {
          block: 'heading',
          mods: {
            capitel: true,
            size: 'm',
          },
          content: 'Клиенты',
        },
        {
          block: 'list',
          mods: {
            type: 'unstyled',
            of: 'clients',
          },
          items: node.data.api.settings.clients.map( client => (
            {
              block: 'image',
              mods: { width: 'available' },
              url: node._urlFor( client ).url(),
            }
          ) ),
        },
      ],
    },
  ] );
