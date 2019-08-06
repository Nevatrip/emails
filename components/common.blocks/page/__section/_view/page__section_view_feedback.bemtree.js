block( 'page' ).elem( 'section' ).elemMod( 'view', 'feedback' )
  .content()( () => [
    {
      block: 'map',
    },
    {
      block: 'form',
      mods: {
        view: 'feedback',
        message: 'popup',
      },
      directions: [ 'bottom-center' ],
      method: 'POST',
      content: [
        {
          elem: 'header',
          content: [
            {
              block: 'heading',
              mods: { size: 'l' },
              content: 'Связаться с нами',
            },
            {
              block: 'paragraph',
              content: 'Заполните форму и задайте свой вопрос в графе «Сообщения»',
            },
          ],
        },
        {
          elem: 'content',
          content: [
            {
              elem: 'field',
              content: {
                block: 'form-field',
                mods: {
                  type: 'input',
                  required: true,
                  message: 'popup',
                },
                directions: [ 'bottom-left' ],
                name: 'name',
                content: [
                  {
                    elem: 'label',
                    content: 'Имя',
                  },
                  {
                    elem: 'control',
                    content: {
                      block: 'input',
                    },
                  },
                ],
              },
            },
            {
              elem: 'field',
              content: {
                block: 'form-field',
                mods: {
                  type: 'input',
                  required: true,
                  message: 'popup',
                },
                directions: [ 'bottom-left' ],
                name: 'phone',
                content: [
                  {
                    elem: 'label',
                    content: 'Номер телефона',
                  },
                  {
                    elem: 'control',
                    content: {
                      block: 'input',
                      placeholder: '+7 9×× ×××-××-××',
                    },
                  },
                ],
              },
            },
            {
              elem: 'field',
              content: {
                block: 'form-field',
                mods: {
                  type: 'input',
                  required: true,
                  message: 'popup',
                },
                directions: [ 'bottom-left' ],
                name: 'input',
                content: [
                  {
                    elem: 'label',
                    content: 'Почта',
                  },
                  {
                    elem: 'control',
                    content: {
                      block: 'input',
                    },
                  },
                ],
              },
            },
            {
              elem: 'field',
              content: {
                block: 'form-field',
                mods: {
                  type: 'textarea',
                  required: true,
                  message: 'popup',
                },
                directions: [ 'bottom-left' ],
                name: 'message',
                content: [
                  {
                    elem: 'label',
                    content: 'Ваше сообщение',
                  },
                  {
                    elem: 'control',
                    content: {
                      block: 'textarea',
                      name: 'message',
                    },
                  },
                ],
              },
            },
            {
              elem: 'field',
              content: {
                block: 'form-field',
                mods: {
                  type: 'checkbox',
                  required: true,
                  message: 'popup',
                },
                directions: [ 'bottom-left' ],
                name: 'input',
                content: [
                  {
                    elem: 'control',
                    content: {
                      block: 'checkbox',
                      text: 'Я согласен с предосталением персональных данных',
                    },
                  },
                ],
              },
            },
          ],
        },
        {
          elem: 'footer',
          content: {
            elem: 'submit',
          },
        },
      ],
    },
  ] );
