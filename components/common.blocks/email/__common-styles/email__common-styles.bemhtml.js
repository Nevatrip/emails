block( 'email' ).elem( 'common-styles' )(
  replace()( () => ( {
    tag: 'style',
    content: {
      html: '.MsoNormal_mailru_css_attribute_postfix{margin:0}'
        + 'a{text-decoration: none;color:inherit;color:inherit!important;}'
        + '@media print{body,html{-webkit-print-color-adjust:exact;}}',
    },
  } ) )
);
