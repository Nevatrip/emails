[{
  shouldDeps: [
    {
      block: 'map',
    },
    {
      block: 'form',
      mods: {
        view: 'feedback',
        message: 'popup',
      },
    },
    {
      block: 'heading',
      mods: { size: 'l' },
    },
    {
      block: 'paragraph',
    },
    {
      block: 'form-field',
      mods: {
        type: [
          'input',
          'textarea',
          'checkbox',
        ],
        required: true,
        message: 'popup',
      },
    }
  ]
}]
