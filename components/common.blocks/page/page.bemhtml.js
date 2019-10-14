block( 'page' ).def()( function () {
  return applyCtx( this.ctx.content );
} );

block( 'page' ).wrap()( function () {
  const ctx = this.ctx;

  this._nonceCsp = ctx.nonce;

  return [
    apply( 'doctype' ),
    {
      tag: 'html',
      attrs: {
        lang: 'ru',
        xmlns: 'http://www.w3.org/1999/xhtml',
        bgcolor: '#F3F3F3',
        style: 'Margin:0;margin:0;padding:0;font-family:Arial,sans-serif;max-width:100%;padding:0;width:100%;background:#F3F3F3;',
      },
      cls: 'ua_js_no',
      content: [
        {
          elem: 'head',
          content: [
            { tag: 'meta', attrs: { charset: 'utf-8' } },
            ctx.uaCompatible === false ? '' : {
              tag: 'meta',
              attrs: {
                'http-equiv': 'X-UA-Compatible',
                content: ctx.uaCompatible || 'IE=edge',
              },
            },
            { tag: 'title', content: ctx.title },
            { block: 'ua', attrs: { nonce: ctx.nonce } },
            ctx.head,
            ctx.styles,
            ctx.favicon ? { elem: 'favicon', url: ctx.favicon } : '',
          ],
        },
        ctx,
      ],
    },
  ];
} );
