var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround:true,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

var Flickity = require('flickity-fade');
requirejs( [ 'path/to/flickity-fade' ], function( Flickity ) {
  var flkty = new Flickity( '.carousel', {
    fade: true,
  });
});
