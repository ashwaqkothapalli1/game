  var player1_name = localStorage.getItem("player1_name");
  var player2_name = localStorage.getItem("player2_name");

  var player1_score = 0;
  var player2_score = 0;
  var answer_turn = "player1";
  var question_turn = "player2";

  document.getElementById("player1_name").innerHTML = player1_name + " : ";
  document.getElementById("player2_name").innerHTML = player2_name + " : ";
  document.getElementById("player1_score").innerHTML = player1_score;
  document.getElementById("player2_score").innerHTML = player2_score;

  function send() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var actual_answer = parseInt(number1) * parseInt(number2);

    var user_answer = document.getElementById("input_check_box").value;
    if (user_answer == actual_answer) {
      if (answer_turn == "player1") {
        player1_score += 1;
        document.getElementById("player1_score").innerHTML = player1_score;
      } else {
        player2_score += 1;
        document.getElementById("player2_score").innerHTML = player2_score;
      }
    }

    if (question_turn == "player1") {
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    } else {
question_turn = "player1";
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if (answer_turn == "player1") {
      answer_turn = "player2";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
      answer_turn = "player1";
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
  }

  function sendManualQuestion() {
    var manual_question = document.getElementById("manual_question").value;
    if (manual_question) {
    }
  }


