block( 'email-unit' ).mod( 'type', 'param-ticket-en' )(
  tag()( 'span' ),
  content()( ( node, ctx ) => [
    {
      tag: 'b',
      content: ctx.name, //[Взрослый, Льготный, Детский, Иностранный, Дошкольный, Бесплатный, Групповой]
    },
    ctx.nameEn && {
      html: ' / ',
    },
    ctx.nameEn && {
      tag: 'font',
      attrs: {
        style: 'color:#486482;font-size:19.2px',
      },
      content: ctx.nameEn, //[Adult, Discount, Child, Foreign, Pre-school, Free, Group]
    },
    {
      html: ` — ${ ctx.quantity } pcs.`,
    },
    {
      tag: 'br',
    },
  ] ) );
