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
  localStorage.setItem("mode", "dark");
  console.log(localStorage.getItem("mode"));
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

// function changetextbox(nowstate) {
//   console.log(nowstate);
//   const text = document.querySelector(".rename-textbox");
//   // const title = document.querySelector(".");
//   if (nowstate === "변경") {
//     // document.querySelector(".my-portfolio-renamebtn-complete").className =
//     //   "my-portfolio-renamebtn-modify font-style";
//     // document.querySelector(".my-portfolio-renamebtn-img").style.display =
//     //   "none";
//     // document.querySelector(".my-portfolio-title").style.display = "none";
//     // text.style.display = "inline-block";
//     // document.querySelector(".my-portfolio-renamebtn-modify font-style").value =
//     //   "확인";
//   }
//   if (nowstate === "확인") {
//     document.querySelector("#renamebtn").className =
//       "my-portfolio-renamebtn-complete";
//     document.querySelector("#renamebtn-img").style.display = "inline-block";
//     document.querySelector("#title").style.display = "inline-block";
//     text.style.display = "none";
//     document.querySelector("#renamebtn").value = "변경";
//   }
// }

const card = document.querySelectorAll(".my-portfolio-renamebtn-complete");
card[1].addEventListener("click", (event) => {
  console.log(event.path[1]);
});

const clickCheck = (event) => {
  event.stopPropagation();
  const container = event.target.parentNode;
  const containerChilds = container.childNodes;
  containerChilds[3].style.display = "inline-block";
  containerChilds[5].className = "my-portfolio-renamebtn-modify";
  if (containerChilds[1].style.display === "none") {
    containerChilds[1].style.display = "inline-block";
    containerChilds[3].style.display = "none";
    containerChilds[5].className = "my-portfolio-renamebtn-complete";
  } else {
    containerChilds[1].style.display = "none";
  }
};

const deletePostBtn = () => {
  $.ajax({
    url: "http://localhost:8888/delete",
  });
};
