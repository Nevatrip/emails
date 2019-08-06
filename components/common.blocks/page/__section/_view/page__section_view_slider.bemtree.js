block( 'page' ).elem( 'section' ).elemMod( 'view', 'slider' )
  .content()( node => {
    const slides = ( node.data.api.page || {} ).gallery || [];

    slides.unshift( slides[ slides.length - 1 ] );

    return [
      {
        block: 'list',
        mods: {
          type: 'unstyled',
          of: 'index-slider',
        },
        slides: slides.map( slide => ( {
          heading: slide.title.ru,
          content: slide.description.ru,
          url: ( slide.link || {} ).ru,
          image: node._urlFor( slide ).url(),
        } ) ),
      },
      {
        elem: 'aside',
        content: [
          {
            block: 'pagination',
            elem: 'navigation',
            content: [
              {
                elem: 'link',
                elemMods: {
                  to: 'prev',
                  size: 'l',
                },
              },
              {
                elem: 'link',
                elemMods: {
                  to: 'next',
                  size: 'l',
                },
              },
            ],
          },
        ],
      },
    ]
  } );
