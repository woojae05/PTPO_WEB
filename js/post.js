const getPost = (id) => {
  $.ajax({
    url: `http://localhost:8888/post`,
    type: "GET",

    beforeSend: function (xhr) {},

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
            <button class="my-portfolio-delete" >
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

const funcExe = () => {
  getPost();
};

$(() => {
  funcExe();
});
