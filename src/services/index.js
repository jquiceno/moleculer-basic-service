'use strict'

const glob = require('glob')
const path = require('path')

const services = glob.sync('**/services/**/*.service.js')
  .map(service => require(path.resolve(service)))
  .filter(service => service.name)

module.exports = services
