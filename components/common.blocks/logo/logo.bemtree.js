block( 'logo' )(
  wrap()( ( node, ctx ) => {
    ctx.content = [
      { elem: 'icon' },
      { elem: 'text' }
    ];

    return {
      block: 'link',
      to: 'index',
      content: ctx
    }
  } )
)
