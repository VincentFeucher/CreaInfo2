
const carousel = document.getElementById("carousel")
const btnTest1 = document.getElementById("test1")
const btnTest2 = document.getElementById("test2")
const btnMinuteur = document.getElementById("minuteur")
const couleurDiv = document.getElementById("couleur")
const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")

let tpsCar =200
let placement = 0
let i = tpsCar
let cptInt = null
let cptImg = 1

function montre(imageCar){
	if(cptInt != null){clearInterval(cptInt)}

	cptInt = setInterval(() =>{
		i++
	if(i<=tpsCar){
		imageCar.style.opacity=i/tpsCar
	}
	else{
		clearInterval(cptInt)
		return
	}
	},10)
	i=0
}

function cache(imageCar){
	if(cptInt != null){clearInterval(cptInt)}
	cptInt = setInterval(()=>{
		i--
		if(i>=0){
			imageCar.style.opacity=i/tpsCar
		}
		else{
			clearInterval(cptInt)
			return
		}
	},10)
	i=tpsCar
}

// minuteur

setInterval(()=>{

	switch (cptImg) {
		case 1:
			cache(img1)
			img2.style.opacity=1
			img3.style.opacity=0
			cptImg++
			break;
		case 2:
			img1.style.opacity=0
			cache(img2)
			img3.style.opacity=1
			cptImg++
			break;
		case 3:
			montre(img1)
			img2.style.opacity=0
			img3.style.opacity=1
			cptImg=1
			break
			
		default:
			cptImg=1
			break;
	}

},4000)