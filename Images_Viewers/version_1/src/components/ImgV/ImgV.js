import React, { useState } from 'react';
import './ImgV.css';


function ImgV(props) {

    const img_position ={
        margin: 'auto',
        position: 'absolute',
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0,
        width: "80%",
        height: 'auto'
      }

    const MetaImage = (url) =>{
        // function return img size   
        let img = new Image();
        img.src = url;
        return {'width': img.width, 'height':img.height, 'persent':img.style.width}
    }

    let [currentImg, setCurrentImgId] = useState(0);
    let [imgRotate, setRotateImg] = useState(0);
    const meta  = MetaImage(props.data[currentImg])

    
    let [imgSizeRender_w, setImgSizeRender_w] = useState(meta.width);
    let [imgSizeRender_h, setImgSizeRender_h] = useState(meta.height);
    let [imgZoom, setImgZoom] = useState(80);
    
    
    const imgSize = () => {
        return MetaImage(props.data[currentImg])
    }

        function setCurrentImg(id){
        setCurrentImgId(id)
        imgSize()        
        }




    const Right = () => {
        if (currentImg +1 >= props.data.length){
            setCurrentImg(0);
        }
        else{
            setCurrentImg(currentImg+1);
        }
    }

    const Left = () => {
        if (currentImg === 0){
            setCurrentImg(props.data.length - 1);
        }
        else{
            setCurrentImg(currentImg - 1);
        }
    }

    const imgZoomIn = () => {
        const img = document.querySelector('#main_img')
        const current =  img.style.width

        if (current === '240%'){
            img.style.width = '250%'
            setImgZoom(250)
        }
        if (current === '230%'){
            img.style.width = '240%'
            setImgZoom(240)
        }
        if (current === '220%'){
            img.style.width = '230%'
            setImgZoom(230)
        }
        if (current === '210%'){
            img.style.width = '220%'
            setImgZoom(220)
        }
        if (current === '200%'){
            img.style.width = '210%'
            setImgZoom(210)
        }
        if (current === '190%'){
            img.style.width = '200%'
            setImgZoom(200)
        }
        if (current === '180%'){
            img.style.width = '190%'
            setImgZoom(190)
        }
        if (current === '170%'){
            img.style.width = '180%'
            setImgZoom(180)
        }
        if (current === '160%'){
            img.style.width = '170%'
            setImgZoom(170)
        }
        if (current === '150%'){
            img.style.width = '160%'
            setImgZoom(160)
        }
        if (current === '140%'){
            img.style.width = '150%'
            setImgZoom(150)
        }
        if (current === '130%'){
            img.style.width = '140%'
            setImgZoom(140)
        }
        if (current === '120%'){
            img.style.width = '130%'
            setImgZoom(130)
        }
        if (current === '110%'){
            img.style.width = '120%'
            setImgZoom(120)
        }
        if (current === '100%'){
            img.style.width = '110%'
            setImgZoom(110)
        }
        if (current === '90%'){
            img.style.width = '100%'
            setImgZoom(100)
        }
        if (current === '80%'){
            img.style.width = '90%'
            setImgZoom(90)
        }
        if (current === '70%'){
            img.style.width = '80%'
            setImgZoom(80)
        }
        if (current === '60%'){
            img.style.width = '70%'
            setImgZoom(70)
        }
        if (current === '50%'){
            img.style.width = '60%'
            setImgZoom(60)
        }
        if (current === '40%'){
            img.style.width = '50%'
            setImgZoom(50)
        }
        if (current === '30%'){
            img.style.width = '40%'
            setImgZoom(40)
        }
        if (current === '20%'){
            img.style.width = '30%'
            setImgZoom(30)
        }
        if (current === '10%'){
            img.style.width = '20%'
            setImgZoom(20)
        }
        if (current === '1%'){
            img.style.width = '10%'
            setImgZoom(10)
        }
    }

    const imgZoomOut = () => {
        const img = document.querySelector('#main_img')
        const current =  img.style.width
        if (current === '250%'){
            img.style.width = '240%'
            setImgZoom(240)
        }
        if (current === '240%'){
            img.style.width = '230%'
            setImgZoom(230)
        }
        if (current === '230%'){
            img.style.width = '220%'
            setImgZoom(220)
        }
        if (current === '220%'){
            img.style.width = '210%'
            setImgZoom(210)
        }
        if (current === '210%'){
            img.style.width = '200%'
            setImgZoom(200)
        }
        if (current === '200%'){
            img.style.width = '190%'
            setImgZoom(190)
        }
        if (current === '190%'){
            img.style.width = '180%'
            setImgZoom(180)
        }
        if (current === '180%'){
            img.style.width = '170%'
            setImgZoom(170)
        }
        if (current === '170%'){
            img.style.width = '160%'
            setImgZoom(160)
        }
        if (current === '160%'){
            img.style.width = '150%'
            setImgZoom(150)
        }
        if (current === '150%'){
            img.style.width = '140%'
            setImgZoom(140)
        }
        if (current === '140%'){
            img.style.width = '130%'
            setImgZoom(130)
        }
        if (current === '130%'){
            img.style.width = '120%'
            setImgZoom(120)
        }
        if (current === '120%'){
            img.style.width = '110%'
            setImgZoom(110)
        }
        if (current === '110%'){
            img.style.width = '100%'
            setImgZoom(100)
        }
        if (current === '100%'){
            img.style.width = '90%'
            setImgZoom(90)
        }
        if (current === '90%'){
            img.style.width = '80%'
            setImgZoom(80)
        }
        if (current === '80%'){
            img.style.width = '70%'
            setImgZoom(70)
        }
        if (current === '80%'){
            img.style.width = '70%'
            setImgZoom(70)
        }
        if (current === '70%'){
            img.style.width = '60%'
            setImgZoom(60)
        }
        if (current === '60%'){
            img.style.width = '50%'
            setImgZoom(50)
        }
        if (current === '50%'){
            img.style.width = '40%'
            setImgZoom(40)
        }
        if (current === '40%'){
            img.style.width = '30%'
            setImgZoom(30)
        }
        if (current === '30%'){
            img.style.width = '20%'
            setImgZoom(20)
        }
        if (current === '20%'){
            img.style.width = '10%'
            setImgZoom(10)
        }
        if (current === '10%'){
            img.style.width = '1%'
            setImgZoom(0)
        }
    }

    const imgFitToDefault = () =>{
        const img = document.querySelector('#main_img')
        img.style.width = '100%'
        setImgZoom(100)
    }

    const imgFitToWidth= () =>{
        const img = document.querySelector('#main_img')
        img.style.width = '80%'
        setImgZoom(80)
    }

    const imgRotateRight = () =>{
        console.log('#7')
        if (imgRotate === 0){
            setRotateImg(90)
        }
        else if (imgRotate === 90){
            setRotateImg(180)
        }
        else if (imgRotate === 180){
            setRotateImg(270)
        }
        else if (imgRotate === 270){
            setRotateImg(0)
        }
    }

    const imgRotationLeft = () =>{
        console.log('#8')
        if (imgRotate === 0){
            setRotateImg(270)
        }
        else if (imgRotate === 270){
            setRotateImg(180 )
        }
        else if (imgRotate === 180){
            setRotateImg(90)
        }
        else if (imgRotate === 90){
            setRotateImg(0)
        }
      }



    const rotate = `img_rotate_${imgRotate}`

   
    
	return <>
        
        <div className='container'>
            <div className='row'>
                <div className='col'>
                
                {/* img  prew start*/}
                {props.data.map((user,index) =>
                    <>
                        <img 
                            key ={index} 
                            src={user}
                            className="img_prew" 
                            onClick={() => setCurrentImg(index)}
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModal"
                            
                        />
                    </>
                )}

                {/* img  prew  end */}
                </div>
            </div>
            
            <>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="sticky">
                                <header className="d-flex justify-content-center py-3">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className='btn' onClick={() => imgZoomIn()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-in" 
                                                    width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="7" y1="10" x2="13" y2="10" />
                                                    <line x1="10" y1="7" x2="10" y2="13" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-outline-secondary" onClick={() => imgFitToDefault()}>
                                                {imgZoom}%
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className='btn' onClick={() => imgZoomOut()} >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-out" 
                                                    width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="7" y1="10" x2="13" y2="10" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className='btn' onClick={() => imgFitToWidth()}>                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-viewport-wide" 
                                                width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M10 12h-7l3 -3m0 6l-3 -3" />
                                                <path d="M14 12h7l-3 -3m0 6l3 -3" />
                                                <path d="M3 6v-3h18v3" />
                                                <path d="M3 18v3h18v-3" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className='btn' onClick={() => imgRotateRight()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise" 
                                                    width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" 
                                                    stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className='btn' onClick={() => imgRotationLeft()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate" 
                                                    width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                                    fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href={props.data[currentImg]} download className="btn downloader"> 
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" 
                                                width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                <polyline points="7 11 12 16 17 11" />
                                                <line x1="12" y1="4" x2="12" y2="16" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </header>
                                <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <hr/>
                            </div>
                            <div className="modal-body overflow_h">
                                {/* LEFT ARROW */}
                                <div  className="left_arrow" onClick={Left} id="btn_left">          
                                    {/* <img src='img/arrows/arrows_left.png'/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" 
                                        width="60" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    
                                </div>

                                {/* RIGHT ARROW  */}
                                <div  className="right_arrow" onClick={Right} id="btn_right">
                                    {/* <img src='img/arrows/arrows_right.png'/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" 
                                        width="60" height="88" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                        fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="9 6 15 12 9 18" />
                                    </svg>

                                </div>

                                <div className="container">
                                    <div className='row'>
                                        <div className='d-flex justify-content-center'>
                                            
                                            {/* MAIN IMAGE */}

                                            <img
                                                id='main_img'
                                                src={props.data[currentImg]}
                                                width={imgSizeRender_w}
                                                height={imgSizeRender_h}
                                                className={`${rotate} `}
                                                style={img_position}
                                                alt="big image"
                                                >
                                            </img>
                                        
                                        </div>
                                    </div>
                                </div>                        
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
        
    
	    </>
}

export default ImgV;