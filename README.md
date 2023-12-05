# Web Components lib with R2WC

A lib for build components with ReactJS and export then as Web Components, using R2WC and Vite.

## Creating a new component

- Create the component inside `src/components` folder
- Define the new component in file `src/index.ts` as Web component with the following structure:
```
customElements.define(
  'rwc-componentName',
  r2wc(ReactComponents.ComponentName, {
    props: { exampleLabel: 'string', exampleFunction: 'function', exampleObj: 'obj' }
  })
)
```

## Using generator

You can also use a component generator to create a new component structure faster, to do this execute the command `yarn generate` or `npm run generate` and follow the instructions in the terminal.
