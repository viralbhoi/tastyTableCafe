gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }
})

gsap.from(".b1", {
    scale:0.75,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".b1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from("#page4 h2",{
    y:-50,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})
