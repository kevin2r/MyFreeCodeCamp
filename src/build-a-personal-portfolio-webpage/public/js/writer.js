
(function writer() {
  var elem = document.querySelector('#writer');
  if (!elem) return;
  var pause = 800;
  var opts = {
    typeSpeed: 50,
    deleteSpeed: 50,
    loop: false,
    postfix: ''
  }

  malarkey(elem, opts)
  .pause(1800).delete()
  .type('IT Professional').pause(pause).delete()
  .type('CompTIA A+ Certified').pause(pause).delete()
  .type('CompTIA Network+ Certified').pause(pause).delete()
  .type('Full-Stack Web Developer').pause(pause).delete()
  .type('Kevin Rodriguez.')

}());
