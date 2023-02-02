var startPointX = 0;
var startPointY = 0;
var previous_left = 0;
var previous_top = 0;
var clientX = 0
var clientY = 0
var onMouseDown = false;
let zoomStep = 80;
let landscape = false;
let portrait = false;

let img = document.getElementById('main_img');
let img_h = img.height;
let img_w = img.width;

let oversize = img.width / 2

if (oversize > img.height) {
  landscape = true;
}
else {
  portrait = true;
}

if (portrait) {
  let img = document.getElementById('main_img');
  img.style.width = 'auto';
  img.style.height = '100%';
}
if (landscape) {
  let img = document.getElementById('main_img');
  img.style.width = '100%';
  img.style.height = 'auto';
}

////////////////////

function set_left(element, value) {
  element.style.left = value + "px"
}
function set_top(element, value) {
  element.style.top = value + "px"
}

function mouse_down() {
  onMouseDown = true;

  startPointX = window.event.clientX;
  startPointY = window.event.clientY;
}

function mouse_up() {
  onMouseDown = false;
  previous_left = parseInt(main_img.style.left.slice(0, -2))
  previous_top = parseInt(main_img.style.top.slice(0, -2))
}

var entered = 0
function mouse_move() {

  if (onMouseDown == true) {
    // console.log("PREVIOUS_LEFT", previous_left)
    // console.log("PREVIOUS_TOP", previous_top)

    // console.log(window.event.clientX)
    // console.log(startPointX)
    // console.log(previous_left)

    set_left(main_img, window.event.clientX - startPointX + previous_left)
    set_top(main_img, window.event.clientY - startPointY + previous_top)

    clientX = window.event.clientX
    clientY = window.event.clientY

  }

}


function mouse_whell(e) {
  if (e.deltaY > 0) {
    zoom('zoom', zoomStep);
  }
  else {
    zoom('out', zoomStep);
  }
}

function zoom(val, zoomincrement) {
  if (val == 'zoom') {
    img_ele = document.getElementById('main_img');
    var pre_width = img_ele.getBoundingClientRect().width;
    var pre_height = img_ele.getBoundingClientRect().height;
    if (landscape) {
      img_ele.style.width = (pre_width + zoomincrement) + 'px';
    }
    if (portrait) {
      img_ele.style.height = (pre_height + zoomincrement) + 'px';
    }
    img_ele = null;
  }
  if (val == 'out') {
    img_ele = document.getElementById('main_img');
    var pre_width = img_ele.getBoundingClientRect().width;
    var pre_height = img_ele.getBoundingClientRect().height;
    if (landscape) {
      img_ele.style.width = (pre_width - zoomincrement) + 'px';
    }
    if (portrait) {
      img_ele.style.height = (pre_height - zoomincrement) + 'px';
    }
    img_ele = null;
  }

}

document.getElementById('main_img').addEventListener('mousedown', mouse_down)
document.getElementById('main_img').addEventListener('mouseup', mouse_up)
document.getElementById('main_img').addEventListener('mousemove', mouse_move)
document.getElementById('main_img').addEventListener('wheel', mouse_whell)


document.getElementById('fit').addEventListener('click', ()=>{
  if (portrait) {
    let img = document.getElementById('main_img');
    img.style.width = 'auto';
    img.style.height = '100%';
    img.style.left = 0;
    img.style.top = 0;
  }
  if (landscape) {
    let img = document.getElementById('main_img');
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.left = 0;
    img.style.top = 0;
  }
})