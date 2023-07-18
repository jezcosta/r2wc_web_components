module.exports = {
  description: 'Add an component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Default'
    }
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.tsx',
        templateFile: './component/index.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/styles.ts',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.stories.ts',
        templateFile: './component/stories.js.hbs',
        abortOnFail: true
      },
      {
        type: 'append',
        path: '../../src/components/index.ts',
        pattern: '/* Exports */',
        template:
          "export { default as {{properCase name}} } from './{{properCase name}}'"
      }
    ]
    return actions
  }
}
