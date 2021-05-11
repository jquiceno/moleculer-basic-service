'use strict'

require('dotenv').config()

const { ServiceBroker } = require('moleculer')
const services = require('./services')
// const { v4: uuid } = require('uuid')
require('dotenv').config()

// require('@moleculer/lab')

// Create broker
const broker = new ServiceBroker({
  // nodeID: `core.${uuid().split('-')[0]}`,
  // transporter: 'nats://34.69.157.250:4222',
  // metrics: {
  //   enabled: true,
  //   reporter: 'Laboratory'
  // },
  // tracing: {
  //   enabled: true,
  //   exporter: 'Laboratory'
  // },
  // logger: [{
  //   type: 'Console'
  // }, 'Laboratory']
})

// Init services broker
async function init () {
  try {
    // Load Services
    services.map(service => broker.createService(service))

    // Broker Start
    broker.start()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
}

init(init)
