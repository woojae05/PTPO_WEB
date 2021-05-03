const getPost = (id) => {
  $.ajax({
    url: `http://localhost:8888/post`,
    type: "GET",

    success: function (res) {
      const { data } = res;
      console.log(data);

      data.map(({ idx, title, content, likeCount }) => {
        $(".data").append(`
        <div class="my-portfolio">
        <div class="my-portfolio-top-contents">
            <div id = "title" class="my-portfolio-title font-style">
                ${title}
            </div>
            <input type = "textbox"  id="renamebtextbox" class="rename-textbox">
            <button id = "renamebtn" class="my-portfolio-renamebtn-complete font-style" value="변경" onclick="clickCheck(event)">
            </button>

            <button class="my-portfolio-modify">
                <img src="img/modify-item.png" class="my-portfolio-modify-img">
            </button>
            <button class="my-portfolio-print">
                <img src="img/print-item.png" class="my-portfolio-print-img">
            </button>
            <button class="my-portfolio-delete" onclick=deletePostBtn(${idx}) >
                        <img src="img/delete.png" class = "my-portfolio-delete-img">
                    </button>
            </div>
            <hr width=auto color="#faa860" size=2 class="my-portfolio-header-line" />
            ${content}
    </div> 
        `);
      });
    },
    error: function (err) {
      console.log(err);
    },
  });
};

const deletePostBtn = (idx) => {
  const token = localStorage.getItem("access_token");
  console.log(idx);
  $.ajax({
    url: `http://localhost:8888/post/${idx}`,
    type: "DELETE",

    beforeSend: function (xhr) {
      xhr.setRequestHeader("access_token", token);
    },

    success: function (res) {
      window.alert("삭제 성공");
      window.location.replace("http://10.80.162.87:5501/my_profile.html");
    },

    error: function (err) {
      console.log(err);
    },
  });
};

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

const funcExe = () => {
  getPost();
};

$(() => {
  funcExe();
});
