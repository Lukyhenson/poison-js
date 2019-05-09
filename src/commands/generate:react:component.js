module.exports = {
  name: 'generate:react:component',
  alias: ['grc'],
  description: 'This command will create a react component, [--path] [--type] [--styled]',
  run: async toolbox => {
    const { 
      parameters: { first, options },
      print: { error, info, spin, success },
      template: { generate },
      strings: { kebabCase, lowerCase, pascalCase }, 
    } = toolbox;

    if (!first) {
      error('Component name must be supplied :(');
    } else {      
      const componentName = pascalCase(first);
      const cssComponentName = kebabCase(first);
      const isStyled = lowerCase(options.styled) === 'y' || lowerCase(options.styled) === 'yes';
      const isFunctionalComponent = lowerCase(options.type) === 'f';
      const isClassComponent = lowerCase(options.type) === 'c';

      if (isClassComponent) {
        if (!isStyled) {
          await generate({
            template: 'react-class-component.js.ejs',
            target: `src/components/${componentName}/index.js`,
            props: { name: componentName }
          });
          
          await generate({
            template: 'react-scss.js.ejs',
            target: `src/components/${componentName}/index.scss`,
            props: { name: cssComponentName }
          });
          
          success(`Component ${componentName} was generated!`);
        }
      } else if (isFunctionalComponent) {
        if (!isStyled) {
          await generate({
            template: 'react-func-component.js.ejs',
            target: `src/components/${componentName}/index.js`,
            props: { name: componentName }
          });
          
          await generate({
            template: 'react-scss.js.ejs',
            target: `src/components/${componentName}/index.scss`,
            props: { name: cssComponentName }
          });
          
          success(`Component ${componentName} was generated!`);
        }
      } else {
        error('Component type name must be supplied!');
      }
    }
  },
};
