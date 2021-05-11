'use strict'

const ApiService = require('moleculer-web')

const { PORT = 3000 } = process.env

const service = {
  name: 'api',
  mixins: [ApiService],
  settings: {
    port: PORT,
    routes: [
      {
        authorization: false,
        path: 'v2/',
        autoAliases: true,
        whitelist: ['**']
      }]
  },
  async started () {
    this.logger.info('Service api.gateway start')
  }
}

module.exports = service
