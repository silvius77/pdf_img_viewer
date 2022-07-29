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

**File:** src/components/ImgV/**PdfViewer111111111111111111111111111.js**

`Contains the main application code. Just import it into your project.
In the place where you want to view images through the viewer.`

**File:** src/components/ImgV/**ImgV.css**

`Contains the main styles of the component`

**File:** src/**App.js**

Example:
```
import ImgV from "./components/ImgV/ImgV";
```
Pass the list of image links to the viewer as an array.

```
const data = [
    "img/pet.jpeg",
    "https://img1.fonwall.ru/o/cc/cats-cat-yawn.jpg",
    "https://img1.fonwall.ru/o/st/flower-gerbera-pink-color-closeup.jpeg",
  ]
```
In the place where you want to display the image preview, call the component
```
<ImgV data={data}/>
```

**File:** version_1/public/**index.html**

`Contains CDN CSS styles and JS Twitter Bootstrap`
<br/>
<hr/>
