const tl = gsap.timeline();
tl.from('.des', {
    y: '-120',
    duration: 1,
})
tl.from('.p1', {
    y: '-120',
    duration: 1,
    opacity:0
})
tl.from('.mat', {
    y: '120',
    duration: 1,
    opacity:0
})
tl.from('.p2', {
    y: '120',
    duration: 1,
    opacity:0
})
tl.from('.we', {
    x: '120',
    duration: 1,
    opacity:0
})
tl.from('.p3', {
    x: '120',
    duration: 1,
    opacity:0
})
tl.from('.elite', {
    x: '220',
    duration: 1,
    opacity:0
})
tl.from('.lists', {
    x: '220',
    duration: 1,
    opacity:0,stagger:'.5'
})
tl.from('.essentail', {
    x: '220',
    duration: 1,
    opacity:0
})