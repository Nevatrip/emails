[{
  shouldDeps: [
    {
      block: 'slider',
      mods: { view: 'index' },
    },
    {
      block: 'list',
      mods: {
        of: 'index-slider',
        // view: 'gallery'
      },
    },
    {
      block: 'pagination',
      elems: [
        { elem: 'link', mods: { to: ['prev', 'next'] } }
      ]
    }
  ]
}]

