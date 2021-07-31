function addUser() {

  var player_1_name = document.getElementById("player_1_name_int").value;
  var player_2_name = document.getElementById("player_2_name_int").value;

  localStorage.setItem("player_1_name" , player_1_name);
  localStorage.setItem("player_2_name" , player_2_name);

  window.location = "game_page.html";

}