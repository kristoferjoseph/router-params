var pathToRegexp = require('path-to-regexp')

module.exports = function createPattern(path) {
  var keys = []
  var reg = pathToRegexp(path, keys)
  return function match(path) {
    var result = {}
    var m = reg.exec(path)
    var path = m[0]
    for (var i = 1; i < m.length; i++) {
      var key = keys[i - 1]
      var property = key.name
      var value = decodeValue(m[i])
      if (value !== undefined ||
        !(hasOwnProperty(result, property))) {
        result[property] = value
      }
    }

    return result
  }
}

function decodeValue(value) {
  if (typeof value !== 'string' || value.length === 0) {
    return value
  }

  try {
    return decodeURIComponent(value)
  } catch (err) {
    if (err instanceof URIError) {
      err.message = 'Failed to decode param \'' + val + '\''

    }

    throw err
  }
}
