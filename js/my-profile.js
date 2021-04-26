$(document).ready(function () {
  $(".more").click(function () {
    if ($(".more").hasClass("more")) {
      $(".more").addClass("close").removeClass("more");
      $(".left-menu-bar-container").css("visibility", "visible");
    } else if ($(".close").hasClass("close")) {
      $(".close").addClass("more").removeClass("close");
      $(".left-menu-bar-container").css("visibility", "hidden");
    }
  });
});

function modeClick(value) {
  console.log(value);
  if (value === "라이트모드") {
    // 다크모드에서 라이트모드로 바뀌는 함수
    goToLightMode();
    // nightModeClick();
  } else if (value === "다크모드") {
    // 라이트모드에서 다크모드로 바뀌는 함수
    goToDarkMode();
    // darkModeClick();
  }
}

function goToDarkMode() {
  console.log("다크로~");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const btn = document.querySelector("#night_day");
  //   const modifybox = document.querySelectorAll(".my-portfolio-modify");
  //   console.log(modifybox.length);
  //   const printbox = document.querySelectorAll(".my-portfolio-print");
  //   const newfeedbtn = document.querySelector(".new-feed");

  body.style.backgroundColor = "#272727";
  body.style.color = "white";
  header.style.backgroundColor = "#2a2a2a";
  btn.className =
    "btn-effect effect1 dark-btn-effect dark-btn-container font-style";
  btn.value = "라이트모드";
  //   for (let i = 0; i < modifybox.length; i++) {
  //     modifybox[i].style.backgroundColor = "#2a2a2a";
  //   }
  //   for (let i = 0; i < printbox.length; i++) {
  //     printbox[i].style.backgroundColor = "#2a2a2a";
  //   }
  //   newfeedbtn.style.backgroundColor = "#2a2a2a";
  //   modifybox.style.backgroundColor = "#2a2a2a";
  //   printbox.style.backgroundColor = "#2a2a2a";
}

function goToLightMode() {
  console.log("라이트로~");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const btn = document.querySelector("#night_day");
  //   const modifybox = document.querySelectorAll(".my-portfolio-modify");
  //   console.log(modifybox.length);
  //   const printbox = document.querySelectorAll(".my-portfolio-print");
  //   const newfeedbtn = document.querySelector(".new-feed");

  body.style.backgroundColor = "white";
  body.style.color = "black";
  header.style.backgroundColor = "white";
  btn.style.backgroundColor = "white";
  btn.className =
    "btn-effect effect1 light-btn-effect light-btn-container font-style";
  btn.value = "다크모드";
  //   modifybox.style.backgroundColor = "white";
  //   for (let i = 0; i < modifybox.length; i++) {
  //     modifybox[i].style.backgroundColor = "white";
  //   }
  //   for (let i = 0; i < printbox.length; i++) {
  //     printbox[i].style.backgroundColor = "white";
  //   }
  //   newfeedbtn.style.backgroundColor = "white";
  //   printbox.style.backgroundColor = "white";
}

function changeBtnText(nowText) {
  if (nowText === "라이트모드") {
    document.querySelector("#night_day").value = "다크모드";
  } else {
    document.querySelector("#night_day").value = "라이트모드";
  }
}

function changetextbox(nowstate) {
  if (nowstate === "변경") {
    document.querySelector("#renamebtn").className =
      "my-portfolio-renamebtn-modify font-style";
    document.querySelector("#renamebtn").value = "확인";
  }
}
