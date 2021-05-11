'use strict'

const products = [{
  name: 'pala de padel',
  id: 1
}, {
  name: 'zapatillas de padel',
  id: 2
}]

module.exports = {
  name: 'users',
  actions: {
    getAll: {
      rest: 'GET /',
      async handler () {
        return products
      }
    }
  },
  started () {
    this.logger.info('Products service started')
  }
}
