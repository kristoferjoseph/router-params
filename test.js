var test = require('tape')
var routerParams = require('./')
var pathToRegexp = require('path-to-regexp')

test('should return false when no keys', function(t) {
  t.equal(routerParams('/a'), false)
  t.end()
})

test('should add pattern', function(t) {
  var matcher = routerParams('/thing/:comment/:id')
  t.deepEqual(
    matcher('/thing/123/456'),
    {
      path: '/thing/123/456',
      comment: '123',
      id: '456'
    }
  )
  t.end()
})
