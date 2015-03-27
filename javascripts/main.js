function showHome() {
  document.getElementById("articleList").className = "hidden_element"
  document.getElementById("home").className = "visible_element";
}

function showArticleList() {
  document.getElementById("articleList").className = "visible_element"
  document.getElementById("home").className = "hidden_element";
}