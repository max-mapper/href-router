# href router

catch links that end with ! and emit js events. useful for lightweight app routing (uses a single global 'live' listener)

requires zepto.js with the .live and .tap components loaded. for mobile browsers you should use https://github.com/ftlabs/fastclick

## usage

```javascript
function onModal(route) { app.emit('modal', route) }
hrefRouter.catchRoutes(onModal, $('.container')[0])
```

BSD LICENSE
