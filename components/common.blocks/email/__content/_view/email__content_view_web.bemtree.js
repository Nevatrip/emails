block( 'email' ).elem( 'content' ).elemMod( 'view', 'web' )( {
  content: node => {
    const order = node.data.api || {};
    const ntNum = order.payment.Model.InternalId;

    //const nameRu = order.products[ 0 ].product.title.ru.name;
    //const nameEn = order.products[ 0 ].product.title.en.name;
    //const tickets = order.products[ 0 ].product.directions[ 0 ].tickets;
    //const start = order.products[ 0 ].product.directions[ 0 ].schedule[ 0 ].start;
    const userEmail = order.user.email;

    //const timeOffsetTs = 3*3600;//+3hours TimeStamp
    //const pierNameRu = '';
    //const pierNameEn = '';
    //const pierUrl = '';
    //const pierPhoto = '';

    // function convertTsToDay ( unixtimestamp, lang ) {
    //   const monthsArr = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ];
    //   const date = new Date( unixtimestamp*1000 );
    //   const year = date.getFullYear();
    //   const month = monthsArr[ date.getMonth() ];
    //   const day = date.getDate();
    //   let zero = '';
    //
    //   if ( day<10 ) {
    //     zero = '0'
    //   }
    //   return lang === 'en'
    //     ?`${ month }.${ zero }${ day }.${ year }`
    //     :`${ zero }${ day }.${ month }.${ year }`;
    // }//dd.mm.yyyy/mm.dd.yyyy из timestamp
    //
    // let dateRu;
    // let dateEn;
    //
    // const dateTs = ( new Date( start ) ).getTime() / 1000; // получить timestamp даты прогулки
    // const hour = `0${ ( new Date( dateTs * 1000 ) ).getHours() }`.substr( -2 );// двузначное число часов старта прогулки
    // const minutes = `0${ ( new Date( dateTs * 1000 ) ).getMinutes() }`.substr( -2 );// двузначное число часов старта прогулки
    // const clock = `${ hour }:${ minutes }`;
    //
    // if ( hour > 21 ) {
    //   dateRu = `В ночь с ${ convertTsToDay( dateTs ) } на ${ convertTsToDay( dateTs + 86400 ) }`;
    //   dateEn = `On the night from ${ convertTsToDay( dateTs, 'en' ) } to ${ convertTsToDay( dateTs + 86400, 'en' ) }`;
    // } else if ( hour < 4 ) {
    //   dateRu = dateRu = `В ночь с ${ convertTsToDay( dateTs - 86400 ) } на ${ convertTsToDay( dateTs ) }`;
    //   dateEn = dateEn = `On the night from ${ convertTsToDay( dateTs - 86400, 'en' ) } to ${ convertTsToDay( dateTs, 'en' ) }`;
    // } else {
    //   dateRu = convertTsToDay( dateTs );
    //   dateEn = convertTsToDay( dateTs, 'en' );
    // }

    return [
      {
        block: 'thanks',
        email: userEmail,
        number: ntNum,
        content: [
          {
            block: 'email-web',
            content: [
              {
                elem: 'header',
                content: [
                  {
                    block: 'link',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]
  },
} )
