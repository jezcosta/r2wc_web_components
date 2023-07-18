/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./component/index.cjs')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
}
