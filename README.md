# Pub/Sub relay for signal-fire

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Relay for **[signal-fire](https://github.com/MichielvdVelde/signal-fire)**, a WebRTC signaling server. Using the relay in combination
with signal-fire, you can set up multiple instances that can communicate and share the load.

## Features

* Works with common pub/sub clients, such as [redis](https://github.com/NodeRedis/node_redis) and [mqtt](https://github.com/mqttjs/MQTT.js)
* Easy to set up, no complex configuration needed

## Example

This is an example of how to use the relay in combination with [signal-fire](https://github.com/MichielvdVelde/signal-fire). It uses
[mqtt](https://github.com/mqttjs/MQTT.js) as the pub/sub client.

```js
const Server = require('signal-fire').Server
const Relay = require('signal-fire-relay').Relay
const client = require('mqtt').createClient()

const server = new Server({
  relay: new Relay(client)
})

server.start().then(() => {
  console.log('Server started')
})
```

## Changelog

* v0.1.0
  * Initial release

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

### License

Copyright 2016 [Michiel van der Velde](http://www.michielvdvelde.nl).

This software is licensed under the [MIT License](LICENSE).
