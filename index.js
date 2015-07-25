/**
 * Module Dependencies
 */

var cors_proxy = require('cors-anywhere');
var port = process.env.PORT || 8080;

/**
 * Create a Server
 */

cors_proxy.createServer({
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, function() {
  var addr = this.address();
  console.log('Listening on [%s]:%s', addr.address, addr.port);
});
