block( 'page' ).elem( 'section' ).elemMod( 'view', 'events' )
  .content()( node => {
    console.log( 'node.data.api.events', node.data.api.events );
    
    return [
      {
        block: 'heading',
        mods: {
          capitel: true,
          stroke: true,
          size: 'l',
          theme: 'dark',
        },
        mix: { block: node.block, elem: 'heading', elemMods: { size: 'xxl' } },
        content: 'События',
      },
      {
        elem: 'layout',
        content: {
          block: 'list',
          mods: {
            type: 'unstyled',
            of: 'events',
          },
          content: node.data.api.events.map( ( event, index ) => ( {
            elem: 'item',
            content: {
              block: 'event',
              mods: { view: index ? 'intro' : 'preview' },
              event,
            },
          } ) ),
        },
      },
    ]
  }
  );
