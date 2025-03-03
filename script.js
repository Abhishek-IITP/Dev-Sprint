gsap.registerPlugin(ScrollTrigger);

gsap.to(".heading1",{
    ease: "power3.out",
    opacity : 1,
    duration :8,
})
gsap.to(".heading2",{
    delay:1,
    ease: "power3.out",
    opacity : 1,
    duration :8,
})


gsap.to(".demo1",{
    opacity: 10,
    duration:0.5,
    x:100,
    scrollTrigger:{
        trigger:"#page",
        start:"top -100%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }

})

gsap.to(".demo2",{
    opacity: 10,
    duration:0.5,
    x:-100,
    y:30,
    scrollTrigger:{
        trigger:"#page",
        start:"top -70%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }

})
gsap.to(".demo3",{
    opacity: 10,
    duration:0.5,
    x:-300,
    y:25,
    scrollTrigger:{
        trigger:"#page",
        start:"top 10%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }

})
gsap.to(".demo4",{
    opacity: 10,
    duration:0.5,
    x:2250,
    y:25,
    scrollTrigger:{
        trigger:"#abhi",
        start:"top 25%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }

})
gsap.to(".demo5",{
    opacity: 10,
    duration:0.5,
    x:-2200,
    // y:25,
    scrollTrigger:{
        trigger:"#abhi",
        start:"top 25%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }

})



let heading= document.querySelectorAll("#page3 h2")
let headings= document.querySelectorAll("#page4 h2")
let headingss= document.querySelectorAll("#page5 h2")


function textSplitteing(){
    heading.forEach((e)=>{
        let clutter= '';
        let h1Text= e.textContent;
        let splittedText = h1Text.split('');
        splittedText.forEach((e1)=>{
            clutter+=`<span>${e1}</span>`
        });
        e.innerHTML= clutter;
    })
}

function gsapAnimation(){
    gsap.to("#page3 h2 span",{
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger : "#page3",
            start : "top 50%",
            end: "top -30%",
            scrub :true,
        }
    })
}
textSplitteing();
gsapAnimation();


function textSplitteings(){
    headings.forEach((e)=>{
        let clutter= '';
        let h1Text= e.textContent;
        let splittedText = h1Text.split('');
        splittedText.forEach((e1)=>{
            clutter+=`<span>${e1}</span>`
        });
        e.innerHTML= clutter;
    })
}

function gsapAnimations(){
    gsap.to("#page4 h2 span",{
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger : "#page4",
            start : "top 50%",
            end: "top -30%",
            scrub :true,
        }
    })
}
textSplitteings();
gsapAnimations();


function textSplitteingss(){
    headingss.forEach((e)=>{
        let clutter= '';
        let h1Text= e.textContent;
        let splittedText = h1Text.split('');
        splittedText.forEach((e1)=>{
            clutter+=`<span>${e1}</span>`
        });
        e.innerHTML= clutter;
    })
}

function gsapAnimationss(){
    gsap.to("#page5 h2 span",{
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger : "#page5",
            start : "top 50%",
            end: "top -30%",
            scrub :true,
        }
    })
}
textSplitteingss();
gsapAnimationss();


let headingsss= document.querySelectorAll("#page6 .left h2")

// page 6
function textSplitteingsss(){
    headingsss.forEach((e)=>{
        let clutter= '';
        let h1Text= e.textContent;
        let splittedText = h1Text.split('');
        splittedText.forEach((e1)=>{
            clutter+=`<span>${e1}</span>`
        });
        e.innerHTML= clutter;
    })
}

function gsapAnimationsss(){
    gsap.to("#page6 .left h2 span",{
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger : "#page6",
            start : "top 50%",
            end: "top -30%",
            scrub :true,
        }
    })
}
textSplitteingsss();
gsapAnimationsss();

gsap.to(".page6Img1",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#page4",
        start:"top -100%",
        end: "bottom top",
        scrub : true,
        stagger:0.1,

    }
})
gsap.to(".page6Img2",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#page5",
        start:"top -70%",
        end: "bottom top",
        scrub : true,
        stagger:0.1,

    }
})
gsap.to(".page6Img3",{
    opacity:1,
    duration: 1,
    scrollTrigger:{
        trigger:"#page6",
        start:"top 15%",
        end: "top bottom ",
        scrub : true,
        stagger:0.1,

    }
})



// page9



let headingssss= document.querySelectorAll("#page9 h2")


function textSplitteingssss(){
    headingssss.forEach((e)=>{
        let clutter= '';
        let h1Text= e.textContent;
        let splittedText = h1Text.split('');
        splittedText.forEach((e1)=>{
            clutter+=`<span>${e1}</span>`
        });
        e.innerHTML= clutter;
    })
}

function gsapAnimationssss(){
    gsap.to("#page9 h2 span",{
        color: "#55dd4a",
        stagger: 0.1,
        scrollTrigger: {
            trigger : "#page9",
            start : "top 50%",
            end: "top -30%",
            scrub :true,
        }
    })
}
textSplitteingssss();
gsapAnimationssss();


gsap.to(".img9P1",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -100%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P2",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -70%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1, 
        marker: true   
    }
})
gsap.to(".img9P3",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -70%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P4",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -50%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P5",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -50%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P6",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -50%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P7",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -40%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P8",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -50%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})
gsap.to(".img9P9",{
    opacity: 10,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page8",
        start:"top -40%",
        end:"bottom top",
        scrub: true,
        stagger: 0.1,    
    }
})