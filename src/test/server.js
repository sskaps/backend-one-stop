/**
 * @description jest server
 * @author sskaps
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)