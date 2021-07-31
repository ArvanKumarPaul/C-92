player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name + ":" ;
document.getElementById("player_2_name").innerHTML = player_2_name + ":" ;

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player_2_name;

function Send() {

 var Number_1 = document.getElementById("num1").value;
 var Number_2 = document.getElementById("num2").value;
 actual_answer = parseInt(Number_1) * parseInt(Number_2);

 question_number = "<h4>" + Number_1 + " X " + Number_2 + "<h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
 check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
 row = question_number + input_box + check_button;
 document.getElementById("output").innerHTML = row;
 document.getElementById("num1").value = "";
 document.getElementById("num2").value = "";

}

Q_turn = "player_1";
Ans_turn = "player_2";

function Check() {

  get_answer = document.getElementById("input_check_box").value;

  if(get_answer == actual_answer) {

    if(Ans_turn == "player_1") {

      update_player_1_score = player_1_score + 1;
      document.getElementById("player_1_score").innerHTML = update_player_1_score;

    }

    else {

      update_player_2_score = player_2_score + 1;
      document.getElementById("player_2_score").innerHTML = update_player_2_score;

    }

  }

  if(Q_turn == "player_1") {

    Q_turn = "player_2";
    document.getElementById("player_question").innerHTML = Q_turn;

  }

  else {

    Q_turn = "player_1";
    document.getElementById("player_answer").innerHTML = Ans_turn;

  }

}