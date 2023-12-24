function initiate() {
  let stars = [];
  let starsR = [];
  for (let i = 0; i < 150; i++) {
    let str = `
      <span class="my-star-left" style="--i:${i};">
        <i class="iconoir-star-solid"></i>
      </span>
    `;
    stars.push(str);
    str = `
      <span class="my-star-right" style="--i:${i};">
        <i class="iconoir-star-solid"></i>
      </span>
    `;
    starsR.push(str);
  }
  let html = stars.join(" ");
  let tree = document.getElementsByClassName("l-tree");
  tree[0].innerHTML = html;
  html = starsR.join(" ");
  tree = document.getElementsByClassName("r-tree");
  tree[0].innerHTML = html;
}

function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }

function genLeft() {
  for (let i = 0; i <= 20; i++) {
    console.log(`${i * 5}% {
      transform: translate(${i % 2 == 0 ? i * (-10) : i * 10}px, ${i * 25}px) translateZ(${i * 5}px);
    }`)
  }
}

function genRight() {
  for (let i = 0; i <= 20; i++) {
    console.log(`${i * 5}% {
      transform: translate(${i % 2 == 0 ? i * 10 : i * (-10)}px, ${i * 25}px) translateZ(${i * 5}px);
    }`)
  }
}
