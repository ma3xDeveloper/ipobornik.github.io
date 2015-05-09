<?php

class AnswersController extends BaseController {
	private $db;

	public function onInit() {
		$this -> titleTab = "Answers";
		$this -> db = new AnswersModel();
	}
		
	public function index() {
		
		$this -> renderView();
	}


	public function filter($question_id) {

		$this -> questionEntitys = $this -> db -> getQuestionById($question_id);
		$this -> questionAnswers = $this -> db -> getQuestionAnswers($question_id);

		$this -> renderView("index");
	}

	public function create($question_id) {
	
		if ($this -> isPost) {
			$answer_author = $_SESSION[ 'username'];
			$answer_text = $_POST['answer_text'];

			if ($this -> db -> createAnswer($answer_author, $answer_text, $question_id)) {
				$this -> addInfoMessage("Answer created.");

			} else {
				$this -> addErrorMessage("Cannot create answer.");
			}
		}

		$url = "/answers/filter/$question_id";
		$this -> redirectToUrl($url);
	}


	public function delete($question_id, $answer_id) {
		$this -> authorizeUser();

		if ($this -> db -> deleteAnswer($answer_id)) {
			$this -> addInfoMessage("Answer deleted.");
		} else {
			$this -> addErrorMessage("Cannot delete answer!");
		}

		$url = "/answers/filter/$answer_id";
		$this -> redirectToUrl($url);
	}

	public function edit($answer_id) {
		$this -> authorizeUser();

		if ($this -> answerToEdit = $this -> db -> getAnswerById($answer_id)) {

			$this -> renderView("editAnswer");

		} else {
			$this -> addErrorMessage("Cannot edit question.");

			$url = "/answers/filter/$answer_id";
			$this -> redirectToUrl($url);
		}
	}

	public function update($id) {
		$this -> authorizeUser();

		if ($this -> isPost) {
			$answer_author = $_SESSION[ 'username'];
			$answer_text = $_POST['answer_text'];
			$answer_id = $id;
			$question_id = $_POST['question_id'];

			if ($this -> db -> updateAnswer($answer_id, $answer_author, $answer_text)) {
				$this -> addInfoMessage("Answer edited.");

			} else {
				$this -> addErrorMessage("Cannot edit answer.");
			}

			$url = "/answers/filter/$question_id";
			$this -> redirectToUrl($url);
		}
	}
}