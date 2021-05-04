gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
    defaults: {
        opacity: 1
    },
    scrollTrigger: {
        trigger: "#first-lava-stream",
        markers: false,
        pin: true,
        start: "top 75%",
        end: "bottom 45%",
        toggleActions: "restart none none reverse"
    }
})

.fromTo("#red-bubble", { fill: "red", opacity: 1 }, { repeat: -1, duration: 2, scale: "1.1", ease: "elastic", opacity: 1 })
    .fromTo("#fifth-cloud-up", { x: 0 }, { duration: 3, x: -90, fill: "black", repeat: -1 }, 0)
    .fromTo("#fourth-cloud-up", { x: 0 }, { duration: 1.5, x: -90, fill: "black", repeat: -1 }, 0)
    .fromTo("#bottom-cloud", { x: 0 }, { duration: 2, x: -50, fill: "black", repeat: -1 }, 0)
    .fromTo("#next-cloud-up", { x: 0 }, { duration: 2, x: -100, fill: "black", repeat: -1 }, 0)
    .fromTo("#third-cloud-up", { x: 0 }, { duration: 2, x: -90, fill: "black", repeat: -1 }, 0)
    .fromTo("#Layer_6", { opacity: 1, x: 0 }, { duration: .1, opacity: 1, x: 5, ease: "bounce.in", repeat: 50 })