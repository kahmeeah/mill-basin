document.body.classList.add("locked"); //lock scroll
gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("video-canvas");
const ctx = canvas.getContext("2d");

// vid dimens
canvas.width = 1920;
canvas.height = 1080;

const frameCount = 569;
const images = [];

const playhead = { frame: 0 }; 

// load all the imgs
// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
  
//   const paddedNumber = i.toString().padStart(3, '0'); // 0 -> 000 (to match filanem input)
//   img.src = `./assets/frames/IMG_6684${paddedNumber}.jpg`; // (match filename input)
  
//   images.push(img);
// }

// immediately draw the first frame when opage loads
// images[0].onload = () => {
//   ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);
// };


//  loading screen stuff
const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
let loadedCount = 0;

//load all the imgs
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  const paddedNumber = i.toString().padStart(3, '0'); // 0 -> 000 (to match filanem input)
  img.src = `./assets/frames/IMG_6684${paddedNumber}.jpg`; // (match filename input)
  
  //count everytime an img is loaded
  img.onload = () => {
    loadedCount++;
    
    // immediately draw the first frame when opage loads
    if (i === 0) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    
    // calc n update the percent
    const percent = Math.floor((loadedCount / frameCount) * 100);
    loadingText.innerText = `${percent}%`;

    
    if (loadedCount === frameCount) { //if num of loaded imgs = num of frames = done loading
      loadingScreen.style.display = "none";
      document.body.classList.remove("locked"); 
      ScrollTrigger.refresh(); 
    }
  };
  
  images.push(img); //add img to array
}

// gsap 
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".video-section",
    start: "top top",
    end: "bottom bottom", 
    scrub: 0.5,
    pin: ".canvas-wrapper"
  }
});

// scrub the vid on tl 
tl.to(playhead, {
  frame: frameCount - 1, 
  snap: "frame",
  ease: "none",
  onUpdate: () => {
    ctx.drawImage(images[playhead.frame], 0, 0, canvas.width, canvas.height);
  }
});

// add dead space 2 end of tl to sticky longer
// tl.to({}, { duration: 0.1 }); // .10 = 10% of og duration



gsap.fromTo(".two", 
  { filter: "blur(20px)" }, 
  {
    filter: "blur(0px)",
    ease: "none",
    scrollTrigger: {
      trigger: ".two",
      start: "bottom bottom", 
      end: "+=500", // add fake scroll padding
      pin: ".two", // lock div
      scrub: true,
    }
  }
);




// TODO: 
// 1. loading bar
// 2. pixels falling from cursor
// 3. jitter/scramble text on hover or sporadically
// 4. scroll 2 unblur instead of hover
// 5. scene 3 w 3d obj spin on scroll (& maybe diagrams stemming out of it)