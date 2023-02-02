rotateDeg = 0;

document.getElementById('rotate_right').addEventListener('click', ()=>{
    img = document.getElementById('main_img');
    rotateDeg +=90;
    img.style.transform=`rotate(${rotateDeg}deg)`;
    console.log(img.style.transform)
    if (rotateDeg == 360)
        rotateDeg = 0; 
})

document.getElementById('rotate_left').addEventListener('click', ()=>{
    img = document.getElementById('main_img');
    rotateDeg -=90;
    img.style.transform=`rotate(${rotateDeg}deg)`;
    console.log(img.style.transform)
    if (rotateDeg == -360)
        rotateDeg = 0; 
})

document.getElementById('info').addEventListener('click', ()=>{
    div = document.getElementById('inform');
    if (div.style.visibility == "hidden"){
        div.style.visibility = "visible";
    }
    else{
        div.style.visibility = "hidden";
    }
    
})

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight' && (event.ctrlKey || event.metaKey)) {
      console.log('next')
    }
    if (event.code == 'ArrowLeft' && (event.ctrlKey || event.metaKey)) {
        console.log('prev')
    }
    if (event.code == 'ArrowUp' && (event.ctrlKey || event.metaKey)) {
        // console.log('zoom in')
        zoom('zoom', zoomStep);
    }
    if (event.code == 'ArrowDown' && (event.ctrlKey || event.metaKey)) {
        // console.log('zoom out')
        zoom('out', zoomStep);
    }
    if ((event.code == 'Digit0' || event.code == 'Numpad0') && (event.ctrlKey || event.metaKey)) {
        console.log('fit')
        fit.click();
    }
  });