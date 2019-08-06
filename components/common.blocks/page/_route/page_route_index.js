modules.define( 'page', [
  'form',
  'jquery',
  'i-bem-dom',
  'BEMHTML',
  'calendar',
  'functions__debounce',
], ( provide, Form, $, bemDom, BEMHTML, Calendar, Debounce, Page, ) => {
  provide( Page.declMod( { modName: 'route', modVal: 'index' }, {
    onSetMod: {
      js: {
        inited () {
          const form = this.findChildBlock( Form );

          this.filter( form.getVal() );

          this._domEvents( form ).on( 'submit', e => {
            e.preventDefault();
            this.filter( form.getVal() );
          } )

          this._events( form ).on( 'change', () => {
            Debounce( this.filter( form.getVal() ), 1000 );
          } )
        },
      },
    },

    filter ( params ) {
      const self = this;
      let andIndex = 0;
      let orIndex = 0;

      Object.keys( params ).forEach( key => {
        if ( !params[ key ] ) delete params[ key ];
      } );

      const filterCondition = {
        created: 'created',
        event: 'products.options.event.start',
      }

      if ( params.id ) {
        params[ 'where][payment.Model.InternalId' ] = `${ params.id }`;
        delete params.id;
        delete params.products;
        delete params.dateType;
        delete params.dateFrom;
        delete params.dateTo;
      } else {
        ( params.products || [] ).forEach( product => {
          params[ `where][or][${ orIndex++ }][products.productId` ] = product;
        } );
        params.products && delete params.products;


        ( params.status || [] ).forEach( status => {
          params[ `where][or][${ orIndex++ }][status` ] = status;
        } );
        delete params.status;


        const dateFrom = Calendar.parseDate( params.dateFrom );

        dateFrom.setHours( 0 );
        dateFrom.setMinutes( 0 );
        dateFrom.setSeconds( 0 );

        const dateTo = Calendar.parseDate( params.dateTo );

        dateTo.setHours( 23 );
        dateTo.setMinutes( 59 );
        dateTo.setSeconds( 59 );

        params[ `where][and][${ andIndex++ }][${ filterCondition[ params.dateType ] }][gt` ] = dateFrom.toISOString();
        params[ `where][and][${ andIndex++ }][${ filterCondition[ params.dateType ] }][lt` ] = dateTo.toISOString();

        delete params.dateFrom;
        delete params.dateTo;
      }

      params.order = [ filterCondition[ params.dateType ] ];
      delete params.dateType;

      const filter = {
        where: {
          'products.options.number': 121852,
        },
        fields: {
          sessionId: true,
          created: true,
          updated: true,
          products: true,
          number: true,
          user: true,
          id: true,
          status: true,
          source: true,
          payment: true,
          sum: true,
          isFullDiscount: true,
        },
        offset: 0,
        limit: 1000,
        skip: 0,
        order: [ 'created' ],

        // ...params,
      }

      bemDom.update( self._elem( 'orders' ).domElem, 'Загрузка…' );
      console.log( 'filter', filter );

      $.ajax( {
        url: 'https://api.nevatrip.ru/orders',
        data: { filter },
        success ( response ) {
          console.log( 'response', response );
          response.length
            ? bemDom.replace( self._elem( 'orders' ).domElem, BEMHTML.apply( { block: 'page', elem: 'orders', orders: response } ) )
            : bemDom.update( self._elem( 'orders' ).domElem, 'Нет подходящих экскурсий' );
        },
        error ( error ) {
          console.log( 'error', error );
          bemDom.update( self._elem( 'orders' ).domElem, 'Ошибка загрузки списка заказов' );
        },
      } );
    },
  } ) );
} );
