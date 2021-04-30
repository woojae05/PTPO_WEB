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
  const leftMenu = document.querySelector(".left-menu-bar-container");

  body.style.backgroundColor = "#272727";
  body.style.color = "white";
  leftMenu.style.backgroundColor = "#2a2a2a";
  header.style.backgroundColor = "#2a2a2a";
  btn.className =
    "btn-effect effect1 dark-btn-effect dark-btn-container font-style";
  btn.value = "라이트모드";
}

function goToLightMode() {
  console.log("라이트로~");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const btn = document.querySelector("#night_day");
  const leftMenu = document.querySelector(".left-menu-bar-container");

  body.style.backgroundColor = "white";
  body.style.color = "black";
  header.style.backgroundColor = "white";
  btn.style.backgroundColor = "white";
  btn.className =
    "btn-effect effect1 light-btn-effect light-btn-container font-style";
  btn.value = "다크모드";
  leftMenu.style.backgroundColor = "white";
}

//   function nightModeClick(){ //검정
//    document.querySelector('body').style.backgroundColor='#272727'
//    document.querySelector('.header').style.backgroundColor='#2a2a2a'
//    document.querySelector('body').style.color='white'
//    document.querySelector('.left-menu-bar-container').style.backgroundColor='#2a2a2a'
//    document.querySelector('#night_day').className='btn-effect effect1 dark-btn-effect dark-btn-container font-style'
//    document.querySelector('#night_day').value='다크모드'
//   }

//   function darkModeClick(){ //하얀
//    document.querySelector('body').style.backgroundColor='white'
//    document.querySelector('body').style.color='black'
//    document.querySelector('.header').style.backgroundColor='white'
//    document.querySelector('#night_day').style.backgroundColor='white'
//    document.querySelector('.left-menu-bar-container').style.backgroundColor='white'
//    document.querySelector('#night_day').className='btn-effect effect1 light-btn-effect light-btn-container font-style'
//    document.querySelector('#night_day').value='라이트모드'
//   }

function changeBtnText(nowText) {
  if (nowText === "라이트모드") {
    document.querySelector("#night_day").value = "다크모드";
  } else {
    document.querySelector("#night_day").value = "라이트모드";
  }
}

function logoutbtn()