block('header').elem('hamburger').replace()( ( node, ctx ) => {
  return {
    block: 'button',
    mods: {
      view: 'plain'
    },
    mix: { block: node.block, elem: node.elem },
    icon: {
      block: 'icon',
      mods: { symbol: 'hamburger' },
      content: '💽'
    }
  }
});
