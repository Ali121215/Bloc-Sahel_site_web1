(function () {
  var fab = document.querySelector('.fab');
  var devis = document.querySelector('#devis');
  if (!fab || !devis || !('IntersectionObserver' in window)) return;
  new IntersectionObserver(function (entries) {
    fab.classList.toggle('is-hidden', entries[0].isIntersecting);
  }).observe(devis);
})();
