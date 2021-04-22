const getPost = (id) => {
  $.ajax({
    url: `http://10.80.161.242:8888/post`,
    type: "GET",
    beforeSend: function (xhr) {},
    success: function (res) {
      console.log(res);
    },
  });
};
