const getPost = (id) => {
  $.ajax({
    url: `http://10.80.161.242:8888/post`,
    type: "GET",

    beforeSend: function (xhr) {},

    success: function (res) {
      const { data } = res;
      console.log(data);

      data.map(({idx, title, content, likeCount}) => {
        $('.data').append(`
        <div class="my-portfolio">
          <div class="my-portfolio-top-contents">
            <div class="my-portfolio-title font-style">
              ${title}
            </div>

            <button class="my-portfolio-modify">
              <img src="img/modify-item.png" class="my-portfolio-modify-img">
            </button>
            <button class="my-portfolio-print">
              <img src="img/print-item.png" class="my-portfolio-print-img">
            </button>

            </div>
            <hr width=auto color="#faa860" size=2 class="my-portfolio-header-line" /> --> ${content}
        </div>
        `)
      })
    },
    error : function(err) {
      console.log(err);
    }
  });
};


const funcExe = () => {
  getPost();
}

$(() => {
  funcExe();
})