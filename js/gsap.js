gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    defaults: {
        opacity: 1
    },
    scrollTrigger: {
        trigger: "#first-lava-stream",
        markers: false,
        pin: true,
        markers: true,
        start: "top 75%",
        end: "bottom 45%",
        toggleActions: "restart none none reverse"
    }
})

.fromTo("#red-bubble", { fill: "red", opacity: .7 }, { duration: 2, opacity: 1, x: 0, scale: 1.2, ease: "elastic.out", y: -10, repeat: -1 }, 2)
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