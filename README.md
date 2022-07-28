# Pdf and images viewer on React JS

# Images viewer
Image Viewer supports viewing popular formats such as:
- *.jpeg
- *.jpg
- *.png

## Quick Preview
#### version 1
<p align='center'>

<img src='docs/version_1.gif' width='800' alt='version_1'>
</p>

## Quick Overview

```sh
cd Images_Viewers/version_1
yarn install
yarn start
```

### Short description

**File:** src/components/ImgV/**ImgV.js**

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
