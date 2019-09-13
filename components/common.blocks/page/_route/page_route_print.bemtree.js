block( 'page' )
  .mod( 'route', 'print' )( {
    route: [
      {
        block: 'email-text',
        mods: { tag: 'span', style: 'invisible' },
        content: 'ВАШ ПОСАДОЧНЫЙ БИЛЕТ / YOUR E-TICKET ',
      },
      {
        block: 'email-unit',
        mods: { type: 'container' },
        align: 'center',
        bgcolor: '#F3F3F3',
        content: {
          block: 'email-unit',
          mods: { type: 'container' },
          align: 'center',
          bgcolor: '#6999CC',
          width: '600',
          content: [
            {
              block: 'email-unit',
              mods: { type: 'spacer' },
              height: '4',
            }, //spacer
            {
              block: 'email-unit',
              mods: { type: 'container' },
              align: 'center',
              width: '570',
              horizonMargin: 'auto',
              content: {
                block: 'email-unit',
                mods: { type: 'row' },
                content: [
                  {
                    block: 'email-unit',
                    elem: 'td',
                    width: '125',
                    verticalAlign: 'middle',
                    content: {
                      block: 'link',
                      url: 'https://nevatrip.ru/',
                      title: 'NevaTrip.ru',
                      target: '_blank',
                      attrs: {
                        style: 'Margin:0;color:#fff!important;font-family:Arial,sans-serif;'
                          + 'font-size:30px;font-weight:700!important;line-height:30px;margin:0;'
                          + 'padding:0;text-align:left;text-decoration:none!important;',
                      },
                      content: {
                        block: 'image',
                        alt: 'NevaTrip',
                        width: '125',
                        url: 'https://nevatrip.ru/assets/img/email/nt.png',
                        attrs: {
                          style: '-ms-interpolation-mode:bicubic;border:0;clear:both;display:block; '
                            + 'height:auto;max-width:100%;outline:0;text-decoration:none;width:125px;',
                        },
                      },
                    },
                  }, //лого
                  {
                    block: 'email-unit',
                    elem: 'td',
                    verticalAlign: 'middle',
                    content: {
                      html: '&nbsp;',
                    },
                  }, //space
                  {
                    block: 'email-unit',
                    elem: 'td',
                    width: '125',
                    verticalAlign: 'middle',
                    content: {
                      block: 'email-unit',
                      mods: { type: 'button' },
                      color: '#ffffff',
                      border: '3px solid #fff',
                      fontWeight: '15px',
                      lineHeight: '15px',
                      fontSize: '15px',
                      padding: '9px 3px 8px',
                      bgColor: 'transparent',
                      url: '#',
                      content: {
                        html: '<b>Печать</b>&nbsp;/&nbsp;Print',
                      },
                    },

                  }, //печать
                ],
              },
            }, //шапка
            {
              block: 'email-unit',
              mods: { type: 'spacer' },
              height: '4',
            }, //spacer
            {
              block: 'email-unit',
              mods: { type: 'container' },
              align: 'center',
              bgcolor: '#FFFFFF',
              width: '570',
              horizonMargin: 'auto',
              content: [
                {
                  block: 'email-unit',
                  mods: { type: 'spacer' },
                  height: '8',
                }, // spacer
                {
                  block: 'email-unit',
                  mods: { type: 'container' },
                  align: 'center',
                  width: '540',
                  horizonMargin: 'auto',
                  content: [
                    {
                      block: 'email-text',
                      mods: { tag: 'p' },
                      color: '#a5a5a5',
                      fontSize: '23px',
                      fontWeight: '400',
                      letterSpacing: '.5px',
                      lineHeight: '26px',
                      align: 'center',
                      textTransform: 'lowercase',
                      content: [
                        {
                          block: 'email-text',
                          mods: { tag: 'b' },
                          content: 'Посадочный билет',
                        },
                        ' / ',
                        {
                          block: 'email-text',
                          mods: { tag: 'span', style: 'translation' },
                          content: 'Your E-ticket',
                        },
                      ],
                    }, // посадочный билет
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '8',
                    }, // spacer
                    {
                      block: 'email-text',
                      mods: { tag: 'h1' },
                      color: '#252929',
                      fontSize: '50px !important',
                      fontWeight: '700 !important',
                      letterSpacing: '.8px !important',
                      lineHeight: '50px !important',
                      align: 'center',
                      textTransform: 'uppercase !important',
                      content: {
                        block: 'email-text',
                        mods: { tag: 'font', style: 'inherit' },
                        color: '#252929',
                        fontSize: '50px !important',
                        fontWeight: '700 !important',
                        letterSpacing: '.8px !important',
                        lineHeight: '50px !important',
                        textTransform: 'uppercase !important',
                        content: 'NT000000',
                      },
                    }, // номер билета todo: если 2 номера то другой стиль
                    {
                      block: 'email-text',
                      mods: { tag: 'h2' },
                      color: '#252929',
                      fontSize: '30px !important',
                      fontWeight: '400 !important',
                      lineHeight: '32px !important',
                      align: 'center',
                      content: [
                        {
                          block: 'email-link',
                          url: 'https://nevatrip.ru/',
                          title: 'Заголовок',
                          target: '_blank',
                          content: 'Заголовок',
                          color: '#252929',
                          textDecoration: 'underline',
                        }, // Заголовок на русском
                        {
                          block: 'email-unit',
                          mods: { type: 'spacer' },
                          height: '2',
                        }, // spacer
                        {
                          block: 'email-link',
                          url: 'https://en.nevatrip.ru/',
                          title: 'Title',
                          target: '_blank',
                          content: 'Title',
                          textDecoration: 'underline',
                          mods: { tag: 'span', style: 'translation' },
                        }, // Заголовок перевод
                      ],
                    }, // название экскурсии
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '7',
                    }, // spacer
                  ],
                }, // содержимое: номер название
                {
                  block: 'email-unit',
                  mods: { type: 'dotted-line' },
                }, // пунктир
                {
                  block: 'email-unit',
                  mods: { type: 'container' },
                  width: '540',
                  horizonMargin: 'auto',
                  content: [
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'дата',
                      titleEn: 'date',
                      content: 'в ночь с 10.09.2019 на 11.09.2019', //если прогулка ночная
                      contentEn: 'on the night from 10.09.2019 to 11.09.2019', //если прогулка ночная

                      // inside: '10.09.2019', // если прогулка дневная
                    }, // дата
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'время',
                      titleEn: 'time',

                      //одно направление, фиксированное время
                      content: '14:00',

                      // открытое время
                      // content: [
                      //   {
                      //     html: 'в течение дня',
                      //   },
                      //   {
                      //     tag: 'br',
                      //   },
                      //   {
                      //     block: 'email-text',
                      //     mods: { tag: 'font', style: 'translation-param' },
                      //     content: 'during the day',
                      //   },
                      // ],

                      // фиксированное время туда-обратно
                      // content: [
                      //   {
                      //     html: 'туда ',
                      //   },
                      //   {
                      //     block: 'email-text',
                      //     mods: { tag: 'font', style: 'translation-param' },
                      //     content: '(departure) ',
                      //   },
                      //   {
                      //     html: '14:00',
                      //   },
                      //   {
                      //     html: ',',
                      //   },
                      //   {
                      //     tag: 'br',
                      //   },
                      //   {
                      //     html: 'обратно ',
                      //   },
                      //   {
                      //     block: 'email-text',
                      //     mods: { tag: 'font', style: 'translation-param' },
                      //     content: '(return) ',
                      //   },
                      //   {
                      //     html: '18:00',
                      //   },
                      // ],
                    }, // время
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'причал',
                      titleEn: 'place of departure',
                      content: 'Дворцовая наб. 18',
                      contentEn: 'Palace Embankment',
                    }, // причал
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'места',
                      titleEn: 'seats',
                      content: 'M15, M16',
                    }, // места
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'направление',
                      titleEn: 'direction',
                      content: 'СПБ — ПТФ',
                      contentEn: 'SPB – PTF',
                    }, // направление
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'продолжительность',
                      titleEn: 'duration',
                      content: '3 часа',
                      contentEn: '3 hours',
                    }, // продолжительность
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'дополнительно',
                      titleEn: 'additional',
                      content: 'Аудиогид по Петербургу',
                    }, // дополнительно
                    {
                      block: 'email-unit',
                      mods: { type: 'param' },
                      title: 'билеты',
                      titleEn: 'tickets',
                      content: [
                        {
                          block: 'email-unit',
                          mods: { type: 'param-ticket' },
                          name: 'Взрослый',
                          nameEn: 'Adult',
                          quantity: '4',
                        }, // взрослый
                      ],
                    }, // билеты
                  ],
                }, // содержимое: данные экскурсии
                {
                  block: 'email-unit',
                  mods: { type: 'dotted-line' },
                }, // пунктир
                {
                  block: 'email-unit',
                  mods: { type: 'skeleton' },
                  width: '540',
                  horizonMargin: 'auto',
                  content: [
                    {
                      block: 'email-unit',
                      mods: { type: 'tr' },
                      colspan: 3,
                      content: {
                        block: 'email-unit',
                        mods: { type: 'td' },
                        colspan: 3,
                        content: {
                          block: 'email-unit',
                          mods: { type: 'spacer' },
                          height: '6',
                        }, //spacer,
                      },
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'tr' },
                      content: [
                        {
                          block: 'email-unit',
                          mods: { type: 'td' },
                          width: 20,
                          content: {
                            html: '&nbsp;',
                          }, // пробел
                        },
                        {
                          block: 'email-unit',
                          mods: { type: 'td' },
                          width: 60,
                          valign: 'middle',
                          content: {
                            block: 'image',
                            url: 'https://nevatrip.ru/assets/img/email/ex.png',
                            alt: '!&nbsp;',
                            attrs: {
                              style: 'vertical-align:middle;-ms-interpolation-mode:bicubic;clear:both;color:#6999cc;display:block;float:left;font-size:150px;font-weight:700;height:auto;line-height:150px;max-width:100%;outline:0;text-align:left;text-decoration:none;width:auto;',
                            },
                          }, // восклицательный знак,
                        },
                        {
                          block: 'email-unit',
                          mods: { type: 'td' },
                          valign: 'middle',
                          content: [
                            {
                              block: 'email-text',
                              color: '#252929',
                              fontSize: '17px',
                              tag: 'p',
                              fontWeight: '700',
                              lineHeight: '23px',
                              content: {
                                html: 'Билет распечатывать не&nbsp;обязательно, зарегистрируйтесь на&nbsp;рейс '
                                  + 'перед посадкой, сообщив &#8470; электронного билета кассиру, '
                                  + 'и&nbsp;получите посадочный билет. Вам необходимо подойти за&nbsp;15-20 '
                                  + 'минут до&nbsp;отправления рейса (в&nbsp;выходные для метеоров&nbsp;&mdash; заранее)',
                              },
                            }, // инфо
                            {
                              block: 'email-text',
                              color: '#486482',
                              fontSize: '13.6',
                              tag: 'p',
                              fontWeight: '400',
                              lineHeight: '18.4px',
                              content: {
                                html: 'You do not have to print the ticket, just show or say this e-ticket '
                                  + '#HT to the Administrator on the pier, and get a boarding ticket. '
                                  + 'You need to come 15-20 minutes before the departure.',
                              },
                            }, // info
                          ],
                        },
                      ],
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'tr' },
                      colspan: 3,
                      content: {
                        block: 'email-unit',
                        mods: { type: 'td' },
                        colspan: 3,
                        content: {
                          block: 'email-unit',
                          mods: { type: 'spacer' },
                          height: '16',
                        }, //spacer,
                      },
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'tr' },
                      colspan: 3,
                      content: {
                        block: 'email-unit',
                        mods: { type: 'td' },
                        colspan: 3,
                        valign: 'middle',
                        align: 'center',
                        content: [
                          {
                            block: 'email-map',
                            image: 'https://nevatrip.ru/assets/img/e_from_photo/nevs18-new.jpg',
                            link: 'https://yandex.ru/maps/2/saint-petersburg/?ll=30.322541%2C59.944376&mode=whatshere&whatshere%5Bpoint%5D=30.321994%2C59.944384&whatshere%5Bzoom%5D=17&z=17',
                          },
                        ], // карта
                      },
                    },
                  ],
                }, // содержимое: инфо
                {
                  block: 'email-unit',
                  mods: { type: 'spacer' },
                  height: '1',
                }, // spacer
                {
                  block: 'email-unit',
                  mods: { type: 'dotted-line' },
                }, // пунктир
                {
                  block: 'email-unit',
                  mods: { type: 'spacer' },
                  height: '1',
                }, // spacer
                {
                  block: 'email-unit',
                  mods: { type: 'container' },
                  width: '540',
                  align: 'center',
                  horizonMargin: 'auto',
                  content: [
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '1',
                    }, // spacer
                    {
                      block: 'email-text',
                      mods: {
                        tag: 'p',
                      },
                      color: '#000000',
                      fontSize: '30px',
                      fontWeight: '400',
                      lineHeight: '32px',
                      align: 'center',
                      content: [
                        {
                          tag: 'b',
                          content: {
                            html: 'Ваш промокод на скидку</br> 5% на другую прогулку!',
                          },
                        },
                        {
                          block: 'email-unit',
                          mods: { type: 'spacer' },
                          height: '5',
                        }, // spacer
                        {
                          block: 'email-text',
                          mods: {
                            tag: 'font',
                          },
                          color: '#486482',
                          fontSize: '24px',
                          lineHeight: '25.6px',
                          content: 'Your 5% discount for the next tour!',
                        },
                      ],
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '10',
                    }, // spacer
                    {
                      block: 'link',
                      url: 'https://nevatrip.ru/skidki-i-akcii',
                      target: '_blank',
                      alt: 'СПАСИБО',
                      attrs: {
                        width: '179',
                        height: '59',
                        align: 'center',
                        style: 'display:inline-block;height:59px;line-height:59px;width:179px;text-align:center',
                      },
                      content: {
                        block: 'image',
                        url: 'https://nevatrip.ru/assets/img/email/btn-call-now-blue.png',
                        width: '179',
                        height: '59',
                        attrs: {
                          align: 'center',
                          style: '-ms-interpolation-mode:bicubic;background:#f8d557;border: 0;border-radius: 59px;clear:both;color:#6890ce;display:inline-block;font-size:21px;font-weight:700;height:59px;line-height:59px;max-width:100%;outline:0;text-align:center;text-decoration:none;vertical-align:middle;width:179px;',
                        },
                      },
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '10',
                    }, // spacer
                    {
                      block: 'email-text',
                      mods: {
                        tag: 'p',
                      },
                      color: '#999999',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '22px',
                      align: 'center',
                      content: [
                        {
                          tag: 'b',
                          content: [
                            'Для использования скидки по промокоду просто',
                            {
                              tag: 'br',
                            },
                            'введите «СПАСИБО» (без кавычек) в форме оплаты',
                            {
                              tag: 'br',
                            },
                            'при оформлении бронирования на сайте ',
                            {
                              block: 'link',
                              url: 'https://nevatrip.ru/',
                              attrs: {
                                style: 'Margin:0;color:#999999;font-family:Arial,sans-serif;font-weight:400;'
                                  + 'line-height:22px!important;margin:0;padding:0;text-align:left;text-decoration:none;',
                              },
                              content: {
                                block: 'email-text',
                                color: '#999999',
                                mods: {
                                  tag: 'font',
                                },
                                content: 'nevatrip.ru',
                              },
                            },
                          ],
                        },
                        {
                          tag: 'br',
                        },
                        {
                          block: 'email-text',
                          mods: {
                            tag: 'font',
                          },
                          color: '#486482',
                          content: [
                            'To apply the discount enter the promocode',
                            {
                              tag: 'br',
                            },
                            '"СПАСИБО" (without quotes) in the reservation form',
                            {
                              tag: 'br',
                            },
                            'on the website ',
                            {
                              block: 'link',
                              url: 'https://nevatrip.ru/',
                              attrs: {
                                style: 'Margin:0;color:#486482;font-family:Arial,sans-serif;font-weight:400;'
                                  + 'line-height:22px!important;margin:0;padding:0;text-align:left;text-decoration:none;',
                              },
                              content: {
                                block: 'email-text',
                                color: '#486482',
                                mods: {
                                  tag: 'font',
                                },
                                content: 'nevatrip.ru',
                              },
                            },
                            ' or ',
                            {
                              block: 'link',
                              url: 'https://en.nevatrip.ru/',
                              attrs: {
                                style: 'Margin:0;color:#486482;font-family:Arial,sans-serif;font-weight:400;'
                                  + 'line-height:22px!important;margin:0;padding:0;text-align:left;text-decoration:none;',
                              },
                              content: {
                                block: 'email-text',
                                color: '#486482',
                                mods: {
                                  tag: 'font',
                                },
                                content: 'en.nevatrip.ru',
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '8',
                    }, // spacer
                  ],
                }, // содержимое: промокод спасибо
                {
                  block: 'email-unit',
                  mods: { type: 'spacer' },
                  height: '1',
                }, // spacer
                {
                  block: 'email-unit',
                  mods: { type: 'dotted-line' },
                }, // пунктир
                {
                  block: 'email-unit',
                  mods: { type: 'container' },
                  width: '540',
                  align: 'center',
                  horizonMargin: 'auto',
                  content: [
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '1',
                    }, // spacer
                    {
                      block: 'email-text',
                      mods: {
                        tag: 'p',
                      },
                      color: '#514c46',
                      fontSize: '24px',
                      fontWeight: '400',
                      lineHeight: '28px',
                      align: 'center',
                      content: [
                        {
                          tag: 'b',
                          content: 'Служба поддержки',
                        },
                        ' / ',
                        {
                          block: 'email-text',
                          mods: {
                            tag: 'font',
                          },
                          color: '#486482',
                          fontSize: '19.2px',
                          content: 'Support service',
                        },
                      ],
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '3',
                    }, // spacer
                    {
                      block: 'email-text',
                      mods: {
                        tag: 'p',
                      },
                      color: '#514c46',
                      fontSize: '25px',
                      fontWeight: '400',
                      lineHeight: '30px',
                      align: 'center',
                      content: {
                        html: '(09:00 &mdash; 01:00)',
                      },
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '8',
                    }, // spacer
                    {
                      block: 'link',
                      url: 'tel:88122449824',
                      attrs: {
                        width: '200',
                        height: '46',
                        align: 'center',
                        style: 'display:inline-block;height:46px;line-height:46px;width:200px;text-align:center',
                      },
                      content: {
                        block: 'image',
                        url: 'https://nevatrip.ru/assets/img/email/btn-call-now.jpg',
                        alt: 'Позвонить сейчас',
                        attrs: {
                          width: '200',
                          height: '46',
                          align: 'center',
                          style: '-ms-interpolation-mode:bicubic;background:#f8d557;border:0;border-radius:46px;'
                            + 'clear:both;color:#1f1c15;display:inline-block;font-size:21px;'
                            + 'font-weight:700;height:46px;line-height:46px;max-width:100%;outline:0;text-align:center;'
                            + 'text-decoration:none;vertical-align:middle;width:200px;',
                        },
                      },
                    },
                    {
                      block: 'email-unit',
                      mods: { type: 'spacer' },
                      height: '10',
                    }, // spacer
                  ],
                }, // содержимое: служба поддержки
              ],
            }, // белый фон
            {
              block: 'email-unit',
              mods: { type: 'spacer' },
              height: '5',
            }, //spacer
            {
              block: 'email-text',
              mods: {
                tag: 'p',
              },
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '19px',
              align: 'center',
              content: [
                {
                  tag: 'b',
                  content: 'Если сообщение отображается некорректно, нажмите ',
                },
                {
                  block: 'link',
                  url: '#',
                  attrs: {
                    style: 'Margin: 0; color: #FFFFFF; font-family: Arial,sans-serif; font-weight: 400; '
                      + 'line-height: 20px; margin: 0; padding: 0; text-align: left; text-decoration: none;',
                  },
                  content: {
                    block: 'email-text',
                    color: '#FFFFFF',
                    textDecoration: 'underline',
                    mods: {
                      tag: 'font',
                    },
                    content: 'здесь',
                  },
                },
                {
                  tag: 'br',
                },
                {
                  block: 'email-text',
                  color: '#FFFFFF',
                  fontSize: '11.2',
                  mods: {
                    tag: 'font',
                  },
                  content: [
                    'If the message is not displayed correctly, click ',
                    {
                      block: 'link',
                      url: '#',
                      attrs: {
                        style: 'Margin: 0; color: #FFFFFF; font-family: Arial,sans-serif; font-weight: 400; '
                          + 'line-height: 20px; margin: 0; padding: 0; text-align: left; text-decoration: none;',
                      },
                      content: {
                        block: 'email-text',
                        color: '#FFFFFF',
                        textDecoration: 'underline',
                        mods: {
                          tag: 'font',
                        },
                        content: 'here',
                      },
                    },
                  ],
                },
              ],
            },
            {
              block: 'email-unit',
              mods: { type: 'spacer' },
              height: '5',
            }, //spacer
          ],
        },
      },
      {
        attrs: {
          style: 'white-space:nowrap!important;line-height:0;color: #ffffff;',
        },
        content: ' - - - - - - - - - - - - - - - - - - - - - - - -  '
          + '- - - - - - - - - - - - - - - - - - - - - - - - - - - - -',
      }, // запрет изменения ширины и РАЗМЕРА ШРИФТА в gmail
      {
        tag: 'style',
        content: {
          html: '.MsoNormal_mailru_css_attribute_postfix{margin:0}'
            + 'a{text-decoration: none;color:inherit;color:inherit !important;}'
            + '@media print{body, html{-webkit-print-color-adjust: exact;}}',
        },
      },
    ],
  } );