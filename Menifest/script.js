const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)








function openNav() {
  document.querySelector('.sidebar').style.left = '0';
  document.querySelector('.content').style.marginLeft = '250px';
}

function closeNav() {
  document.querySelector('.sidebar').style.left = '-250px';
  document.querySelector('.content').style.marginLeft = '0';
}


// var tl = gsap.timeline()
 
// tl.from(".main,.logo ",{
//     y:-100,
//     duration:1,
//     delay:0.5,
//     stagger:0.5,
//     opacity:0

// })
// tl.from(".main-vid ",{
//     y:100,
//     opacity:0,
//     stagger:0.3,
// })
//  tl.from(".main img",{
//     scale:0.5,
//     opacity:0,
//     stagger:0.3,
// }) 
// tl.from("h5",{
//     scale:0,
//     opacity:0,

// })
// tl.to("h5",{
//     y:40,
//     repeat:-1,
//     duration:0.8,
//     yoyo:true,
// })
