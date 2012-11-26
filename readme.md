# href router

catch links that end with ! and emit js events. useful for lightweight app routing (uses a single global 'live' listener)

requires zepto.js with the .live and .tap components loaded. for mobile browsers you should use https://github.com/ftlabs/fastclick

## usage

```html
  <a href="/foo!">clicking this calls `onModal` below and doesn't do anything else</a>
  <a href="/bar">clicking this does what you would expect and doesnt get messed with by href-router</a>
```

```javascript
function onModal(route) { app.emit('modal', route) }
hrefRouter.catchRoutes(onModal, $('.container')[0])
```

BSD LICENSE
