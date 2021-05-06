gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        defaults: { duration: 1, ease: "elastic" },
        scrollTrigger: {
            trigger: "#svg",
            scrub: false,
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "restart none none reverse"
        }
    })
    .fromTo("#globe", { opacity: 0, scale: .1 }, { duration: 2, scale: 1, ease: "elastic", opacity: 1 })
    .fromTo("#top-header-bg", { opacity: 0, scale: .5, fill: "black" }, { duration: 3, scale: 1, x: 0, ease: "elastic", opacity: 1 }, +.5)
    .fromTo("#globe-banner", { opacity: 0, y: -200 }, { y: 0, duration: 1.5, ease: "elastic.out", opacity: 1 }, +1)
    .to("#blue", { fill: "red", scale: "2" })
    .to("#hourglass", { fill: "white", opacity: 0.5 }, +4)




let dinoLand = gsap.timeline({
        defaults: { duration: 2, ease: "elastic" },
        scrollTrigger: {
            trigger: "#wormhole",
            scrub: false,
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "restart none none reverse"
        }
    })
    .to("#terry", { duration: 10, x: 200, y: -1200, scale: "0.4", ease: "elastic.inOut" })
    .to("#terry", { duration: 20, opacity: 1, x: 1400, repeat: -1 })
    .fromTo("#red-bubble", { fill: "red", opacity: .7 }, { duration: 2, opacity: .5, x: 0, scale: 1.2, ease: "back", y: -10, repeat: -1 }, 2)
    .fromTo("#fifth-cloud-up", { x: 0 }, { duration: 3, x: -90, fill: "gray", opacity: .9, repeat: -1 }, 0)
    .fromTo("#fourth-cloud-up", { x: 0 }, { duration: 3, x: -90, fill: "gray", opacity: .8, repeat: -1 }, 0)
    .fromTo("#bottom-cloud", { x: 0 }, { x: -50, fill: "gray", opacity: .7, repeat: -1 }, 0)
    .fromTo("#next-cloud-up", { x: 0 }, { x: -100, fill: "gray", opacity: .6, repeat: -1 }, 0)
    .fromTo("#third-cloud-up", { x: 0 }, { x: -90, fill: "gray", opacity: .5, repeat: -1 }, 0)
    .fromTo("#Layer_6", { opacity: 1, x: 0 }, { duration: .1, opacity: 1, x: 5, ease: "bounce.in", repeat: 50 })
    .to("#coconut", { duration: 1, ease: "bounce.out", scale: "1.5", y: 200 })
    .to("#coconut-1", { duration: 1, ease: "bounce.out", x: -20, scale: "1.5", y: 220 })
    .to("#palm-leaf", { duration: 3, y: 200, rotate: 180 })
    .to("#palm-leaf-big", { duration: 2, y: 200 })
    .to("#blue", { fill: "orange", ease: "power4.out", duration: -2, scale: "2" })
    .to("#skull", { duration: 5, ease: "back", opacity: 0, y: 10 }, 3)
    .to("#skull-1", { duration: 5, ease: "elastic", opacity: 0, y: 10 }, 3)
    .to("#skull-2", { duration: 5, ease: "back", opacity: 0, y: 10 }, 3)
    .to("#skull-3", { duration: 5, ease: "back", opacity: 0, y: 10 }, 3)
    .fromTo("#blue-bubble", { opacity: 0, y: 0 }, { duration: 3, opacity: 1, x: 2, ease: "bounce.inOut", y: -2, repeat: -1 }, 2)
    .fromTo("#small-blue-bubble", { opacity: 0, y: 0 }, { duration: 3, opacity: 1, ease: "bounce.out", y: -2, repeat: -1 }, 2)
    .fromTo("#blue-ring", { opacity: 0, y: 0 }, { duration: 3, opacity: 1, y: -2, ease: "bounce.in", repeat: -1 }, 2)




let cavemanRun = gsap.timeline({
        defaults: { duration: 1.5, ease: "back" },
        scrollTrigger: {
            trigger: "#tar",
            scrub: false,
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "restart none none reverse"
        }
    })
    .to("#caveman1-club", { y: 180, rotate: 90 }, 2)
    .to("#caveman2-club", { y: 30 }, 1)
    .to("#caveman2", { x: -400, ease: "elastic.in" }, 1)
    .to("#caveman2-head", { y: 100, x: -400, ease: "bounce.out" }, 1)
    .to("#caveman2-chin", { y: 50, x: -500 }, 1)
    .to("#face-lines", { x: -400 }, 1)
    .to("#caveman1", { x: -700, ease: "elastic.in" }, 1)


let sheriffDraw = gsap.timeline({
        defaults: { duration: 1, ease: "elastic" },
        scrollTrigger: {
            trigger: "#sheriff-office",
            scrub: false,
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "restart none none reverse"
        }
    })
    .fromTo("#sheriff-door", { opacity: 0.2 }, { opacity: 0.8, repeat: 4, ease: "elastic" })
    .fromTo("#speech-bubble-outlaw", { opacity: 0 }, { opacity: 1, y: -50, x: -50, scale: 1.1, ease: "elastic", duration: 2 }, 1)
    .to("#bull", { scale: 1, rotate: 360, y: -200, x: -100 }, 0)
    .to("#barrel", { duration: 1, x: 500, y: 200, rotate: 720, ease: "back" }, 1)


//let smoke = gsap.timeline({repeat: -1,});

//smoke.from(".ship-smoke",{
// duration: 2,
// scale: 0,
// transformOrigin: "center center",
// stagger:{each: 0.6},
//})
//.to(".ship-smoke",{
// opacity: 0
//});