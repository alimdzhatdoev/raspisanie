// let myMode = localStorage.getItem("mode");

// if (myMode == 'dark'){
//   document.body.classList.add('dark-mode-variables');
// } else {
//   document.body.classList.remove('dark-mode-variables');
// }

// Табы 

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

  // Тема 

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


//________________________________________________________________

let count = 1;
$(".lesson_add").on("click", function () {
  count++;

  $(".bodyTable").append(`
    <div class="lesson del_line_${count}">
        <div class="numb">
            <p id="${count}">${count}</p>
        </div>

        <div class="showBlock" class="${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="showBlock" class="${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="showBlock" class="${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="showBlock" class="${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="numb lesson_del" del_line_num="${count}">
            -
        </div>
    </div>
  `);
})

$(".bodyTable").on("click", ".lesson_del", function () {
  const delLineNum = $(this).attr("del_line_num");
  
  $(`.del_line_${delLineNum}`).remove();

  $(".lesson .numb p").each(function (index) {
    $(this).text(index + 1);
    count = index + 1
  });
});
