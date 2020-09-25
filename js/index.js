var type = document.getElementById('type');
var typewriter = new Typewriter(type, {
  loop: true
});
WOW.prototype.addBox = function(element) {
  this.boxes.push(element);
};

var wow = new WOW();
wow.init();
if ($(window).width() > 900) {
  $('.wow').on('scrollSpy:exit', function() {
      $(this).css({
        'visibility': 'hidden',
        'animation-name': 'none'
      }).removeClass('animated');
      wow.addBox(this);
    })
    .scrollSpy();
}
typewriter.typeString('Want to get your bussiness online...')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Or Want To Build A Personal Website')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Or You May Have Specific Demands....')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Are You Looking For Affordable Prices')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Scroll Down And Check Our Services')
  .pauseFor(2500)
  .deleteAll()
  .start();
