var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
document.getElementById("player1name").innerHTML=player1;
document.getElementById("player2name").innerHTML=player2;
var player1score = 0;
var player2score = 0;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="question turn =" +player1;
document.getElementById("playeranswer").innerHTML="answer turn =" +player2;
var word = "";
function send(){
    question_word = document.getElementById("word").value
    word = question_word.toLowerCase();
    CharAt1 = word.charAt(1)

    length_divide_2 = Math.floor(word.length/2)
    charAt2 = word.charAt(length_divide_2);
    
    charAt3 = word.charAt(word.length-1)

    remove_charAt1 = word.replace(CharAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question_word1 = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()' >Check </button>"
    row = question_word1 + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}


questionturn = "player1"
answerturn = "player2"

function check(){
    getanswer = document.getElementById("input_check_box").value
    answer = getanswer.toLowerCase();

    if(answer == word){
        if(answerturn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML=player1score;

        }
        else{
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }
    if(questionturn == "player1"){
        questionturn = "player2"
        document.getElementById("playerquestion").innerHTML= "questionturn = " +player2;
    }
    else{
        questionturn = "player1"
        document.getElementById("playerquestion").innerHTML= "questionturn = " +player1;
    }

    if(answerturn == "player1"){
        answerturn = "player2"
        document.getElementById("playeranswer").innerHTML= "answerturn = " +player2;
    }
    else{
        answerturn = "player1"
        document.getElementById("playeranswer").innerHTML= "answerturn = " +player1;
    }

    document.getElementById("output").innerHTML = "";
}
