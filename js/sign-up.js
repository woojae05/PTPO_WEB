function signupbtn() {
  const id = $("input[name=id]").val();
  const nickname = $("input[name=nickname]").val();
  const mail = $("input[name=mail]").val();
  const pw = $("input[name=pw]").val();
  const checkpw = $("input[name=checkpw]").val();

  if ($("input:checkbox[name=agree_checkbox]").is(":checked") == false) {
    window.alert("개인정보 수집 동의를 체크해주세요");
    return;
  }

  if (pw !== checkpw) {
    window.alert("비밀번호 확인과 비밀번호가 서로 다릅니다");
    return;
  }

  const data = {
    id: id,
    name: nickname,
    email: mail,
    pw: pw,
  };
  $.post("http://10.80.161.242:8888/auth/register", data, function (response) {
    const status = response.status;

    if (status === 200) {
      window.alert("가입 성공");
      window.location.replace(
        "http://10.80.162.87:5500/web-project/login.html"
      );
    }
  }).fail(function (err) {
    console.log(err);
  });
}
