module.exports = {
  name: 'poison',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  }
}
