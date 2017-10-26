// Custom Scripts for Primal Template //

jQuery(function($) {
    "use strict";


/* ------- Justified Gallery ------- */

$('#basicExample').justifiedGallery({
	rowHeight :240,
	lastRow : 'justify',
	margins : 10
});

/* ----- Lightcase ----- */

	$('a[data-rel^=lightcase]').lightcase();
	swipe: true


/* --------- Wow Init ------ */

  new WOW().init();


/* -------- Vegas Slider -------- */

$('#left-slides').vegas({
      slides: [
          { src: 'assets/images/b.jpg' },
          { src: 'assets/images/bg.jpg' },
          { src: 'assets/images/half_bg.jpg' },
      ],

    delay: 3000,
    transition: 'fade'
  });

  /* ----- Project slides -----*/

  $('#project-images').vegas({
        slides: [
            { src: 'assets/images/p3.jpg' },
            { src: 'assets/images/p2.jpg' },
            { src: 'assets/images/p1.jpg' },
        ],

      delay: 3000,
      transition: 'fade'
    });

/*----- Preloader ----- */

    $(window).load(function() {
    		setTimeout(function() {
            $('#loading').fadeOut('slow', function() {
            });
        }, 3000);
    });


/*----- Loading lissajou ----- BASED ON Misha Heesakkers PEN https://codepen.io/MishaHahaha/pen/ONQQNY */
window.onload = function () {
  const canvas = document.getElementById("loading-lissa")
  const context = canvas.getContext('2d')

  const radius = canvas.width / 6
  const angleStep = Math.PI * 2 / 360
  let theta = 0

  //change frequencies for getting various curves
  const frequencyX = 7
  const frequencyY = 7

  window.requestAnimationFrame(draw)

  function draw () {
    context.setTransform(1, 0, 0, 1, 1, 0);
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.setTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
    context.beginPath();

    for (let angle = 0; angle < Math.PI * 5; angle += angleStep ) {
      const x = Math.sin(angle * frequencyX + theta) * Math.cos(angle + theta) * radius;
      const y = Math.cos(angle * frequencyY) * Math.sin(angle + theta) * radius;
      if(angle === 0) {
        context.moveTo(x, y)
      } else {
        context.lineTo(x, y)
      }
    }


var gradient=ctx.createLinearGradient(0,0,170,10);
gradient.addColorStop("0","#22FFB3");
gradient.addColorStop("1.0","#000000");

    context.lineWidth = 2
    context.strokeStyle = gradient;
    context.stroke()
    context.miterLimit = .5;
    context.closePath()

    theta += 0.03
    window.requestAnimationFrame(draw);
  }

  var highlight = Math.floor(Math.random() * 3.9 + 1.0);
  var highlightid = '#highlight' + highlight;
  $(highlightid).css('background','#22FFB3')
}

/* ----- Wow init ----- */




/*----------------------------
------- Isotope Init -------
-----------------------------*/

var $container = $('.portfolio_container');
$container.isotope({
	filter: '*',
});

$('.primal-portfolio_filter a').on('click', function () {
	$('.primal-portfolio_filter .active').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$container.isotope({
			filter: selector,
			animationOptions: {
					duration: 500,
					animationEngine: "jquery"
			}
	});
	return false;
});



/* ---- particles.js config ---- */

particlesJS("particles-js", {
"particles": {
"number": {
"value": 150,
"density": {
  "enable": true,
  "value_area": 800
}
},
"color": {
"value": "#FFFFFF"
},
"shape": {
"type": "circle",
"stroke": {
  "width": 0,
  "color": "#000000"
},
"polygon": {
  "nb_sides": 5
},
"image": {
  "src": "img/github.svg",
  "width": 100,
  "height": 100
}
},
"opacity": {
"value": 0.5,
"random": false,
"anim": {
  "enable": false,
  "speed": 1,
  "opacity_min": 0.1,
  "sync": false
}
},
"size": {
"value": 3,
"random": true,
"anim": {
  "enable": false,
  "speed": 40,
  "size_min": 0.1,
  "sync": false
}
},
"line_linked": {
"enable": true,
"distance": 150,
"color": "#FFFFFF",
"opacity": 0.4,
"width": 1
},
"move": {
"enable": true,
"speed": 6,
"direction": "none",
"random": false,
"straight": false,
"out_mode": "out",
"bounce": false,
"attract": {
  "enable": false,
  "rotateX": 600,
  "rotateY": 1200
}
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
  "enable": true,
  "mode": "grab"
},
"onclick": {
  "enable": true,
  "mode": "push"
},
"resize": true
},
"modes": {
"grab": {
  "distance": 140,
  "line_linked": {
    "opacity": 1
  }
},
"bubble": {
  "distance": 400,
  "size": 40,
  "duration": 2,
  "opacity": 8,
  "speed": 3
},
"repulse": {
  "distance": 200,
  "duration": 0.4
},
"push": {
  "particles_nb": 4
},
"remove": {
  "particles_nb": 2
}
}
},
"retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
stats.begin();
stats.end();
if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
}
requestAnimationFrame(update);
};
requestAnimationFrame(update);

});
