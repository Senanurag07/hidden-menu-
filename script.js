// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:2,
//     repeat:-1,
//     yoyo:true,
//     rotate:720,
//     opacity:0,
//     // stagger:0.9
// })
// gsap.from("h1",{
//     y:30,
//     opacity:0,
//     delay:2,
//     duration:2,
//     stagger:0.3,
//     repeat:-1,
//     yono:true

// })

var tl= gsap.timeline()
var full = document.querySelector("#full i")
var nav = document.querySelector("#nav i")
tl.to("#full",{
    right:0,
})
tl.from("h4",{
    x:100,
    opacity:0,
    stagger:0.3
})
tl.pause()
    nav.addEventListener("click",function(){
        tl.play()
    })
    full.addEventListener("click",function(){
        tl.reverse()
    })