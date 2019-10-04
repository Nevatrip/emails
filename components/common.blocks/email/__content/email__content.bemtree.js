// block( 'email' ).elem( 'content' )(
//   def()( node => {
//     const order = node.data.api || {};
//
//     const [
//       {
//         product: {
//           directions,
//           title: {
//             ru: { name: node._nameRu },
//             en: { name: nameEn },
//           },
//         },
//         options,
//       },
//     ] = order.products;
//
//     const [
//       {
//         direction,
//         number,
//         tickets,
//         event: { start },
//       },
//     ] = options;
//
//     const ticketsInOrder = [];
//     let pierNameRu = '';
//     let pierNameEn = '';
//     let pierUrl = '';
//     let pierPhoto = '';
//
//     //const timeOffsetTs = 3*3600;//+3hours TimeStamp
//
//     directions.forEach( ( { _key, tickets: _tickets, point: _point } ) => {
//       if ( direction === _key ) {
//         pierNameRu = _point.title.ru;
//         pierNameEn = _point.title.en;
//         pierUrl = `https://yandex.ru/maps/2/saint-petersburg/?ll=${ _point.coords.lng }%2C${ _point.coords.lat }&mode=whatshere&whatshere%5Bpoint%5D=${ _point.coords.lng }%2C${ _point.coords.lat }&whatshere%5Bzoom%5D=17&z=17`;
//         pierPhoto = node._urlFor( _point.image.asset._ref ).url();
//
//         _tickets.forEach( _ticket => {
//           if ( tickets.hasOwnProperty( _ticket._key ) && tickets[ _ticket._key ] ) {
//             ticketsInOrder.push( {
//               name: `${ _ticket.category.name.current === 'standart' ? '' : `${ _ticket.category.title }` }${ _ticket.name }`,
//               count: tickets[ _ticket._key ],
//             } )
//           }
//         } )
//       }
//     } );
//
//     function convertTsToDay ( unixtimestamp, lang ) {
//       const monthsArr = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ];
//       const date = new Date( unixtimestamp*1000 );
//       const year = date.getFullYear();
//       const month = monthsArr[ date.getMonth() ];
//       const day = date.getDate();
//       let zero = '';
//
//       if ( day<10 ) {
//         zero = '0'
//       }
//       return lang === 'en'
//         ? `${ month }/${ zero }${ day }/${ year }`
//         : `${ zero }${ day }.${ month }.${ year }`;
//     }//dd.mm.yyyy/mm.dd.yyyy из timestamp
//
//     let dateRu;
//     let dateEn;
//
//     const dateTs = ( new Date( start ) ).getTime() / 1000; // получить timestamp даты прогулки
//     const hour = `0${ ( new Date( dateTs * 1000 ) ).getHours() }`.substr( -2 );// двузначное число часов старта прогулки
//     const minutes = `0${ ( new Date( dateTs * 1000 ) ).getMinutes() }`.substr( -2 );// двузначное число часов старта прогулки
//     const clock = `${ hour }:${ minutes }`;
//
//     if ( hour > 21 ) {
//       dateRu = `В ночь с ${ convertTsToDay( dateTs ) } на ${ convertTsToDay( dateTs + 86400 ) }`;
//       dateEn = `On the night from ${ convertTsToDay( dateTs, 'en' ) } to ${ convertTsToDay( dateTs + 86400, 'en' ) }`;
//     } else if ( hour < 4 ) {
//       dateRu = dateRu = `В ночь с ${ convertTsToDay( dateTs - 86400 ) } на ${ convertTsToDay( dateTs ) }`;
//       dateEn = dateEn = `On the night from ${ convertTsToDay( dateTs - 86400, 'en' ) } to ${ convertTsToDay( dateTs, 'en' ) }`;
//     } else {
//       dateRu = convertTsToDay( dateTs );
//       dateEn = convertTsToDay( dateTs, 'en' );
//     }
//
//     return applyNext();
//   } ),
// );
