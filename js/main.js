gsap.from('header', {opacity: 0, duration: 0.6, y: -50})
gsap.from('.hero', {opacity: 0, duration: 0.6, x: -300, delay: 0.4})
gsap.from('.hero-right', {opacity: 0, duration: 0.6, y: -500, delay: 0.4})
gsap.from('.txt', {opacity: 0, duration: 1, y: -50, delay: 0.6})
gsap.from('.cta', {opacity: 0, duration: 1, y: -50, delay: 0.8})
gsap.from('.social-media li', {opacity: 0, duration: 1, y: 50, delay: 0.9, stagger: 0.2,ease: "elastic.out(1, 0.5)"})


gsap.from('.grntd-add', {opacity: 0, duration: 1, x: -50, delay: 1})
gsap.from('.hero-right img', {opacity: 0, duration: 1, y: -70, ease: "elastic.out(1, 0.3)", delay: 1.1})