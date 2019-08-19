block( 'email-preamble' )(
  tag()( 'span' ),
  addAttrs()(
    {
      style: this.style?`${ this.style };` :''
        + 'color:transparent;'
        + 'font-size:0px;'
        + 'text-align:center;'
        + 'display:block;'
        + 'height:0;'
        + 'width:0;'
        + 'overflow:hidden;',
    },
  ),
);
