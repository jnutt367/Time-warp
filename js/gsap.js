gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        defaults: {
            opacity: 1
        },
        scrollTrigger: {
            trigger: "#first-lava-stream",
            markers: false,
            pin: true,
            markers: false,
            start: "top 75%",
            end: "bottom 45%",
            toggleActions: "play play restart reverse"
        }
    })
    .fromTo("#globe", { opacity: 0, scale: .1 }, { duration: 2, scale: 1, ease: "elastic", opacity: 1 })
    .fromTo("#top-header-bg", { opacity: 0, scale: .5, fill: "black" }, { duration: 3, scale: 1, x: 0, ease: "elastic", opacity: 1 }, +.5)
    .fromTo("#globe-banner", { opacity: 0, y: -200 }, { y: 0, duration: 1.5, ease: "elastic.out", opacity: 1 }, +1)
    .to("#blue", { fill: "red", scale: "2" })
    .to("#terry", { duration: 5, x: 200, y: -1200, scale: "0.4", ease: "elastic.inOut" })
    .to("#terry", { duration: 7, opacity: 1, x: 2000, repeat: -1 })
    .fromTo("#red-bubble", { fill: "red", opacity: .7 }, { duration: 2, opacity: 1, x: 0, scale: 1.2, ease: "back", y: -10, repeat: -1 }, 2)
    .fromTo("#fifth-cloud-up", { x: 0 }, { duration: 3, x: -90, fill: "black", repeat: -1 }, 0)
    .fromTo("#fourth-cloud-up", { x: 0 }, { duration: 1.5, x: -90, fill: "black", repeat: -1 }, 0)
    .fromTo("#bottom-cloud", { x: 0 }, { duration: 2, x: -50, fill: "black", repeat: -1 }, 0)
    .fromTo("#next-cloud-up", { x: 0 }, { duration: 2, x: -100, fill: "black", repeat: -1 }, 0)
    .fromTo("#third-cloud-up", { x: 0 }, { duration: 2, x: -90, fill: "black", repeat: -1 }, 0)
    .fromTo("#Layer_6", { opacity: 1, x: 0 }, { duration: .1, opacity: 1, x: 5, ease: "bounce.in", repeat: 50 })
    .to("#coconut", { duration: 1, ease: "bounce.out", scale: "1.5", y: 200 })
    .to("#coconut-1", { duration: 1, ease: "bounce.out", x: -20, scale: "1.5", y: 220 })
    .to("#palm-leaf", { duration: 3, y: 200, rotate: 180 })
    .to("#palm-leaf-big", { duration: 2, y: 200 })
    .to("#blue", { fill: "blue", scale: "2" })
    .to("#skull", { duration: 5, ease: "back", opacity: 0, y: 10 }, 3)
    .to("#skull-1", { duration: 5, ease: "elastic", opacity: 0, y: 10 }, 3)
    .to("#skull-2", { duration: 5, ease: "back", opacity: 0, y: 10 }, 3)
    .to("#skull-3", { duration: 5, ease: "back", opacity: 0, y: 10 }, 3)
    .fromTo("#blue-bubble", { opacity: 0, y: 0 }, { duration: 3, opacity: 1, x: 2, ease: "bounce.inOut", y: -2, repeat: -1 }, 2)
    .fromTo("#small-blue-bubble", { opacity: 0, y: 0 }, { duration: 3, opacity: 1, ease: "bounce.out", y: -2, repeat: -1 }, 2)
    .fromTo("#blue-ring", { opacity: 0, y: 0 }, { duration: 3, opacity: 1, y: -2, ease: "bounce.in", repeat: -1 }, 2)
    .to("#caveman1-club", { y: 180, rotate: 90 }, 5)
    .to("#caveman2-club", { y: 30 }, 4.5)
    .to("#caveman2", { x: -400, ease: "elastic.in" }, 8)
    .to("#caveman2-head", { y: 100, x: -400, ease: "bounce.out" }, 8)
    .to("#caveman2-chin", { y: 50, x: -500 }, 8)
    .to("#face-lines", { x: -400 }, 8)
    .to("#caveman1", { x: -700, ease: "elastic.in" }, 7)
    .fromTo("#sheriff-door", { opacity: 0.2 }, { opacity: 0.8, repeat: 4, ease: "elastic" })
    .fromTo("#speech-bubble-outlaw", { opacity: 0 }, { opacity: 1, y: -50, x: -50, scale: 1.1, ease: "elastic", duration: 2 }, 20)
    .to("#bull", { scale: 1, rotate: 360, y: -200, x: -100 }, 20)
    .to("#barrel", { duration: 1, x: 500, y: 200, rotate: 720, ease: "back" })