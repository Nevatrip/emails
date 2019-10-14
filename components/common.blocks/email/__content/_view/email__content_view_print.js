modules.define( 'email__content', ( provide, EmailContent ) => {
  provide( EmailContent.declMod( { modName: 'view', modVal: 'print' }, {
    onSetMod: {
      js: {
        inited () {
          window.print();
        },
      },
    },
  } ) );
} );
