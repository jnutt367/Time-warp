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
    .fromTo("#globe", { opacity: 0, y: 200, scale: .1 }, { duration: 2, scale: 1, y: 0, ease: "elastic", opacity: 1 })
    .fromTo("#top-header-bg", { opacity: 0, scale: .5, fill: "black" }, { duration: 3, scale: 1, x: 0, ease: "elastic", opacity: 1 }, +.5)
    .fromTo("#globe-banner", { opacity: 0, y: -200 }, { y: 0, duration: 1.5, ease: "elastic.out", opacity: 1 }, +1)
    .to("#blue", { fill: "red", scale: "2" })
    .to("#hourglass-frame", { duration: 1, fill: "gray", rotate: 360 }, 1)
    .to("#hourglass", { fill: "black", stroke: "white", duration: 5 }, 2)





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
    .to("#terry", { duration: 7, x: 10, y: -1200, scale: "0.4", ease: "elastic.inOut" })
    .to("#terry", { duration: 5, opacity: 1, x: 1400, ease: "power1.out", repeat: -1 }, 0)
    .fromTo("#red-bubble", { fill: "red", opacity: .7 }, { duration: 2, opacity: .5, x: 0, scale: 1.2, ease: "back", y: -10, repeat: -1 }, 2)
    .fromTo("#fifth-cloud-up", { x: 0 }, { y: -100, duration: 3, x: -90, fill: "gray", ease: "back", opacity: .9, repeat: -1 }, 0)
    .fromTo("#fourth-cloud-up", { x: 0 }, { y: -100, duration: 3, x: -90, fill: "gray", ease: "back", opacity: .8, repeat: -1 }, 0)
    .fromTo("#bottom-cloud", { x: 0 }, { y: -100, x: -50, fill: "gray", ease: "back", opacity: .7, repeat: -1 }, 0)
    .fromTo("#next-cloud-up", { x: 0 }, { y: -100, x: -100, fill: "gray", ease: "back", opacity: .6, repeat: -1 }, 0)
    .fromTo("#third-cloud-up", { x: 0 }, { y: -100, x: -90, fill: "gray", ease: "back", opacity: .5, repeat: -1 }, 0)
    .to("#lava", { scale: 2 }, 3)
    .to("#lava-bed", { ease: "elastic", scale: 1.05, repeat: 1 })
    .fromTo("#Layer_6", { opacity: 1, x: 0 }, { duration: .1, opacity: 1, x: 5, ease: "bounce", repeat: 50 })
    .to("#coconut", { duration: 1, ease: "bounce.out", scale: "1.5", y: 200 }, 5)
    .to("#coconut-1", { duration: 1, ease: "bounce.out", x: -20, scale: "1.5", y: 220 }, 5)
    .to("#palm-leaf", { duration: 3, y: 200, rotate: 180, ease: "none" }, 9)
    .to("#palm-leaf-big", { duration: 2, y: 200, ease: "none" }, 10)
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
    //.fromTo("#dino", { x: 700 }, { x: 0 })
    .fromTo("#dino-speech-bubble", { opacity: 0 }, { duration: 2, y: -50, opacity: 1, ease: "elastic.out" })
    .to("#dino-speech-bubble", { duration: 2, opacity: 0 })
    .to("#caveman2-club", { y: 30 }, 1)
    .to("#caveman2", { x: -400, ease: "elastic.in" }, 1)
    .to("#caveman2-chin", { y: 100, x: -400, ease: "bounce.out" }, 1)
    .to("#caveman2-head", { y: 50, x: -500 }, 1)

.to("#caveman1", { x: -600, ease: "elastic.in" }, 1)
    .fromTo("#full-train", { x: 1400 }, { duration: 3, x: 0, ease: "rough" })
    .to("#full-train", { x: 0 })



let trainDrive = gsap.timeline({
        defaults: { duration: 1, ease: "elastic" },
        scrollTrigger: {
            trigger: "#bottom-shrub",
            scrub: false,
            start: "top 50%",
            end: "bottom bottom",
            // markers: true,
            toggleActions: "restart none none reverse"
        }
    })
    .fromTo("#train", {}, {})




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
    .to("#S", { fill: "red" }, 1)
    .to("#H", { fill: "green" }, 1)
    .to("#E", { fill: "blue" }, 1)
    .to("#R", { fill: "green" }, 1)
    .to("#I", { fill: "blue" }, 1)
    .to("#F", { fill: "red", ease: "bounce.in" }, 1)
    .to("#F2", { fill: "red" }, 1)
    .fromTo("#sheriff-door-left", { opacity: 0 }, { duration: .8, opacity: 1, repeat: 1, ease: "none" })

.fromTo("#sheriff-door", { opacity: 0 }, { duration: 1, opacity: 1, repeat: 4, ease: "none" }, +1)
    .fromTo("#speech-bubble-outlaw", { opacity: 0 }, { opacity: 1, y: -50, x: -50, scale: 1.1, ease: "elastic", duration: 2 }, 1)
    .to("#bull", { scale: 1, rotate: 360, y: -200, x: -100 }, 0)
    .fromTo("#barrel", { y: 100 }, { duration: 1, x: 500, y: 200, rotate: 720, ease: "back" }, 1)

let trailerRoll = gsap.timeline({
        scrollTrigger: {
            trigger: "#speech-bubble-outlaw",
            scrub: false,
            start: "top top",
            end: "bottom bottom",
            toggleActions: "restart none none reverse"
        }
    })
    .to("#trailer", { x: 300 })


let sunRise = gsap.timeline({
        srcollTrigger: {
            trigger: "#surfer",
            scrub: false,
            start: "top top",
            end: "bottom bottom",
            toggleActions: "restart none none reverse"
        }
    })
    .fromTo("#sun", { opacity: 0, y: 800 }, { duration: 2, opacity: 1, y: 0 })