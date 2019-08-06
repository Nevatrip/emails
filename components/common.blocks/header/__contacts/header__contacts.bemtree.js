block('header').elem('contacts').replace()( ( node, ctx ) => {
  return {
    block: 'link',
    mix: { block: node.block, elem: node.elem },
    url: 'tel:+12334523',
    content: {
      block: 'icon',
      mods: { symbol: 'phone' },
      content: '📞'
    }
  }
});
