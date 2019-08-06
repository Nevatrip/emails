block( 'page' ).elem( 'section' ).elemMod( 'view', 'cooperation' )
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
          content: 'Сотрудничество',
        },
        {
          block: 'list',
          mods: {
            type: 'unstyled',
            of: 'cooperation',
          },
          items: ( ( node.data.api.page || {} ).cooperation || [] ).map( image => ( {
            block: 'image',
            mods: { width: 'available' },
            url: node._urlFor( image ).url(),
          } ) ),
        },
      ],
    },
  ] );
