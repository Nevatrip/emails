block( 'email-web' ).elem( 'param-ticket' )(
  content()( ( node, ctx ) =>
    [
      {
        tag: 'b',
        content: ctx.name, //[Взрослый, Льготный, Детский, Иностранный, Дошкольный, Бесплатный, Групповой]
      },
      ctx.nameEn && {
        html: ' / ',
      },
      ctx.nameEn && {
        block: 'text-en',
        mods: { inline: 'yes' },
        content: ctx.nameEn, //[Adult, Discount, Child, Foreign, Pre-school, Free, Group]
      },
      {
        html: ` — ${ ctx.quantity } шт.`,
      },
      {
        tag: 'br',
      },
    ]
  )
);
