block( 'page' ).elem( 'footer' ).replace()( node => ( {
  block: 'footer',
  mix: { block: node.block, elem: node.elem }
} ) );
