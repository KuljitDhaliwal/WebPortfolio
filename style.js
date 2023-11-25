
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector(".preloader").style.display = "none";
});
 
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("resize", function () {
    ScrollTrigger.refresh();
});
  
let mn = gsap.matchMedia()
mn.add({
    isMobile: "(max-width: 768px)",
    isDesktop: "(min-width: 769px)"
}, (context) => {
    let { isMobile, isDesktop } = context.conditions;
    // First Section Timeline
    var tm1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1",
            start: "top top",
            end: "+=500",
            pin: true,
            scrub: 0.2,

        }
    })    
    tm1.to(".marquee-part", {
        left: "-380%",
        duration: "1.8"
    }, "tm1")
    
    tm1.from(".ipad", {
        bottom: "-100%"
    }, "tm1")
    
    tm1.to(".insta-text", {
        opacity: "1",
        delay: ".5"
    },"tm1")
    tm1.to(".dp", {
        opacity: "1",
        delay: ".5"
    },"tm1")
    tm1.from(".five-pic", {
        y: isDesktop ? "30vh" : "60vh",
        x: "50vw",
        translateX: "0",
        zIndex: 1,
        width: isDesktop ? "600px" : "300px",
        height: isDesktop ? "400px" : "200px",
        borderRadius: "1rem"
    }, "tm1")
    tm1.from(".four-pic", {
        y: isDesktop ? "-4rem": "60%",
        x: "50vw",
        translateX: "0",
        width: isDesktop ? "500px" : "250px",
        height: isDesktop ? "600px" : "300px",
        borderRadius: "1rem",
    },"tm1")
    tm1.from(".three-pic", {
        y:isDesktop ?  "5rem" : "35vh",
        x: isDesktop ? "30vw" : "0",
        translateX: "0",
        zIndex: 2,
        width: isDesktop ? "400px" : "200px",
        height: isDesktop ? "400px" : "200px",
        borderRadius: "1rem"
    },"tm1")
    tm1.from(".two-pic", {
        y: "55vh",
        x: isDesktop ? "20vw" : "0",
        bottom: 0,
        translateX: "0",
        width: isDesktop ? "500px" : "250px",
        height: isDesktop ? "500px" : "250px",
        borderRadius: "1rem"
    },"tm1")
    tm1.from(".one-pic", {
        y: "10%",
        x: 0,
        translateX: "0",
        width: "500px",
        height: "700px",
        borderRadius: "1rem"
    }, "tm1")
    
    tm1.to("#section1", {
        overflow: "visible"
    }, "tm1")
    tm1.to(".three-pic", {
        zIndex: "3",
        borderRadius: "0"
    })

    // Second Section Timeline/ Enabling Ham Button
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section2",
            start: "0% 95%",
            end: "50% 50%",
            scrub: 0.2
        }
    })
    tl.to(".ham", {
        display: "flex"
    },"ki")
    tl.to(".innerdev1", {
        left: isDesktop ? "20%" : "50%",
        top: "150vh",
        marginTop: "0",
        zIndex: "9999999999",
        duration: 5
    }, "ki")
    tl.to(".my-info", {
        left: isDesktop ? "70%" : "50%",
        top: isDesktop ? "50%" : "36.7%"
    }, "ki")
    tl.to(".three-pic", {
        filter: isDesktop ?  "" : "brightness(0)"
    })
    
    // Section Three Book Timeline
    var tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section3",
            start: "top top",
            end: "+=1500px",
            scrub: 0.2,
            pin: true
        }
    })  
    tl1.to(".contact.up", {
        top: "-50%"
    },"each")
    tl1.to(".contact.down", {
        bottom: "-50%"
    }, "each")
    tl1.from(".book-shell", {
        rotate: "-20deg",
    }, 'move')
    
    tl1.from(".first-page", {
        rotateX: "50deg",
    }, 'move')
    tl1.from(".second-page", {
        rotateX: "50deg",
    }, 'move')
    tl1.from(".third-page", {
        rotateX: "50deg",
    }, 'move')
    tl1.from(".last-page", {
        rotateX: "50deg",
    }, 'move')
    tl1.to(".book-shell", {
        width: isDesktop ? "300px" : "180px",
        height: isDesktop ? "600px" : "300px",
        left: "50%",
        top: "50%",
        translateX: "-50%",
        translateY: "-50%"
    })
    tl1.to(".first-page", {
        rotateY: "-180deg"
    }, 'goon')
    
    tl1.to(".real-qual", {
        opacity: "1"
    },'goon')
    
    tl1.to(".book-shell", {
        marginLeft: isDesktop ? "10rem" : "5.5rem",
    }, 'goon')
    
    tl1.to(".first-page", {
        zIndex: "1"
    })
    tl1.to(".second-page", {
        rotateY: "-180deg",
    },)
    tl1.to(".second-page", {
        zIndex: "1"
    },)
    tl1.to(".third-page", {
        rotateY: "-180deg"
    },)
    tl1.to(".third-page", {
        zIndex: "1"
    },)
    tl1.to(".last-page", {
        rotateY: "-180deg",
    },'moveon')
    tl1.to(".last-page", {
        zIndex: "1"
    },'moveon')
    tl1.to(".book-shell", {
        marginLeft: isDesktop ? "19rem" : "11rem",
    }, 'moveon')

    // Section Four Smile Face Timeline
    var te2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".wrapper-container",
            start: "600% 50%",
            end: "+=200",
            scrub: 0.2,
        }
    })
    te2.from(".smile", {
        width: "100%",
        top: "0",
        borderRadius: "0",
    },"ok")
    te2.from(".smile-face", {
        width: "100%",
        height: "100%",
        top: "0",
    }, "ok")
    te2.from(".eyes p", {
        fontSize: "10vw"
    })
    te2.from(".smile-face p", {
        fontSize: "10vw"
    })
    var tm2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#project-sec",
        start: "0 0",
        end: "+=200",
        scrub: 0.2,
        pin: true,
    }
})
tm2.to(".eye", {
    width: isDesktop ? "30px" : "20px",
    borderRadius: "50%"
}, "ol")
tm2.to(".smile", {
    border: "5px solid #262523"
},"ol")
tm2.to(".smile-face", {
    width: isDesktop ?  "80%" : "70%",
    height: isDesktop ? "200px" : "100px",
    top: isDesktop ? "250px" : "160px"
},"ol")
tm2.to(".smile-teeth", {
    opacity: "1",
    marginTop: "-1rem"
}, "ol")
    
    // Section Five Projects Timeline
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#section4",
            start: "top top",
            end: "+1000px",
            scrub: 0.2,
            pin: true
        }
    })
    tl2.to(".project.one", {
        width: isDesktop ? "70%" : "80%",
        height: isDesktop ? "55%" : "400px"
    },'same')
    tl2.to(".project.two", {
        top: "15%",
    },'same')
    tl2.to(".project.two", {
        width: isDesktop ? "75%" : "85%",
        height: isDesktop ? "60%" : "400px"
    },'two')
    tl2.to(".project.three", {
        top: "20%",
    }, 'two')
    tl2.to(".project.three", {
        width: isDesktop ? "80%" : "90%",
        height: isDesktop ? "65%" : "400px"
    }, 'three')
})

