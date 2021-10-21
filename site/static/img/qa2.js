//document.write("<div class='content'><div class='container-fluid'><div class='row'><div class='col-sm-12'><div id='result' class='quiz-body'><form name='quizForm' onSubmit=''><fieldset class='form-group'><h4><span id='qid'>1.</span> <span id='question'></span></h4><div class='option-block-container' id='question-options'></div></fieldset><buttonname='previous' id='previous' class='btn btn-success'>上一題</button>&nbsp;<buttonname='next' id='next' class='btn btn-success'>下一題</button></form></div></div></div></div></div>");
var quiz = { "JS": [
  {
    "id": 1,
    "question":document.getElementById("q1").value,
    "options": [
    { "a": document.getElementById("a10").value,
      "b": document.getElementById("a11").value }],
    "answer": document.getElementById("c1").value,
    "score": 0,
    "status": "" },
  {
    "id": 2,
    "question": document.getElementById("q2").value,
    "options": [
    { "a": document.getElementById("a20").value,
      "b": document.getElementById("a21").value }],
    "answer": document.getElementById("c2").value,
    "score": 0,
    "status": "" },
  {
    "id": 3,
    "question": document.getElementById("q2").value,
    "options": [
    { "a": document.getElementById("a30").value,
      "b": document.getElementById("a31").value }],
    "answer": document.getElementById("c3").value,
    "score": 0,
    "status": "" }] };
var quizApp = function () {
  this.score = 0;
  this.qno = 1;
  this.currentque = 0;
  var totalque = quiz.JS.length;
  this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
      $("#tque").html(totalque);
      $("#previous").attr("disabled", false);
      $("#next").attr("disabled", false);
      $("#qid").html(quiz.JS[this.currentque].id + '.');
      $("#question").html(quiz.JS[this.currentque].question);
      $("#question-options").html("");
      for (var key in quiz.JS[this.currentque].options[0]) {
        if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
          $("#question-options").append(
          "<div class='form-check option-block'>" +
          "<label class='form-check-label'>" +
          "<input type='radio' class='form-check-input' name='option'   id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
          quiz.JS[this.currentque].options[0][key] +
          "</span></label>");
        }
      }
    }
    if (this.currentque <= 0) {
      $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
      $('#next').attr('disabled', true);
      for (var i = 0; i < totalque; i++) {if (window.CP.shouldStopExecution(0)) break;
        this.score = this.score + quiz.JS[i].score;
      }window.CP.exitedLoop(0);
      return this.showResult(this.score);
    }
  };

  this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>答對題數: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {if (window.CP.shouldStopExecution(1)) break;
      var res;
      if (quiz.JS[j].score == 0) {
        res = '<i class="fa fa-remove c-wrong"></i>　此題答錯了！';
      } else {
        res = '<i class="fa fa-check c-correct"></i>　恭喜此題答對！';
      }
      $("#result").append(
      '<div class="result-question"><span>問題 ' + quiz.JS[j].id + '</span><br> &nbsp;' + quiz.JS[j].question + '</div>' +
      '<div><b>正確答案:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
      '<div class="last-row">' + res +
      '</div>');
    }window.CP.exitedLoop(1);
  };
  this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/\</g, "&lt;"); //for <
    option = option.replace(/\>/g, "&gt;"); //for >
    option = option.replace(/"/g, "&quot;");
    if (option == quiz.JS[this.currentque].answer) {
      if (quiz.JS[this.currentque].score == "") {
        quiz.JS[this.currentque].score = 1;
        quiz.JS[this.currentque].status = "correct";
      }
    } else {
      quiz.JS[this.currentque].status = "wrong";
    }

  };

  this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
  };
};
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
  jsq.displayQuiz(0);
  $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    $(this).prop("checked", true);
    selectedopt = $(this).val();
  });
});
$('#next').click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(-1);
});
