block( 'email' ).elem( 'preamble' )(
  content()( () => ( {
    block: 'email-text',
    mods: { tag: 'span', style: 'invisible' },
    content: 'ВАШ ПОСАДОЧНЫЙ БИЛЕТ / YOUR E-TICKET ',
  } )
  )
);
