let gsaptimeline = gsap.timeline()
gsaptimeline.from("header ",{
y:-100,
duration:0.5,


})


gsap.from(".right",{
    scale:0,
    duration:0.5
})
gsaptimeline.from(".left h2",{
y:-200,
duration:0.5,
})
gsaptimeline.from(".boxesss",{
    opacity:0,
      y:200,
    duration:0.5,  
})
// gsaptimeline.from(".left-para  p",{
//     y:200,
//     duration:0.5,
// })
// gsaptimeline.from(".btn-box",{
//    scale:0,
//    duration:0.5,
// })
// gsaptimeline.from(".total-static .t-st",{
//    scale:0,
//    duration:0.5,
// //    scrub:2,
// stagger:1,
// })