const hamBars = document.querySelectorAll("#ham")
const touch = document.querySelector("#touch");
const hamClass = document.querySelector(".two-btns");
const backHam = document.querySelector(".back-ham");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector(".overlay");
const section1 = document.querySelector("#section1");
const navbar = document.querySelector(".navbar");
const wrapper = document.querySelector(".wrapper");
document.addEventListener('click', (e) => {
    if (e.target.id !== 'ham' && e.target.id !== 'sidebar') {
        sidebar.classList.remove("come");
        overlay.classList.remove("come");
        document.body.classList.remove("stop");
        hamClass.classList.remove("come");
    }
})
let displayBtn = false;
hamClass.addEventListener("click", (e) => {
    sidebar.classList.toggle("come");
    overlay.classList.toggle("come");
    document.body.classList.toggle("stop");
    hamClass.classList.toggle("come");
    if (displayBtn == true) {
        hamClass.classList.remove("come");
        hamClass.style.display = "none";
        displayBtn = false;
    }
})
document.querySelector(".bars").addEventListener("click", ()=> {
    sidebar.classList.toggle("come");
    overlay.classList.toggle("come");
    hamClass.classList.add("come");
    hamClass.style.display = "flex";
    document.body.classList.toggle("stop");
    displayBtn = true;
})

hamBars.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let hamWidth = element.clientWidth;
        let hamHeight = element.clientHeight;
        let moveX = (x - hamWidth / 3)
        let moveY = (y - hamHeight / 3)
        element.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    })
    element.addEventListener('mouseout', () => {
        element.style.transform = ``;
})
});

const heart = document.querySelector(".fa-heart");
heart.addEventListener("click", () => {
    heart.classList.toggle("red")
})

const car = document.querySelector(".car-g");
const progressBar=()=> {
    let scrollPos = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    car.style.left = `${scrollPos}%`;
    requestAnimationFrame(progressBar);
};

progressBar();










