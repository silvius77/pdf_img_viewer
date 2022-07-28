import ImgV from "./components/ImgV/ImgV";

function App() {
	
  const data = [
    "img/pet.jpeg",
    "img/husky-vertebrate.jpeg",
    "img/pepper-koup.jpeg",
    "img/wallpaper-sunrise-morning-waves-sea.jpeg",
    "img/grass-lawn-camera-retro.jpeg",
    "https://img1.fonwall.ru/o/cc/cats-cat-yawn.jpg", 
    "https://img1.fonwall.ru/o/qa/horizon-sky-sunset-skyline-rifv.jpeg",
    "https://img1.fonwall.ru/o/lk/wallpaper-horse-stare-clouds-sky.jpeg",
    "https://wallbox.ru/resize/640x480/wallpapers/main/201146/tekstury-26dd5f5c0a62.jpg",
    "https://image.shutterstock.com/z/stock-photo-colorful-fruit-pattern-of-fresh-peaches-on-green-pastel-background-1508754017.jpg",
    "https://img1.fonwall.ru/o/ia/bald-eagle-eagle-birds-closeup.jpeg",
    "https://img1.fonwall.ru/o/ru/wallpaper-cat-close-cats-haiu.jpeg",
    "https://img1.fonwall.ru/o/st/flower-gerbera-pink-color-closeup.jpeg",
  ]

	return <div>
		<ImgV data={data}/>
	</div>;
}
export default App;