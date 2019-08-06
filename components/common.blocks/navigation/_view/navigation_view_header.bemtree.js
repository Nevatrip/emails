block( 'navigation' ).mod( 'view', 'header' ).content()( {
  block: 'menu',
  mods: { view: 'header' },
  val: 'login',
  content: [
    {
      elem: 'item',
      elemMods: { type: 'link' },
      val: 'projects',
      content: {
        block: 'link',
        to: 'projects',
        content: 'Проекты'
      }
    },
    {
      elem: 'item',
      elemMods: { type: 'link' },
      val: 'about',
      content: {
        block: 'link',
        to: 'about',
        content: 'О компании'
      }
    },
    {
      elem: 'item',
      elemMods: { type: 'link' },
      val: 'innovations',
      content: {
        block: 'link',
        to: 'innovations',
        content: 'Инновации'
      }
    },
    {
      elem: 'item',
      elemMods: { type: 'link' },
      val: 'events',
      content: {
        block: 'link',
        to: 'events',
        content: 'События'
      }
    },
    {
      elem: 'item',
      elemMods: { type: 'link' },
      val: 'contacts',
      content: {
        block: 'link',
        to: 'contacts',
        content: 'Контакты'
      }
    }
  ]
} );
