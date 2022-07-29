# PDF viewer on React JS  (v.1)

PDF Viewer supports *.pdf format.

## Quick Preview
#### version 1
<p align='center'>

<img src='../../docs/pdf_v1.gif' width='800' alt='version_1'>
</p>

### Main functionality:
- Opening an PDF file
- Enlarge \ Decrease
- Rotate 360 degrees in 90 increments
- Download original document
- Bootstrap support

## Quick Overview

```sh
cd PDF_Viewers/version_1
yarn install
yarn start
```

### Short description

**File:** src/components/PdfViewer/**PdfViewer.js**

`Contains the main application code. Just import it into your project.
In the place where you want to view PDF through the viewer.`

**File:** src/components/PdfViewer/**PdfViewer.css**

`Contains the main styles of the component`

**File:** src/**App.js**

Example:
```
import React, { Component } from 'react'
import PdfViewer from './components/PdfViewer/PdfViewer';
```
Call the component in the place where you want to display the PDF viewer:
- Pass the URL link on PDF file в переменную url_document
- Pass the TITLE name PDF file в переменную title


```
<PdfViewer title ="sample" url_document = {'/sample.pdf'} />
```

**File:** version_1/public/**index.html**

`Contains CDN CSS styles and JS Twitter Bootstrap`
<br/>
<hr/>
