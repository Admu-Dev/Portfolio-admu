
/* 
___________________________________________________________________________________________

                      SCROLL REVEAL ANIMATION
___________________________________________________________________________________________
 */

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.Header`)
sr.reveal(`.text-box , .container-candy , .container-contact`,{origin: 'left', distance: '1000px' })
sr.reveal(`.image-box`,{origin: 'right',   scale: 0.2})
sr.reveal(`.container-about`,{origin: 'right', distance: '1000px'})
