function toggleMenu() {
    document.querySelectorAll(".nav-links").classList.toggle("active");
}

var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
main.addEventListener("mousemove",function(ket){
    crsr.style.left=ket.x+"px"
    crsr.style.top=ket.y+"px"
})


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


var tl = gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    start:"-0% 50%",
    end:"50% 50%",
    scrub:true,
}})

tl.from(".pic1",{
    x:-200,
    y:200,
},"tree")
tl.from(".pic2",{
    x:-200,
    y:100,
}, "tree")
tl.from(".pic4",{
    x:1200,
    y:200,
}, "tree")
tl.from(".pic5",{
    x:1500,
    y:100,
},"tree")

var pk = gsap.timeline({scrollTrigger:{
    trigger:"#page9",
    start:"0%  50%",
    end:"30% 50%",
    scrub:true,
    // markers:true,
}})

pk.from(".cal1",{
    opacity:0.5,
})
pk.from(".cal2",{
    opacity:0.5,
})
pk.from(".cal3",{
    opacity:0.5,
})
pk.from(".cal4",{
    opacity:0.5,
})
pk.from(".cal5",{
    opacity:0.5,
})
pk.from(".cal6",{
    opacity:0.5,
})
pk.from(".cal7",{
    opacity:0.5,
})
pk.from(".cal8",{
    opacity:0.5,
})
pk.from(".cal9",{
    opacity:0.5,
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