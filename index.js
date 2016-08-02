var pathToRegexp = require('path-to-regexp')

module.exports = function createPattern(path) {
  var keys = []
  var reg = pathToRegexp(path, keys)
  if (!keys.length) { return false }
  return function match(path) {
    var result  = {}
    var matches = reg.exec(path)
    result.path = matches.shift()

    matches.forEach(function(m, index) {
      var key = keys[index]
      var prop = key.name
      var value = decodeValue(m)
      if (value) {
        result[prop] = value
      }
    })

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
      err.message = 'Failed to decode param \'' + value + '\''
    }

    throw err
  }
}
