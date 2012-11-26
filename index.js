(function() {
  
  function listenForTouches(modalCallback, scope) {
    if (!scope) scope = ""
    else scope = scope + " "

    var clickEvent = 'click'
    if (isTouchDevice()) clickEvent = 'tap'

    $(scope + 'a').live(clickEvent, function(e) {
      catchModals(e, modalCallback)
    })
  }

  // http://alastairc.ac/2010/03/detecting-touch-based-browsing/
  function isTouchDevice() {
    var el = document.createElement('div')
    el.setAttribute('ongesturestart', 'return;')
    if (typeof el.ongesturestart == "function") return true
    else return false
  }

  function catchRoutes( event, modalCallback ) {
    var currentTarget = $(event.currentTarget)
    var route = currentTarget.attr('href')
    if (!route) return true
    // Basic rules:
    // * If the href ends with a bang (!) we're going to return the route name
    // * Otherwise, we're going to change the page href
    if ( route && route.indexOf( '!' ) === ( route.length - 1 ) ) {
      route = route.replace('#/', '') // Trim off the #/ from the beginning of the route if it exists
      route = route.substr(0, route.lastIndexOf('!'))
      var id = route.split('/')[1] // The ID (if one exists) will be what comes after the slash
      if (id) route = route.split('/')[0] // If there is an ID, then we have to trim it off the route
      modalCallback(false, route)
      if (typeof event === 'object') event.preventDefault()
      return false
    }
    return true
  }
  
  var exportObject = {
    listenForTouches: listenForTouches,
    isTouchDevice: isTouchDevice,
    catchRoutes: catchRoutes
  }
  
  if (typeof module !== 'undefined' && module.exports) module.exports = exportObject
  if (typeof window !== 'undefined') window.hrefRouter = exportObject
})();
