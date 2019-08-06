modules.define( 'form', [
  'BEMHTML',
  'i-bem-dom'
], ( provide, BEMHTML, bemDom, Form ) => {
  provide( Form.declMod( { modName: 'view', modVal: 'calc' }, {
    onSetMod: {
      js: {
        inited() {
          this.__base.apply( this, arguments );

          this.calc();
          this._events().on( 'change', this.calc )
        }
      }
    },

    calc() {
      const {
        specialty,
        salary,
        duration,
        vacation,
      } = this.getVal();

      // bemDom.update(
      //   this._elem('specialty').domElem,
      //   specialty
      // )

      let subspecialty;
      if ( salary < 18000 ) {
        subspecialty = 'помощник'
      } else if ( salary >= 18000 && salary < 25000 ) {
        subspecialty = 'младший'
      } else if ( salary >= 25000 && salary < 35000 ) {
        subspecialty = ''
      } else if ( salary >= 35000 && salary < 55000 ) {
        subspecialty = 'старший'
      } else if ( salary >= 55000 && salary <= 80000 ) {
        subspecialty = 'руководитель отдела'
      } else if ( salary > 80000 ) {
        subspecialty = 'помощник генерального директора, генеральный директор'
      }

      bemDom.update(
        this._elem('subspecialty').domElem,
        subspecialty
      )

      const table = [];

      // let sum = 0;

      const paymentVacation = 1200 + salary / 25;
      const paymentWork = Math.ceil( salary * 0.494 + paymentVacation );

      const salaryLabel = salary > 80000 ? 'более 80000' : salary;

      for ( let i = 0; i < duration - 1; i++ ) {
        // sum += paymentWork;
        table.push( {
          elem: 'cell',
          elemMods: { type: 'work' },
          tag: 'td',
          content: [
            { content: { html: `${ i + 1 }&nbsp;рабочий месяц` } },
            { content: { html: `${ paymentWork }&nbsp;₽` } }
          ]
        } )
      }

      for ( let i = 0; i < vacation; i++ ) {
        // sum += paymentVacation;
        table.push( {
          elem: 'cell',
          elemMods: { type: 'vocation' },
          tag: 'td',
          content: [
            { content: { html: `${ i + 1 }&nbsp;месяц отпуска` } },
            { content: `${ paymentVacation } ₽` }
          ]
        } )
      }

      // sum += paymentWork;

      table.push( {
        elem: 'cell',
        elemMods: { type: 'work' },
        tag: 'td',
        content: [
          { content: { html: `${ table.length + 1 }&nbsp;рабочий месяц` } },
          { content: `${ paymentWork } ₽` }
        ]
      } );

      const description = BEMHTML.apply( {
        block: 'paragraph',
        content: { html: `&nbsp;—&nbsp;Стажировка на ${ parseInt( duration, 10 ) + parseInt( vacation, 10 ) } мес. ${ parseInt( vacation, 10 ) ? `(${ duration } рабочих и ${ vacation } — отпуск за свой счёт)` : '' } на должность «${ specialty }${ subspecialty ? ' ('+subspecialty+')' : '' }» с официальным окладом в ${ salaryLabel } рублей в месяц.` }
      } );

      const renderTable = BEMHTML.apply( {
        block: 'table',
        mods: { view: 'payments' },
        tag: 'table',
        content: [
          {
            elem: 'body',
            tag: 'tbody',
            content: {
              elem: 'row',
              tag: 'tr',
              content: table
            }
          }

          // Sum
          /*
          {
            elem: 'footer',
            tag: 'tfoot',
            content: {
              elem: 'row',
              tag: 'tr',
              content: {
                elem: 'cell',
                tag: 'td',
                content: [
                  { content: `Суммарно за ${ parseInt( duration, 10 ) + parseInt( vacation, 10 ) } месяцев` },
                  { content: `${ sum } ₽` }
                ]
              }
            }
          }
          */
        ]
      } );

      bemDom.update(
        this._elem( 'description' ).domElem,
        description
      );

      bemDom.update(
        this._elem( 'result' ).domElem,
        renderTable
      );
    }
  }, {
    lazyInit: false
  } ) );
} );
