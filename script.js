// || Info
document.getElementById("showInfo").addEventListener("click", function () {
  toogle(document.getElementById("infoProfiles"));
});

function toogle(event) {
  event.classList.toggle("info-profiles");
}

// Menutup Dropdown ketika user melakukan klik diluar dari objek dropdown
/*window.onclick = function(param){
  
  if(!param.target.matches('.info')){	

    let profileContent = document.getElementsByClassName("profiles");

      for (let showProfileContent of profileContent) {
        
        if(showProfileContent.classList.contains('info-profiles')) {
          
        showProfileContent.classList.remove('info-profiles');

      }
    }
  }
}*/

// || Targets
const toClick = document.getElementsByTagName("a");

let index = '';

for (index = 0; index < toClick.length; index++) {
  toClick[index].setAttribute("target","_blank");
}


// || Mengambil Data dari file course.json
fetch("./assets/courses.json")
.then(function(respons){
  return respons.json();
})
.then(function(datas){

  let output = '';

  for(let courses of datas) {
    output += `
      <article class="article-content">
         <img src="${courses.img}" alt="Image" class="logo-courses">
        <span class="identity-courses">
          <h3>${courses.nama}</h3>
          <div class="contact-course">
            <a href="${courses.url}" target="_blank"><img src="./assets/icon/website-icon-course.svg" alt="Website Icon" class="website-icon-courses"></a>
            <a href="${courses.url_instagram}" target="_blank"><img src="./assets/icon/instagram-icon-course.svg" alt="Instagram Icon" class="instagram-icon-courses"></a>
          </div>
        </span>
      </article>	
    `;
  }

  document.getElementById("article").innerHTML = output;
});