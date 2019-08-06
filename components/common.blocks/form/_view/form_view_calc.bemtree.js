block( 'form' ).mod( 'view', 'calc' )(
  content()( node => [
    {
      elem: 'header',
      content: [
        {
          block: 'radio-group',
          mods: {
            type: 'button'
          },
          name: 'step',
          val: 1,
          options: [
            {
              val: 1,
              text: '1) Оформление'
            },
            {
              val: 2,
              text: '2) Оплата'
            },
            {
              val: 3,
              text: '3) Получение оригиналов документов'
            }
          ]
        }
      ]
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'item',
          content: {
            block: 'form-field',
            mods: {
              type: 'radio-group',
              required: true
            },
            name: 'card',
            content: [
              {
                block: 'label',
                content: 'Зарплатная карта: '
              },
              {
                block: 'radio-group',
                mods: {
                  type: 'line',
                  width: 'available'
                },
                val: 0,
                options: [
                  {
                    val: 0,
                    text: 'Без зарплатной карты'
                  },
                  {
                    val: 1,
                    text: 'С зарплатной картой'
                  },
                ]
              }
            ]
          }
        },
        {
          elem: 'item',
          content: [
            {
              block: 'form-field',
              mods: {
                type: 'select',
                required: true,
                inline: true
              },
              name: 'specialty',
              content: [
                {
                  block: 'label',
                  mix: { block: 'form-field', elem: 'label' },
                  content: 'Должность:'
                },
                {
                  block: 'select',
                  mods: {
                    mode: 'radio'
                  },
                  mix: { block: 'form-field', elem: 'control' },
                  val: 1,
                  optionsMaxHeight: 330,
                  options: [
                    {
                      title: 'Экономика',
                      group: [
                        { val: 'HR, найм персонала', text: 'HR, найм персонала' },
                        { val: 'PR-менеджер', text: 'PR-менеджер' },
                        { val: 'SMM-менеджер', text: 'SMM-менеджер' },
                        { val: 'Аудитор', text: 'Аудитор ' },
                        { val: 'Бренд-менеджер', text: 'Бренд-менеджер' },
                        { val: 'Брокер', text: 'Брокер' },
                        { val: 'Бухгалтер', text: 'Бухгалтер' },
                        { val: 'Инкассатор', text: 'Инкассатор' },
                        { val: 'Кризис-менеджер', text: 'Кризис-менеджер' },
                        { val: 'Маркетолог', text: 'Маркетолог' },
                        { val: 'Менеджер по логистике', text: 'Менеджер по логистике' },
                        { val: 'Менеджер', text: 'Менеджер ' },
                        { val: 'Мерчендайзер', text: 'Мерчендайзер' },
                        { val: 'Налоговый инспектор', text: 'Налоговый инспектор' },
                        { val: 'Оценщик', text: 'Оценщик' },
                        { val: 'Продакт-менеджер', text: 'Продакт-менеджер' },
                        { val: 'Секретарь', text: 'Секретарь' },
                        { val: 'Статистик', text: 'Статистик' },
                        { val: 'Супервайзер', text: 'Супервайзер' },
                        { val: 'Товаровед', text: 'Товаровед' },
                        { val: 'Торговый представитель', text: 'Торговый представитель' },
                        { val: 'Финансист', text: 'Финансист' },
                        { val: 'Экономист', text: 'Экономист' },
                      ]
                    },
                    {
                      title: 'Сервис и обслуживание',
                      group: [
                        { val: 'Агент по туризму', text: 'Агент по туризму' },
                        { val: 'Администратор ресторана', text: 'Администратор ресторана' },
                        { val: 'Бармен', text: 'Бармен' },
                        { val: 'Визажист', text: 'Визажист' },
                        { val: 'Гид-переводчик', text: 'Гид-переводчик' },
                        { val: 'Гид-переводчик', text: 'Гид-переводчик' },
                        { val: 'Оператор call-центра', text: 'Оператор call-центра' },
                        { val: 'Экскурсовод', text: 'Экскурсовод' },
                      ]
                    },
                    {
                      title: 'Информатика и связь',
                      group: [
                        { val: 'HTML-верстальщик', text: 'HTML-верстальщик' },
                        { val: 'Web-интегратор', text: 'Web-интегратор' },
                        { val: 'Администратор базы данных', text: 'Администратор базы данных' },
                        { val: 'Администратор сайта', text: 'Администратор сайта' },
                        { val: 'Веб-дизайнер', text: 'Веб-дизайнер' },
                        { val: 'Диктор', text: 'Диктор' },
                        { val: 'Контент-менеджер', text: 'Контент-менеджер' },
                        { val: 'Копирайтер', text: 'Копирайтер' },
                        { val: 'Системный администратор', text: 'Системный администратор' },
                        { val: 'Тестировщик', text: 'Тестировщик' },
                      ]
                    },
                    {
                      title: 'Юриспруденция и право',
                      group: [
                        { val: 'Инспектор по охране труда', text: 'Инспектор по охране труда' },
                        { val: 'Правовед', text: 'Правовед' },
                        { val: 'Юрист', text: 'Юрист' }
                      ]
                    }
                  ]
                },
                {
                  block: node.block,
                  elem: 'subspecialty',
                  mix: { block: 'form-field', elem: 'label' },
                  tag: 'abbr',
                  attrs: {
                    title: 'зависит от ежемесячного оклада'
                  }
                },
              ]
            },
          ]
        },
        {
          elem: 'item',
          content: {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true
            },
            name: 'vacation',
            content: [
              {
                block: 'label',
                content: 'Отпуск'
              },
              {
                block: 'input',
                mods: {
                  type: 'range',
                  width: 'available'
                },
                val: 3,
                min: 0,
                minLabel: 'без отпуска',
                max: 9,
                maxLabel: 'до 9 месяцев',
                step: 1,
                minInput: 'без отпуска',
                pluralLabel: [ 'месяц', 'месяца', 'месяцев' ]
              }
            ]
          }
        },
        {
          elem: 'item',
          content: {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true
            },
            name: 'duration',
            content: [
              {
                block: 'label',
                content: 'Стаж'
              },
              {
                block: 'input',
                mods: {
                  type: 'range',
                  width: 'available'
                },
                val: 3,
                min: 3,
                minLabel: 'от 3 месяцев',
                max: 12,
                maxLabel: 'до 12 месяцев',
                step: 1,
                pluralLabel: [ 'месяц', 'месяца', 'месяцев' ]
              }
            ]
          }
        },
        {
          elem: 'item',
          content: {
            block: 'form-field',
            mods: {
              type: 'input',
              required: true
            },
            name: 'salary',
            content: [
              {
                block: 'label',
                content: 'Оклад'
              },
              {
                block: 'input',
                mods: {
                  type: 'range',
                  width: 'available'
                },
                val: 4500,
                min: 4500,
                minLabel: 'от 4500 руб.',
                max: 80250,
                maxLabel: '80000 руб. и больше',
                step: 250,
                maxInput: 'более 80000 руб.',
                pluralLabel: [ 'руб.', 'руб.', 'руб.' ]
              }
            ]
          }
        }
      ]
    },
    {
      elem: 'content',
      content: [
        {
          block: 'heading',
          mods: {
            size: 'm'
          },
          content: 'График платежей'
        },
        { tag: 'br' },
        { elem: 'result' }
      ]
    },
    {
      elem: 'footer',
      content: [
        {
          block: 'button',
          mods: {
            view: 'action',
            type: 'submit',
            size: 'xxl'
          },
          text: 'Оформить'
        },
        { elem: 'description' }
      ]
    }
  ] )
)
