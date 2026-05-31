//page 1 animation
let links = document.querySelectorAll("h4");
links.forEach((link)=>{
    let underline = link.querySelector("span");
    link.addEventListener("mouseenter",()=>{
        gsap.to(underline,{
        width: "100%",
        duration: 0.3 })
    })
    link.addEventListener("mouseleave",()=>{
 gsap.to(underline,{
 width: "0%",
duration: 0.3})
    })
})
let tl = gsap.timeline();
tl.from("nav h2, nav h4, nav button",{
y: -30,
x: -15,
opacity: 0,
duration: 1,
delay: 0.4,
stagger: 0.2,
})
gsap.from(".msg h1",{
y: -30,
opacity: 0,
duration: 0.5,
delay: 0.4,
stagger: 0.1
})
gsap.from(".msg p",{
x: -50,
opacity: 0,
duration: 0.6,
delay: 0.6,
})
gsap.from(".msg button",{
y: 50,
opacity: 0,
duration: 0.6,
delay:0.7,
})
gsap.from(".msg img",{
x:50,
opacity: 0,
duration: 0.8,
delay: 0.8,
})
gsap.from(".logos img",{
y: 100,
opacity: 0,
duration: 0.5,
stagger: 0.1,
scrollTrigger:{
trigger:".logos",
scroller: "body",
start:"top 80%"
}
})
let buttons = document.querySelectorAll("button");
buttons.forEach((btn)=>{
    btn.addEventListener("mouseenter",()=>{
        gsap.to(btn,{
            y: -3,
            boxShadow:"3px 3px 0px #111",
            duration: 0.3})})
    btn.addEventListener("mouseleave",()=>{
        gsap.to(btn,{
            y: 0,
            boxShadow:"0px 0px 0px #111",
            boxShadow:"2px 2px 6px #1111117d",
            duration: 0.2})})})

let h4 = document.querySelectorAll("h4")
h4.forEach((h)=>{
    h.addEventListener("mouseenter",()=>{
        gsap.to(h,{
            y: -3,
            duration: 0.3,
        })
    })
    h.addEventListener("mouseleave",()=>{
        gsap.to(h,{
            y: 0,
            duration: 0.3,
        })
    })
})
let h2 = document.querySelector("h2")
    h2.addEventListener("mouseenter",()=>{
        gsap.to(h2,{
            y: -3,

            duration: 0.3,
        })
    })
    h2.addEventListener("mouseleave",()=>{
        gsap.to(h2,{
            y: 0,
            duration: 0.3,
        })
    })
let logos = document.querySelectorAll(".logos img");
logos.forEach((img)=>{
    img.addEventListener("mouseenter",()=>{
        gsap.to(img,{
            y: -5,
            duration: 0.4,
        })
    })
       img.addEventListener("mouseleave",()=>{
        gsap.to(img,{
            y: 0,
            duration: 0.4,
        })
    })
})
let mouse = document.querySelector("body")
//page2 animation

gsap.from(".part21 h1, .part21 p",{
y: 100,
opacity: 0,
duration: 0.6,
stagger: 0.3,
scrollTrigger:{
trigger:".part21",
scroller: "body",
start:"top 85%"
}
})
const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part22",
    start: "top 65%",
  }
});

tl1.from(".box1",{
y:100,
opacity: 0,
duration: 0.4,
delay:0.1,
})
tl1.from(".box2",{
x:-100,
opacity: 0,
duration: 0.3,

})
tl1.from(".box4",{
y:-100,
opacity: 0,
duration: 0.3,
})
tl1.from(".box3",{
x:100,
opacity: 0,
duration: 0.3,
})

// page 3 animation

let tl2 = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
});
tl2.to(".eye, .eye2",{
height: 31,
duration: 0.4,
ease: "power2.in",
})
tl2.to(".eye, .eye2",{
height: 0,
duration: 0.4,
ease: "power2.out",
})
let span = document.querySelectorAll("#para span ")
span.forEach((s)=>{
    s.addEventListener("mouseenter",()=>{
        gsap.to(s,{
            y: -3,
            cursor: "pointer",
            duration: 0.3,
        })
    })
    s.addEventListener("mouseleave",()=>{
        gsap.to(s,{
            cursor: "pointer",
            y: 0,
            cursor: "pointer",
            duration: 0.3,
        })
    })
})
gsap.from(".mp1 h2, .mp1 p, .mp1 button",{
    y: -50,
    duration: 0.4,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".mp1",
        scroller: "body",
        start: "top 80%",
    }
})
gsap.from(".mp2",{
  y: 150,
   duration: 0.4,
   opacity:0,
    scrollTrigger: {
        trigger: ".mp1",
        scroller: "body",
        start: "top 80%",
    }
})
gsap.from(".p3m2 h1, .p3m2 p",{
x:-150,
opacity: 0,
duration: 0.4,
stagger: 0.3,
 scrollTrigger: {
        trigger: ".p3m2",
        scroller: "body",
        start: "top 90%",
    }
})
let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".p3m2",
        scroller: "body",
        start: "top 60%",
    }
});

tl3.from(".para1",{
    x:-150,
    duration: 0.4,
    opacity: 0,
})
tl3.from(".para2",{
y: 200,
duration: 0.3,
opacity:0,
})
tl3.from(".para3",{
    x: 200,
    duration: 0.2,
    opacity: 0,
})
let dot = document.querySelector(".dot");
document.addEventListener("mousemove",(e)=>{
    console.log(e);
gsap.to(".dot",{
    x: e.x-4,
    y: e.y-4,
    duration: 1.5,
    delay: 0.1,
    ease: "elastic.out(2,0.4)",
})
})