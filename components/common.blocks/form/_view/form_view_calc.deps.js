[{
  shouldDeps: [
    {
      block: 'form-field',
      mods: {
        type: ['input', 'radio-group', 'select'],
        required: true,
        inline: true,
      },
    },
    {
      block: 'label'
    },
    {
      block: 'input',
      mods: {
        type: 'range',
        width: 'available'
      }
    },
    {
      block: 'select',
      mods: { mode: 'radio' },
    },
    {
      block: 'radio-group',
      mods: {
        type: 'line',
      }
    },
    {
      block: 'table',
      mods: { view: 'payments' }
    }
  ]
}]
