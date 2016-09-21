module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Pinky',
      externals: {
        react: 'React'
      }
    }
  }
}
