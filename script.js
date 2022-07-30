// Info
const overtoInfo = document.getElementById("showInfo");
overtoInfo.addEventListener("click",showInfo);

const infoProfiles = document.getElementById("infoProfiles");

function showInfo() {
	infoProfiles.classList.toggle("info-profiles");
}

// Targets
const toClick = document.getElementsByTagName("a");
// console.log(toClick)

let index = '';

for (index = 0; index < toClick.length; index++) {
	toClick[index].setAttribute("target","_blank");
}


// Mengambil Data dari file course.json
fetch("./assets/courses.json")
.then(function(respons){
	return respons.json();
})
.then(function(datas){

	let output = '';

	for(let courses of datas) {
		output += `
			<article class="article-content">
	 			<img src="${courses.img}" alt="Image">
				<span>
					<h3>${courses.nama}</h3>
					<a href="${courses.url}" target="_blank"><p>Kunjungi Website</p></a>
				</span>
			</article>	
		`;
	}

	document.getElementById("article").innerHTML = output;
});