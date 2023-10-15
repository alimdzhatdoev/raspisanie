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
    tablinks[i].childNodes[1].className = tablinks[
      i
    ].childNodes[1].className.replace(" activeHeaderTR", "");
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

const light = document.querySelector(".light");
const theme = localStorage.getItem("theme");

if (theme == "dark") {
  document.body.classList.add("dark-mode-variables");
  light.setAttribute("src", "/ref/light.png");
} else {
  light.setAttribute("src", "/ref/dark.png");
}

light.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  let theme = "light";
  if (document.body.classList.contains("dark-mode-variables")) {
    theme = "dark";
    light.setAttribute("src", "/ref/light.png");
  } else {
    light.setAttribute("src", "/ref/dark.png");
  }
  localStorage.setItem("theme", theme);
});

//________________________________________________________________

$("#stepSelect").change(function () {
  let stepValue = $("#stepSelect").val();
  let courseCount = 0;

  if (stepValue == "bachelor") {
    courseCount = 4;
  } else if (stepValue == "master") {
    courseCount = 2;
  }

  $("#courseSelect").removeAttr("disabled");

  $("#courseSelect").text("");

  $("#courseSelect").append(`
    <option disabled selected>Выберите курс</option>
  `);

  for (let i = 1; i <= courseCount; i++) {
    $("#courseSelect").append(`
      <option value="${i}">${i}</option>
    `);
  }
});

$("#courseSelect").change(function () {
  $("#groupSelect").removeAttr("disabled");
});

// $("#groupSelect").change(function () {
//   $(".bodyTable").css("display", "flex");
// });

$(".addPersonButton").click(function () {
  $(".addStudentBlock").toggle();
});

$(".addTeacherButton").click(function () {
  $(".addTeacherBlock").toggle();
});

// ______________________________

// console.log(tableList);

$(".addStudentButton").click(addStudent);

function addStudent() {
  // let stage = $("#stepSelect").val();
  // let course = $("#courseSelect").val();
  // let group = $("#groupSelect").val();
  // let lessonNumber = $(".bodyTable_title__instrument select").val();
  // let lessons;
  // let lesson;
  $(".tipe input").each(function () {
    console.log($(this).val());
  });
}



// ____________________________________________________

// function extractData(data) {
//   for (var key in data) {
//     if (data.hasOwnProperty(key)) {
//       if (typeof data[key] === "object") {
//         // Если элемент - объект, вызываем функцию рекурсивно
//         extractData(data[key]);
//       } else if (Array.isArray(data[key])) {
//         // Если элемент - массив, перебираем его
//         for (var i = 0; i < data[key].length; i++) {
//           // Делаем что-то с элементами массива, например, data[key][i]
//         }
//       } else {
//         // Элемент - простой тип данных, можно извлечь значение
//         // Например, для вывода в консоль:
//         console.log(key + ": " + data[key]);
//       }
//     }
//   }
// }









// ____________________________________________________





// $(".tableTestTitle").html(items);

// $(".tableTestTitle").html("Test");

// import tableList from "/ref/list.json";
// console.log(typeof tableList);
