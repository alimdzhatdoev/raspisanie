// let myMode = localStorage.getItem("mode");

// if (myMode == 'dark'){
//   document.body.classList.add('dark-mode-variables');
// } else {
//   document.body.classList.remove('dark-mode-variables');
// }


function openTab(event, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
  
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("headerPart");
  
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" activeHeader", "");
      tablinks[i].childNodes[1].className = tablinks[i].childNodes[1].className.replace(" activeHeaderTR", "");
    }
  
    document.getElementById(tabName).style.display = "block";
  
    if (event.currentTarget.className == undefined) {
      tablinks[0].className += " activeHeader";
      tablinks[0].childNodes[1].className += " activeHeaderTR";
    } else {
      event.currentTarget.className += " activeHeader";
      event.currentTarget.childNodes[1].className += " activeHeaderTR";
    }
  }

  
const light = document.querySelector('.light');
const theme = localStorage.getItem('theme');

if (theme == 'dark') {
  document.body.classList.add('dark-mode-variables');
  light.setAttribute('src', '/ref/light.png');
} else {
  light.setAttribute('src', '/ref/dark.png'); 
}

light.addEventListener('click', () => {

  document.body.classList.toggle('dark-mode-variables');
  let theme = "light";
  if (document.body.classList.contains("dark-mode-variables")) {
    theme = "dark"; 
    light.setAttribute('src', '/ref/light.png');
  } else {
    light.setAttribute('src', '/ref/dark.png'); 
  }
  localStorage.setItem("theme", theme);
});




