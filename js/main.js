import { tipe1, tipe2, tipe3, tipe4, tipe5, tipe6 } from "/tipes/tipes.js";

let count_monday = 0;

var block = "";

$("#Tab1").append(
  htmlBlockCreate('monday', 'Понедельник') + 
  htmlBlockCreate('tuesday', 'Вторник') +
  htmlBlockCreate('wednesday', 'Среда') +
  htmlBlockCreate('thursday', 'Четверг') +
  htmlBlockCreate('friday', 'Пятница') +
  htmlBlockCreate('saturday', 'Суббота')
)

function htmlBlockCreate(day, name){
  return `
    <div class="bodyTable ${day}">
      <div class="bodyTable_title">
          <div class="bodyTable_title__day">
            ${name}
          </div>
          <div class="bodyTable_title__instrument">
              <select>
                <option disabled selected>Количество пар</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
          </div>
      </div>


      <div class="lesTeachBlock">
          <div class="numb">
              <p>№</p>
          </div>
          <div class="lesTeach">
              <p>Название предмета: </p>
          </div>
          <div class="lesTeach">
              <p>Преподаватель: </p>
          </div>
          <div class="lesTeach">
              <p>Аудитория: </p>
          </div>
          <div class="lesTeach">
              <p>Тип занятия: </p>
          </div>
      </div>


    </div>
  `
}

function changeBlockInside(day) {
  
  const customBlock = document.querySelectorAll(`.${day} .showBlock`);
  const customMenu = document.querySelector(".custom-menu");

  for (let i = 0; i < customBlock.length; i = i + 4) {
    customBlock[i].addEventListener("contextmenu", function (event) {
      event.preventDefault();

      if (event.button === 2) {
        block = this.classList[1];
        console.log(block)

        showContextMenu();
        document.addEventListener("mousedown", closeContextMenu);
      }
    });
  }

  customMenu.addEventListener("click", function () {
    $(".custom-menu").hide(500);
  });

  // Функция для открытия контекстного меню
  function showContextMenu() {
    $(".custom-menu").show(1);
    $(".custom-menu").css("transform", "translate(0px, 0)");
  }

  // Функция для закрытия контекстного меню при клике вне блока
  function closeContextMenu(event) {
    const customBlock = document.querySelector(".showBlock");
    const customMenu = document.querySelector(".custom-menu");
    $(".custom-menu").css("transform", "translate(320px, 0)");

    // Проверить, был ли клик вне блока и меню
    if (
      !customBlock.contains(event.target) &&
      !customMenu.contains(event.target)
    ) {
      $(".custom-menu").css("transform", "translate(320px, 0)");
      document.removeEventListener("mousedown", closeContextMenu);
    }
  }

  $(".btn_tipe_1").click(function () {
    $(`.${day} .${block}`).html(tipe1);
  });

  $(".btn_tipe_2").click(function () {
    $(`.${day} .${block}`).html(tipe2);
  });

  $(".btn_tipe_3").click(function () {
    $(`.${day} .${block}`).html(tipe3);
  });

  $(".btn_tipe_4").click(function () {
    $(`.${day} .${block}`).html(tipe4);
  });

  $(".btn_tipe_5").click(function () {
    $(`.${day} .${block}`).html(tipe5);
  });

  $(".btn_tipe_6").click(function () {
    $(`.${day} .${block}`).html(tipe6);
  });
}

function addBlockNew(day, count){
  $(`.${day}`).append(`
    <div class="lesson ${day}_del_line_${count}">
        <div class="numb">
            <p id="${count}">${count}</p>
        </div>

        <div class="showBlock ${day}_contextMenu_lesson${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="showBlock ${day}_contextMenu_lesson${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="showBlock ${day}_contextMenu_lesson${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="showBlock ${day}_contextMenu_lesson${count}">
            <div class="tipe">
                <input type="text" placeholder="Постоянно">
            </div>
        </div>

        <div class="numb lesson_del" ${day}_del_line_num="${day}_contextMenu_lesson${count}">
            Очистить
        </div>
    </div>
  `);
}

function addDayLessons(day){
  $(`.${day} select`).change(function(){
    let lesson_count = +$(`.${day} select`).val()
    $(`.${day} .lesTeachBlock`).css("display", "flex");
  
    count_monday = 0;
    $(`.${day} .lesson`).remove();
  
    for (let i = 0; i < lesson_count; i++) {
      count_monday++;
  
      addBlockNew(day, count_monday)
    
      changeBlockInside(day);
    }
  })

  $(`.${day}`).on("click", " .lesson_del", function(){
    let thisAttr = this.attributes[1].value;
    $(`.${thisAttr} input`).val("")
  })
}

addDayLessons("monday")
addDayLessons("tuesday")
addDayLessons("wednesday")
addDayLessons("thursday")
addDayLessons("friday")
addDayLessons("saturday")


