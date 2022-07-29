import React, {Component} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import './PdfViewer.css';

export default class PdfViewer extends Component {

  state = {
    numPages: 0,
    pageZoom: 1.0,
    pageZoomPercent: 100,
    pageRotate: 0,
    scrollWidth: 80 * document.documentElement.scrollWidth / 100,
    scrollHeight: document.documentElement.scrollHeight
  }

  onDocumentLoadSuccess = ({numPages}) =>{
    this.setState({
        numPages: numPages
      })
  }

  pageZoomIn = () => {
    this.setState({
        pageZoom: this.state.pageZoom + 0.2,
        pageZoomPercent: this.state.pageZoomPercent + 10
      })
  }

  pageZoomOut = () => {
    this.setState({
        pageZoom: this.state.pageZoom - 0.2,
        pageZoomPercent: this.state.pageZoomPercent - 10
      })
  }

  pageFitToDefault = () => {
    this.setState({
        pageZoom: 1,
        pageZoomPercent: 100
      })
  }

  pageFitToWidth = () => {
    this.setState({
        pageZoom: 1.2,
        pageZoomPercent: 120
      })
  }

  pageRotateRight = () =>{
        if (this.state.pageRotate === 0){
            this.setState({ pageRotate: 90 })
        }
        else if (this.state.pageRotate === 90){
            this.setState({pageRotate: 180 })
        }
        else if (this.state.pageRotate === 180){
            this.setState({pageRotate: 270 })
        }
        else if (this.state.pageRotate === 270){
            this.setState({pageRotate: 0 })
        }

    }
    
  pageRotateLeft = () =>{
    if (this.state.pageRotate === 0){
        this.setState({ pageRotate: 270 })
    }
    else if (this.state.pageRotate === 270){
        this.setState({pageRotate: 180 })
    }
    else if (this.state.pageRotate === 180){
        this.setState({pageRotate: 90 })
    }
    else if (this.state.pageRotate === 90){
        this.setState({pageRotate: 0 })
    }

  }

  unique_id =()=> {
    return `f${(~~(Math.random()*1e8)).toString(16)}`;
  }

  render() {

    const id_uniq  = this.unique_id()
    const modal_id = `${id_uniq}`
    const modal_id_target = `#${id_uniq}`
    
    return(
    <>  

        <a className="btn" 
            href={this.props.url_document} 
            data-bs-toggle="modal" 
            data-bs-target={modal_id_target}
            >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-horizontal" 
                width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
            </svg>
                {this.props.title}
          </a>
          


        {/* <!-- Modal --> */}
        <div className="modal fade" id={modal_id}  tabIndex="-1" aria-labelledby="PDFModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
                    <div className="sticky">
                        <header className="d-flex justify-content-center py-3">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className='btn' onClick={this.pageZoomIn}>
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
                                    <a className="btn btn-outline-secondary" onClick={this.pageFitToDefault}>
                                        {this.state.pageZoomPercent}%
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className='btn' onClick={this.pageZoomOut}>
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
                                    <a className='btn' onClick={this.pageFitToWidth}>
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
                                    <a className='btn' onClick={this.pageRotateRight}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate-clockwise" 
                                            width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" 
                                            stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className='btn' onClick={this.pageRotateLeft}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-rotate" 
                                            width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                            fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href={this.props.url_document} download className="btn downloader"> 
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
              <div className="modal-body">
                <div className="container">
                    <div className='row'>
                        <div className='d-flex justify-content-center'>
                            <Document file={this.props.url_document} onLoadSuccess={this.onDocumentLoadSuccess}>
                                {Array.from(
                                    new Array(this.state.numPages),
                                    (el,index) => (
                                    <Page 
                                        key={`page_${index+1}`}
                                        pageNumber={index+1}
                                        scale={this.state.pageZoom}
                                        rotate={this.state.pageRotate}
                                        width={this.state.scrollWidth}
                                    />
                                    )
                                )}
                            </Document>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );

  }
}