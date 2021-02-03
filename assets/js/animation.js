const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");

gsap.from('.home_img', {opacity: 0, duration: 2, delay: 3, x: 60})

gsap.from('.home_information', {opacity: 0, duration: 1.5, delay: 3.3, y: 25})
gsap.from('.anime-text', {opacity: 0, duration: 1.5, delay: 3.3, y: 25, ease:'expo.out', stagger: .3})

gsap.from('.nav_logo', {opacity:0, duration: 1.5, delay: 4.2, y: 25, ease:'expo.out'});
gsap.from('.nav_toggle', {opacity:0, duration: 1.5, delay: 4.2, y: 25, ease:'expo.out'});
gsap.from('.nav_item', {opacity: 0, duration: 1.5, delay: 4.2, y: 25, ease:'expo.out', stagger: .2})

gsap.from('.home_social-icon', {opacity: 0, duration: 1.5, delay: 5, y: 25, ease:'expo.out', stagger: .2})