block( 'input' ).mod( 'type', 'range' )(
  // eslint-disable-next-line
  def()( ( node, { min = 0, max = 10, step = 1 } ) => applyNext() ),

  elem( 'option' )(
    tag()( 'option' ),
    addAttrs()( ( node, { val } ) => ( {
      value: val,
    } ) )
  ),

  elem( 'control' )(
    tag()( 'select' ),
    content()( node => {
      const {
        min,
        max,
        step,
        minInput,
        maxInput,
        pluralLabel,
      } = node._input;

      const options = [];

      function getNoun ( number, one, two, five ) {
        let n = Math.abs( number );

        n %= 100;
        if ( n >= 5 && n <= 20 ) {
          return five;
        }
        n %= 10;
        if ( n === 1 ) {
          return one;
        }
        if ( n >= 2 && n <= 4 ) {
          return two;
        }

        return five;
      }

      for ( let i = min; i <= max; i += step ) {
        let content;

        if ( minInput && i === min ) {
          content = minInput
        } else if ( maxInput && i === max ) {
          content = maxInput
        } else if ( pluralLabel ) {
          content = `${ i } ${ getNoun( i, pluralLabel[ 0 ], pluralLabel[ 1 ], pluralLabel[ 2 ] ) }`
        }

        options.push( {
          elem: 'option',
          val: i,
          content: content || i,
        } )
      }

      return options;
    } )
  ),

  elem( 'label' )(
    tag()( 'span' ),
    content()( node => {
      const {
        min,
        max,
        minLabel,
        maxLabel,
      } = node._input;

      if ( node.elemMods.type === 'min' ) return minLabel || min;
      if ( node.elemMods.type === 'max' ) return maxLabel || max;
    } )
  ),

  elem( 'box' )(
    content()( [
      { elem: 'control' },
    ] )
  ),

  content()( [
    {
      elem: 'label',
      elemMods: { type: 'max' },
    },
    {
      elem: 'label',
      elemMods: { type: 'min' },
    },
    { elem: 'box' },

    // {
    //   elem: 'output-box',
    //   content: [
    //     {
    //       elem: 'action',
    //       elemMods: { type: 'minus' }
    //     },
    //     { elem: 'output-control' },
    //     {
    //       elem: 'action',
    //       elemMods: { type: 'plus' }
    //     },
    //   ]
    // },
  ] ),

);
