//
// "Prelude"
//
var fitter = document.querySelector('[data-fit]')
require("scrollbar-width") // this asshole makes window.SCROLLBAR_WIDTH

refit()
window.addEventListener('resize', refit, false)
function refit() {
  if (!fitter) return
  fitter.style.width  = (window.innerWidth - window.SCROLLBAR_WIDTH) + 'px'
  fitter.style.height = window.innerHeight + 'px'
}

var preloader = document.getElementById('preloader')

setTimeout(function() {
  preloader.style.opacity = 0
  setTimeout(function() {
    preloader.style.display = 'none'
  }, 600)
}, 500)

if (window.chrome) {
  require('./scene')
}
