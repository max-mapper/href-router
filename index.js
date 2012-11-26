(function() {
  
  function catchRoutes(modalCallback, scope) {
    if (!scope) scope = ""
    else scope = scope + " "

    $(scope + 'a').live('click', function(e) {
      return handleRoute(e, modalCallback)
    })
  }

  function handleRoute( e, modalCallback ) {
    var currentTarget = $(e.currentTarget)
    var route = currentTarget.attr('href')
    if (!route) return true
    // Basic rules:
    // * If the href ends with a bang (!) we're going to halt the click event and call the modalCallback
    // * Otherwise, we're going to do nothing at let the click event continue on as it pleases
    if ( route && route.indexOf( '!' ) === ( route.length - 1 ) ) {
      route = route.replace('#/', '') // Trim off the #/ from the beginning of the route if it exists
      route = route.substr(0, route.lastIndexOf('!'))
      var id = route.split('/')[1] // The ID (if one exists) will be what comes after the slash
      if (id) route = route.split('/')[0] // If there is an ID, then we have to trim it off the route
      modalCallback(route) // impossible to get err so not an errback
      if (typeof e === 'object') e.preventDefault()
      return false
    }
    return true
  }
  
  var exportObject = {
    handleRoute: handleRoute,
    catchRoutes: catchRoutes
  }
  
  if (typeof module !== 'undefined' && module.exports) module.exports = exportObject
  if (typeof window !== 'undefined') window.hrefRouter = exportObject
})();
