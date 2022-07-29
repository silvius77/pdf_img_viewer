import React, { Component } from 'react'
import PdfViewer from './components/PdfViewer/PdfViewer';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <>
        <div className="row">
          <div>
            <PdfViewer title ="sample" url_document = {'/sample.pdf'} />
          </div> 
        </div>
        <div className="row">
          <div>
            <PdfViewer title ="p1" url_document = {'/p1.pdf'} />
          </div>
        </div>
        <div className="row">
          <div>
            <PdfViewer title ="p2" url_document = {'/p2.pdf'} />
          </div>
        </div>       
               
      </>
    );
  }
}

export default App;