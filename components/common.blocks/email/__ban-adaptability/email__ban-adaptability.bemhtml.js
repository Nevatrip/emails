block( 'email' ).elem( 'ban-adaptability' )(
  replace()( () => ( {
    mix: {
      block: 'email',
      elem: 'ban-adaptability',
    },
    attrs: {
      style: 'white-space:nowrap!important;line-height:0;color:#ffffff;'
        + 'font-family:Arial,sans-serif;font-size:16px;text-align:center;',
    },
    content: '____________________________________________________________________',
  } ) )
);
