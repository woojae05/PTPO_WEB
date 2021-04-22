function loginbtn() {
  const id = $("input[name=id]").val();
  const pw = $("input[name=pw]").val();

  const data = {
    id: id,
    pw: pw,
  };
  $.post("http://10.80.161.242:8888/auth/login", data, function (response) {
    const status = response.status;

    if (status === 200) {
      window.alert("로그인 성공");
      localStorage.setItem("access_token", response.data.token);
      window.location.replace("http://10.80.162.87:5500/web-project");
    }

    if (status === 401) {
      window.alert("id나 pw가 틀렸습니다");
    }
  }).fail(function (err) {
    console.log(err);
  });
}
