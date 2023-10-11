import { tipe1, tipe2, tipe3, tipe4, tipe5, tipe6 } from '/tipes/tipes.js';

const customBlock = document.querySelector(".showBlock");
const customMenu = document.querySelector(".custom-menu");
let customBlockId = customBlock.getAttribute("id");
console.log(customBlockId);

customBlock.addEventListener("contextmenu", function (event) {
  event.preventDefault();

  if (event.button === 2) {
    // showContextMenu(event.clientX, event.clientY);
    showContextMenu();
    document.addEventListener("mousedown", closeContextMenu);
  }
});

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
  $(".showBlock").html(tipe1);
});

$(".btn_tipe_2").click(function () {
  $(".showBlock").html(tipe2);
});

$(".btn_tipe_3").click(function () {
  $(".showBlock").html(tipe3);
});

$(".btn_tipe_4").click(function () {
  $(".showBlock").html(tipe4);
});

$(".btn_tipe_5").click(function () {
  $(".showBlock").html(tipe5);
});

$(".btn_tipe_6").click(function () {
  $(".showBlock").html(tipe6);
});
