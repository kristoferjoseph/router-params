# Router Params
tiny url parameter parsing utility for use with routers.
_Works just like express router_

## Install
`npm i router-params --save`

## Usage
```
var routerParams = require('router-params')
var matcher = routerParams('/thing/:comment/:id')
matcher('/thing/123/456')
// outputs {comment: '123',id: '456'}
```

## Test
`npm test`
