const EventEmitter = require('events').EventEmitter
const format = require('util').format

class Relay extends EventEmitter {
  constructor (client = null, options = {}) {
    super()
    this._client = client
  }

  addPeerId (peerId = null) {
    return Promise((resolve, reject) => {
      if (peerId === null) {
        reject(new TypeError('peerId can not be null'))
      } else {
        this._client.subscribe(format('peer:%d', peerId))
        resolve()
      }
    })
  }

  removePeerId (peerId = null) {
    return new Promise((resolve, reject) => {
      if (peerId === null) {
        reject(new TypeError('peerId can not be null'))
      } else {
        this._client.unsubscribe(format('peer:%d', peerId))
        resolve()
      }
    })
  }

  send (peerId = null, data = null) {
    return Promise((resolve, reject) => {
      if (peerId === null) {
        reject(new TypeError('peer id can not be null'))
      } else if (data === null) {
        reject(new TypeError('data can not be null'))
      } else {
        this._client.publish(format('peer:%d', peerId), data)
        resolve()
      }
    })
  }
}

exports.Relay = module.exports.Relay = Relay
