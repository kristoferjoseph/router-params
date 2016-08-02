var test = require('tape')
var routerParams = require('./')

test.only('should add pattern', function(t) {
  var matcher = routerParams('/thing/:comment/:id')
  t.deepEqual(
    matcher('/thing/123/456'),
    {
      comment: '123',
      id: '456'
    }
  )
  t.end()
})
