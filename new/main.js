/*global Velocity*/
(function () {
    'use strict';
    var ddom = (function (w, d) {
        function setCardHeights() {
            var e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                x = w.innerWidth || e.clientWidth || g.clientWidth,
                y = w.innerHeight || e.clientHeight || g.clientHeight,
                cards = d.querySelectorAll('header, article'),
                i;
            for (i = 0; i < cards.length; i++) {
                cards[i].style.height = y + 'px';
            }
        }

        function animateSlideLinks() {
            var slideLinks = d.querySelectorAll('.slide'),
                i = 0;
            for (; i < slideLinks.length; i++) {
                slideLinks[i].addEventListener('click', function(e) {
                    e.preventDefault();
                    var targetEl = d.getElementById(e.currentTarget.hash.substr(1));
                    Velocity(targetEl, 'scroll', {
                        duration: 600,
                        easing: 'ease',
                        container: d.querySelector('.wrapper'),
                        complete: function(elements) {
                            // To Do: use Velocity to animate elements
                            // of each portfolio item
                        }
                    });
                }, false);
            }
        }
        
        var returnObject = {
            setCardHeights: setCardHeights,
            animateSlideLinks: animateSlideLinks
        }

        return returnObject;
    })(window, document);

    ddom.setCardHeights();
    //window.addEventListener('resize', ddom.setCardHeights, false);
    ddom.animateSlideLinks();

    var _gaq=[['_setAccount','UA-40086270-1'],['_trackPageview']];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
    g.src='//www.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
})();