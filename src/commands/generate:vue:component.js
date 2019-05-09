module.exports = {
  name: 'generate:vue:component',
  alias: ['gvc'],
  description: 'This command will create a vue component',
  run: async toolbox => {
    const { 
      parameters: { first, },
      print: { error, success },
      template: { generate },
      strings: { kebabCase, pascalCase }, 
    } = toolbox;

    if (!first) {
      error('Component name must be supplied :(');
    } else {      
      const componentName = pascalCase(first);
      const cssComponentName = kebabCase(first);

      await generate({
        template: 'vue-component.js.ejs',
        target: `src/components/${componentName}/index.vue`,
        props: { name: componentName, cssComponentName }
      });
      
      success(`Component ${componentName} was generated!`);
    }
  },
};
