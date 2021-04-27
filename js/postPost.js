function postbtn() {
  const data = {
    title: "test",
    content: "test",
  };

  const token = localStorage.getItem("access_token");
  $.ajax({
    url: `http://localhost:8888/post`,
    type: "POST",
    data,

    beforeSend: function (xhr) {
      xhr.setRequestHeader("access_token", token);
    },

    success: function (res) {
      window.location.replace("http://10.80.162.87:5501/my_profile.html");
    },
  }).fail(function (err) {
    console.log(err);
  });
}
