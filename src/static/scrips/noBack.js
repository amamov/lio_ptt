// 뒤로가기 방지 (뒤로가면 안되는 페이지에 작성)

//HTML
/* <body
onload="noBack();"
onpageshow="if(event.persisted) noBack();"
onunload=""
> */

window.history.forward();

const noBack = () => {
  window.history.forward();
};

noBack();
